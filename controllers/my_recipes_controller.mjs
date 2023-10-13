
import UserRecipe from '../models/user_recipe_model.mjs';

export const getMyRecipes = async (req, res) => {
  try {
    // Fetch all recipes from the database
    const recipes = await UserRecipe.find();
    // Send the recipes as a JSON response
    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const removeMyRecipe = async (req, res) => {
  try {
    // Extract the recipe ID from the request
    const { id } = req.params;

    // Use Mongoose's findByIdAndDelete to remove the recipe
    const deletedRecipe = await UserRecipe.findByIdAndDelete(id);

    // Check if the deletion was successful
    if (!deletedRecipe) {
      return res.status(404).json({ error: 'No recipe found with this ID' });
    }

    // Respond with a success message
    res.json({ message: 'Recipe successfully deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};