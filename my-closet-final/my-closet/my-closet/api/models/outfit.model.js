import mongoose from 'mongoose';

const OutfitSchema = new mongoose.Schema({
  url: String,
  public_id: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Outfit = mongoose.model('Outfit', OutfitSchema);

export { Outfit };
