import Recipe from '../models/recipe_model.mjs';

export const createRecipe = async (req, res) => {
  try {

    const recipeData = req.body;
    // Create a new Recipe model instance with the received data
    const recipe = new Recipe(recipeData);
    console.log(recipe)
    // Save the recipe to the database
    await recipe.save();

    res.status(201).json({ recipe });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
