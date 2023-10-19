import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserRecipeSchema = new Schema({
    userUID: {
      type: String,
      required: true,
    },
    title: String,
    id: Number,
    image: String,
    vegetarian: Boolean,
    // vegan: Boolean,
    // glutenFree: Boolean,
    // dairyFree: Boolean,
    preparationMinutes: Number,
    // readyInMinutes: Number,
    servings: Number,
    summary: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

const UserRecipe = mongoose.model('UserRecipe', UserRecipeSchema);

export default UserRecipe;
