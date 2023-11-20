// import axios from 'axios';
// import Recipe from '../models/recipe_model.mjs';

// export const filterSearch = async (req, res) => {
//     try {
//       const { diets, page = 1, limit = 15, veryPopular, cuisines } = req.query;
  
//       await Recipe.deleteMany({});
  
//       const offset = (page - 1) * limit;
  
//       const response = await axios.get(
//         'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
//         {
//           headers: {
//             'X-RapidAPI-Key': 'b4ba6e2735msh5b888f9e9a7aa63p14a01bjsnd5996c3ceb6a',
//             'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
//           },
//           params: {
//             diet: diets,
//             sort: 'popularity',
//             cuisine: cuisines,
//             addRecipeInformation: true,
//             number: limit,
//             offset: offset,
//           },
//         }
//       );
  
//       response.data.results.sort((a, b) => b.aggregateLikes - a.aggregateLikes);
  
//       response.data.results.forEach(async (recipeData) => {
//         const recipe = new Recipe(recipeData);
//         await recipe.save();
//         console.log('data saved')
//       });
  
//       res.json(response.data);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   };
  
  