import express from 'express';
import { searchRecipes } from '../controllers/recipe_search_controller.mjs';
import { getRecipeDetail } from '../controllers/details_controller.mjs';
import { createRecipe } from '../controllers/my_recipes_controller.mjs';
import { getMyRecipes } from '../controllers/my_recipes_controller.mjs';
import { removeMyRecipe } from '../controllers/my_recipes_controller.mjs'; // adjust the path accordingly
import { updateMyRecipe } from '../controllers/my_recipes_controller.mjs' 
import { getFavorites, removeFavorite, addFavorite } from '../controllers/favorites_controller.mjs'; // Import the addFavorite controller function
import rateLimit from 'express-rate-limit';

// Define the limiter middleware
const apiLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour in milliseconds
    max: 21,
    message: "Too many requests, please try again later."
  });

const router = express.Router();

// Routes for searching recipes on Explore Page
router.get('/search', apiLimiter, searchRecipes);
router.get('/:id/information', apiLimiter, getRecipeDetail);

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
