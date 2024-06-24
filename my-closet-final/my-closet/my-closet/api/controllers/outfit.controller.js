import sharp from 'sharp';
import axios from 'axios';
import { cloudinary } from '../config/cloudinary.js';
import { Image } from '../models/image.model.js';
import { Outfit } from '../models/outfit.model.js';

// função para baixar a imagem da URL
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
    // busca as imagens dos documentos no MongoDB
    const topImageDoc = await Image.findById(topId);
    const bottomImageDoc = await Image.findById(bottomId);

    if (!topImageDoc || !bottomImageDoc) {
      return res.status(404).json({ error: 'Top or bottom image not found' });
    }

    // baixa as imagens do Cloudinary
    const topImageBuffer = await downloadImage(topImageDoc.url);
    const bottomImageBuffer = await downloadImage(bottomImageDoc.url);

    const topMetadata = await sharp(topImageBuffer).metadata();
    const bottomMetadata = await sharp(bottomImageBuffer).metadata();

    const width = Math.max(topMetadata.width, bottomMetadata.width);

    const topX = Math.floor((width - topMetadata.width) / 2);
    const bottomX = Math.floor((width - bottomMetadata.width) / 2);

    // mescla as imagens verticalmente, centralizando horizontalmente
    const mergedImageBuffer = await sharp({
      create: {
        width: width,
        height: topMetadata.height + bottomMetadata.height,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 0 },
      },
    })
      .composite([
        { input: topImageBuffer, top: 0, left: topX },
        { input: bottomImageBuffer, top: topMetadata.height, left: bottomX },
      ])
      .png()
      .toBuffer();

    // faz o upload da imagem mesclada para o Cloudinary
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

    // salva no MongoDB
    const outfit = new Outfit({
      url: uploadResult.secure_url,
      public_id: uploadResult.public_id,
      user: req.user.id, // associa o outfit ao usuário autenticado
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
    const outfits = await Outfit.find({ user: req.user.id }); // filtra pelos outfits do usuário logado
    res.json(outfits);
  } catch (error) {
    console.error('Error fetching outfits:', error);
    res.status(500).json({ error: 'Failed to fetch outfits' });
  }
};

export const deleteOutfit = async (req, res) => {
  try {
    const outfit = await Outfit.findById(req.params.id);
    if (!outfit) {
      return res.status(404).json({ error: 'Outfit not found' });
    }

    // Deletar a imagem do Cloudinary
    await cloudinary.uploader.destroy(outfit.public_id);

    // Deletar o outfit do MongoDB
    await Outfit.findByIdAndDelete(req.params.id);

    res.json({ message: 'Outfit deleted' });
  } catch (error) {
    console.error('Error deleting outfit:', error);
    res.status(500).json({ error: 'Failed to delete outfit' });
  }
};
