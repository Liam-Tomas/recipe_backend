
import axios from 'axios';
import Recipe from '../models/recipe_model.mjs';

export const searchRecipes = async (req, res) => {
  try {
    const { query, page = 1, limit = 12, diet, type} = req.query;

    const offset = (page - 1) * limit;
    
    const response = await axios.get(
      'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
      {
        headers: {
          'X-RapidAPI-Key': 'b4ba6e2735msh5b888f9e9a7aa63p14a01bjsnd5996c3ceb6a',
          'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        },
        params: {
          query,
          addRecipeInformation: true,
          sort: req.query.sort || 'popularity', // sort by popularity if no sort query param is provided
          number: limit,
          offset: offset,
          diet: diet || '',
          type: type || '',
        },
      }
    );

    const recipes = [];

    for (const recipeData of response.data.results) {
      // Check if the recipe already exists in the database using its ID
      let recipe = await Recipe.findOne({ id: recipeData.id });
  
      if (!recipe) {
          // If the recipe doesn't exist, create a new instance and save it
          recipe = new Recipe(recipeData);
          await recipe.save();
          console.log('data saved');
      }
      // Push the recipe (whether existing or new) to the recipes array
      recipes.push(recipe);
  }
  

    // Sort recipes by aggregateLikes
    // recipes.sort((a, b) => b.aggregateLikes - a.aggregateLikes);

    res.json({results: recipes});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
