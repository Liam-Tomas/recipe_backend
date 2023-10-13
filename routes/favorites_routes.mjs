import express from 'express';
import { addFavorite, removeFavorite, getFavorites } from '../controllers/favorites_controller.mjs';

const router = express.Router();

// Define your routes based on the desired endpoints
router.post('/add', addFavorite);
router.delete('/remove/:recipeId', removeFavorite);
router.get('/', getFavorites);

export default router;
