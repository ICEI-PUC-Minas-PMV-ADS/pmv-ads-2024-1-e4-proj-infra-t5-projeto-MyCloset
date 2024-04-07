import asyncHandler from 'express-async-handler';
import Piece from '../models/pieceModel.js';

// @desc    Adicionar uma nova peça
// @route   POST /api/pieces
// @access  Private
const addPiece = asyncHandler(async (req, res) => {
  const { name, category, imageUrl } = req.body;

  const piece = await Piece.create({
    name,
    category,
    imageUrl,
    user: req.user._id, // Vincular a peça ao usuário que a adicionou
  });

  if (piece) {
    res.status(201).json(piece);
  } else {
    res.status(400);
    throw new Error('Invalid piece data');
  }
});

// @desc    Listar todas as peças
// @route   GET /api/pieces
// @access  Public
const getAllPieces = asyncHandler(async (req, res) => {
  const pieces = await Piece.find({});

  res.json(pieces);
});

// @desc    Favoritar uma peça
// @route   POST /api/pieces/:id/favorite
// @access  Private
const favoritePiece = asyncHandler(async (req, res) => {
  const piece = await Piece.findById(req.params.id);

  if (piece) {
    // Adicionar o usuário atual à lista de favoritos da peça
    if (!piece.favorites.includes(req.user._id)) {
      piece.favorites.push(req.user._id);
      await piece.save();
    }
    res.json(piece);
  } else {
    res.status(404);
    throw new Error('Piece not found');
  }
});

// @desc    Visualizar todas as peças favoritas do usuário
// @route   GET /api/pieces/favorites
// @access  Private
const getFavoritePieces = asyncHandler(async (req, res) => {
  const pieces = await Piece.find({ favorites: req.user._id });

  res.json(pieces);
});

export {
  addPiece,
  getAllPieces,
  favoritePiece,
  getFavoritePieces,
};