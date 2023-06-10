import axios from 'axios';

export const getRecipeDetail = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const response = await axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`, {
      headers: {
        'X-RapidAPI-Key': 'b4ba6e2735msh5b888f9e9a7aa63p14a01bjsnd5996c3ceb6a',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      },
    });

    const recipeDetail = response.data;
    res.json(recipeDetail);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch recipe detail' });
  }
};

