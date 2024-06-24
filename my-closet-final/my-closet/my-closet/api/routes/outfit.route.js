import express from 'express';
import { mergeOutfit, getOutfits, deleteOutfit } from '../controllers/outfit.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/merge', verifyToken, mergeOutfit); // protege a rota
router.get('/', verifyToken, getOutfits); // protege a rota
router.delete('/:id', verifyToken, deleteOutfit); // protege a rota

export default router;
