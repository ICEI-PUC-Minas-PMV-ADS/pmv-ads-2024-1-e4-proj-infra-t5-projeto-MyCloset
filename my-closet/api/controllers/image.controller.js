import { Image } from '../models/image.model.js';
import { cloudinary } from '../config/cloudinary.js';

export const uploadImage = async (req, res) => {
  const { category, color, size } = req.body;
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const image = new Image({
      url: result.secure_url,
      public_id: result.public_id,
      category,
      color,
      size,
    });
    await image.save();
    res.json(image);
  } catch (err) {
    console.error('Erro upando Imagem:', err);
    res.status(500).json({ error: err.message });
  }
};

export const getImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (err) {
    console.error('Get Images Error:', err);
    res.status(500).json({ error: err.message });
  }
};

export const deleteImage = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) return res.status(404).json({ error: 'Imagem nao encontrada' });

    await cloudinary.uploader.destroy(image.public_id);
    await Image.findByIdAndDelete(req.params.id);
    res.json({ message: 'Imagem deletada' });
  } catch (err) {
    console.error('Delete Image Error:', err);
    res.status(500).json({ error: err.message });
  }
};

export const updateImage = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const image = await Image.findByIdAndUpdate(id, updates, { new: true });
    if (!image) return res.status(404).json({ error: 'Imagem nao encontrada' });
    res.json(image);
  } catch (err) {
    console.error('Erro ao atualizar:', err);
    res.status(500).json({ error: err.message });
  }
};

