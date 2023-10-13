import express from 'express';
import { searchRecipes } from '../controllers/recipe_search_controller.mjs';
import { filterSearch } from '../controllers/filter_controller.mjs';
import { getRecipeDetail } from '../controllers/details_controller.mjs';
import { createRecipe } from '../controllers/create_recipe_controller.mjs';
import { getMyRecipes } from '../controllers/my_recipes_controller.mjs';
import { getFavorites, removeFavorite, addFavorite } from '../controllers/favorites_controller.mjs'; // Import the addFavorite controller function
import { removeMyRecipe } from '../controllers/my_recipes_controller.mjs'; // adjust the path accordingly


const router = express.Router();

// Search Recipes on Explore Page
router.get('/search', searchRecipes);
router.get('/filter', filterSearch);
router.get('/:id/information', getRecipeDetail);

// CRUD For my recipes
router.get('/myrecipes', getMyRecipes);
router.post('/myrecipes', createRecipe);
router.delete('/myrecipes/:id', removeMyRecipe);

// Add the route for adding favorites
router.post('/favorites', addFavorite);
// Add a route for removing favorites
router.delete('/favorites/:recipeId', removeFavorite);
router.get('/favorites', getFavorites);


export default router;
