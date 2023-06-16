
import axios from 'axios';
import Recipe from '../models/recipe_model.mjs';

export const searchRecipes = async (req, res) => {
  try {
    const { query, page = 1, limit = 20, diet, type} = req.query;

    await Recipe.deleteMany({});

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
          diet: diet || '', // Use the diet parameter from the request or default to 'vegetarian'
          type: type || '',
        },
      }
    );

    const recipes = [];

    for (const recipeData of response.data.results) {
      // Create a new Recipe model instance with the data
      const recipe = new Recipe(recipeData);
      // Save it to the database
      await recipe.save();
      console.log('data saved');
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
