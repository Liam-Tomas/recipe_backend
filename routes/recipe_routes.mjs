import express from 'express';
import { searchRecipes } from '../controllers/recipe_search_controller.mjs';
import { filterSearch } from '../controllers/filter_controller.mjs';
import { getRecipeDetail } from '../controllers/details_controller.mjs';
import { createRecipe } from '../controllers/my_recipes_controller.mjs';
import { getMyRecipes } from '../controllers/my_recipes_controller.mjs';
import { removeMyRecipe } from '../controllers/my_recipes_controller.mjs'; // adjust the path accordingly
import { updateMyRecipe } from '../controllers/my_recipes_controller.mjs' 
import { getFavorites, removeFavorite, addFavorite } from '../controllers/favorites_controller.mjs'; // Import the addFavorite controller function


const router = express.Router();

// Routes for searching recipes on Explore Page
router.get('/search', searchRecipes);
router.get('/filter', filterSearch);
router.get('/:id/information', getRecipeDetail);

// Routes for user created recipes
router.get('/myrecipes', getMyRecipes);
router.post('/myrecipes', createRecipe);
router.delete('/myrecipes/:id', removeMyRecipe);
router.put('/myrecipes/edit/:id', updateMyRecipe);

// Routes for favorites
router.post('/favorites', addFavorite);
router.delete('/favorites/:recipeId', removeFavorite);
router.get('/favorites', getFavorites);

export default router;
