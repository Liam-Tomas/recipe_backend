
import UserRecipe from '../models/user_recipe_model.mjs';

export const createRecipe = async (req, res) => {
  try {

    const recipeData = req.body;
    const userUID = recipeData.userUID;
    // Verify is user is logged in
    if (!userUID) {
      return res.status(400).json({ error: 'User UID is required' });
    }
    // Create a new Recipe model instance with the received data
    const recipe = new UserRecipe(recipeData);
    console.log(recipe)

    // Save the recipe to the database
    await recipe.save();

    res.status(201).json({ recipe });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getMyRecipes = async (req, res) => {
  try {
    const { userUID } = req.query;

    if (!userUID) {
      return res.status(400).json({ error: 'User UID is required' });
    }
    // Fetch all recipes associated with the specified userUID
    const recipes = await UserRecipe.find({ userUID });
    // Send the recipes as a JSON response
    res.json({ recipes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const removeMyRecipe = async (req, res) => {
  try {
    const recipeData = req.body;
    const userUID = recipeData.userUID;
    if (!userUID) {
      return res.status(400).json({ error: 'User UID is required' });
    }
    // Extract the recipe ID from the request
    const { id } = req.params;
    // Use Mongoose's findByIdAndDelete to remove the recipe
    const recipeToDelete = await UserRecipe.findOne({ _id: id, userUID: userUID });
    // Check if the deletion was successful
    if (!recipeToDelete) {
      return res.status(404).json({ error: 'No recipe found with this ID' });
    }
    // Delete the recipe
    await recipeToDelete.remove();
    // Respond with a success message
    res.json({ message: 'Recipe successfully deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateMyRecipe = async (req, res) => {
  try {
    const recipeData = req.body;
    console.log(recipeData)
    const userUID = recipeData.userUID;
    const id = recipeData._id;
    console.log(id)

    if (!userUID) {
      return res.status(400).json({ error: 'User UID is required' });
    }

    const updatedRecipe = await UserRecipe.findOneAndUpdate({ _id: id, userUID: userUID }, recipeData, { new: true });


    if (!updatedRecipe) {
      return res.status(404).json({ error: 'No recipe found with this ID' });
    }

    res.json({ recipe: updatedRecipe });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
