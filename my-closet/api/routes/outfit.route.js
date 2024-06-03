import express from 'express';
import { mergeOutfit, getOutfits } from '../controllers/outfit.controller.js';

const router = express.Router();

router.post('/merge', mergeOutfit);
router.get('/', getOutfits);

export default router;
