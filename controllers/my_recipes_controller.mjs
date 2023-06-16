
import Recipe from '../models/recipe_model.mjs';

export const getMyRecipes = async (req, res) => {
  try {
    // Fetch all recipes from the database
    const recipes = await Recipe.find();
    // Send the recipes as a JSON response
    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
