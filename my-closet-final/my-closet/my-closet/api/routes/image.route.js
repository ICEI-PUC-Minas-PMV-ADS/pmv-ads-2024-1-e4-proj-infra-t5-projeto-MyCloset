import express from 'express';
import { uploadImage, getImages, deleteImage, updateImage } from '../controllers/image.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
import upload from '../config/multer.js';

const router = express.Router();

router.post('/upload', verifyToken, upload.single('image'), uploadImage);
router.get('/', verifyToken, getImages); // Protect this route
router.delete('/:id', verifyToken, deleteImage);
router.put('/:id', verifyToken, updateImage);

export default router;
