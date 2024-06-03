import sharp from 'sharp';
import axios from 'axios';
import { cloudinary } from '../config/cloudinary.js';
import { Image } from '../models/image.model.js';
import { Outfit } from '../models/outfit.model.js';

// funcao pra baixar a img da url
const downloadImage = async (url) => {
  const response = await axios({
    url,
    responseType: 'arraybuffer',
  });
  return Buffer.from(response.data, 'binary');
};

export const mergeOutfit = async (req, res) => {
  const { topId, bottomId } = req.body;

  try {
    // fetch imagens do documento do mongo
    const topImageDoc = await Image.findById(topId);
    const bottomImageDoc = await Image.findById(bottomId);

    if (!topImageDoc || !bottomImageDoc) {
      return res.status(404).json({ error: 'Top or bottom image not found' });
    }

    // baixar as imagens do toop e do bottom do cloudinary
    const topImageBuffer = await downloadImage(topImageDoc.url);
    const bottomImageBuffer = await downloadImage(bottomImageDoc.url);

    const topMetadata = await sharp(topImageBuffer).metadata();
    const bottomMetadata = await sharp(bottomImageBuffer).metadata();

    
    const width = Math.max(topMetadata.width, bottomMetadata.width);


    const topX = Math.floor((width - topMetadata.width) / 2);
    const bottomX = Math.floor((width - bottomMetadata.width) / 2);

    // merge das imagens verticalmente, centralizando horizontalmente - revisar
    const mergedImageBuffer = await sharp({
      create: {
        width: width,
        height: topMetadata.height + bottomMetadata.height,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      }
    })
      .composite([
        { input: topImageBuffer, top: 0, left: topX },
        { input: bottomImageBuffer, top: topMetadata.height, left: bottomX }
      ])
      .png()
      .toBuffer();

    // upar merge da imagem para o cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'outfit' },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
      uploadStream.end(mergedImageBuffer);
    });

    // salvar no mongoDB
    const outfit = new Outfit({
      url: uploadResult.secure_url,
      public_id: uploadResult.public_id,
    });
    await outfit.save();

    res.json(outfit);
  } catch (error) {
    console.error('Error merging outfit:', error);
    res.status(500).json({ error: 'Failed to merge outfit' });
  }
};

export const getOutfits = async (req, res) => {
  try {
    const outfits = await Outfit.find();
    res.json(outfits);
  } catch (error) {
    console.error('Error fetching outfits:', error);
    res.status(500).json({ error: 'Failed to fetch outfits' });
  }
};
