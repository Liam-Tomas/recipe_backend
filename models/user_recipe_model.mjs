import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserRecipeSchema = new Schema({
  // define the schema fields here, similar to your existing Recipe model
  // ...
});

const UserRecipe = mongoose.model('UserRecipe', UserRecipeSchema);

export default UserRecipe;
