
import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({
  url: String,
  public_id: String,
  category: {
    type: String,
    enum: ['Top', 'Bottom', 'Shoes'],
    required: true,
  },
  color: {
    type: String,
    enum: ['Vermelho', 'Amarelo', 'Azul', 'Laranja', 'Verde', 'Roxo', 'Preto', 'Branco', 'Cinza', 'Marrom'],
    required: true,
  },
  size: {
    type: String,
    enum: ['S', 'M', 'G'],
    required: true,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Image = mongoose.model('Image', ImageSchema);

export { Image };
