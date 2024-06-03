import mongoose from 'mongoose';

const OutfitSchema = new mongoose.Schema({
  url: String,
  public_id: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Outfit = mongoose.model('Outfit', OutfitSchema);

export { Outfit };
