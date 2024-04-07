import mongoose from 'mongoose';

const pieceSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['top', 'bottom'], // Defina as categorias possíveis aqui
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    favorites: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Referência ao modelo de usuário para armazenar os favoritos
    }],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Referência ao usuário que adicionou a peça
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Piece = mongoose.model('Piece', pieceSchema);

export default Piece;