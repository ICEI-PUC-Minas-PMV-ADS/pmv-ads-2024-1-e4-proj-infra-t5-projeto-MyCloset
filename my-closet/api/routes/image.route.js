import express from 'express';
import upload from '../config/multer.js';
import { uploadImage, getImages, deleteImage, updateImage } from '../controllers/image.controller.js';

const router = express.Router();

router.post('/upload', upload.single('image'), uploadImage);
router.get('/', getImages);
router.delete('/:id', deleteImage);
router.put('/:id', updateImage);

export default router;
