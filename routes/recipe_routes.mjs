import express from 'express';
import { searchRecipes } from '../controllers/recipe_search_controller.mjs';
import { filterSearch } from '../controllers/filter_controller.mjs'
import { getRecipeDetail } from '../controllers/details_controller.mjs'

const router = express.Router();

router.get('/search', searchRecipes);
router.get('/filter', filterSearch);
router.get('/:id/information', getRecipeDetail);
// router.post('/favorites', addtoFavorites)


export default router;