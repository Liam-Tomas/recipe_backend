import mongoose from 'mongoose'

const favoriteSchema = new mongoose.Schema({
  recipeId: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

export default favoriteSchema
