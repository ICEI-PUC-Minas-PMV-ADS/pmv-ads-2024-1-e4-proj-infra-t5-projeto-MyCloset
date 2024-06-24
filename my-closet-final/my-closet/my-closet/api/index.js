import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import imageRoutes from './routes/image.route.js';
import outfitRoutes from './routes/outfit.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config();

console.log('CLOUDINARY_CLOUD_NAME:', process.env.CLOUDINARY_CLOUD_NAME);
console.log('CLOUDINARY_API_KEY:', process.env.CLOUDINARY_API_KEY);
console.log('CLOUDINARY_API_SECRET:', process.env.CLOUDINARY_API_SECRET);
console.log('MONGO:', process.env.MONGO);

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/images', imageRoutes);
app.use('/api/outfit', outfitRoutes);


// Serve static files from React app
app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// Global error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  console.error('Global Error Handler:', err);
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server conectado na port 3000');
});
