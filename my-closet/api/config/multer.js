// config/multer.js
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { cloudinary } from './cloudinary.js';

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'roupas',
    allowed_formats: ['jpg', 'png'],
  },
});

const upload = multer({ storage });

export default upload;
