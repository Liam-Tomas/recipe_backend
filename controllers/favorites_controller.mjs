import Favorite from '../models/favorites_model.mjs';

export const addFavorite = async (req, res) => {
  const userUID = req.headers['x-user-uid']; // Get UID from headers
  const { recipeId, title, image, servings, sourceUrl, readyInMinutes } = req.body; // Include title and image in the request body


  if (!userUID || !recipeId) {
    return res.status(400).send({ message: "User UID or Recipe ID missing." });
  }

  try {
    const newFavorite = new Favorite({
      userUID,
      recipeId,
      title,
      image,
      servings,
      sourceUrl,
      readyInMinutes
    });

    await newFavorite.save();
    console.log(`Recipe with ID ${recipeId} added to favorites`); // Log success

    return res.status(201).send({ message: "Favorite added successfully." });
  } catch (error) {
    return res.status(500).send({ message: "Error adding favorite.", error: error.message });
  }
}

export const removeFavorite = async (req, res) => {
  const userUID = req.headers['x-user-uid'];
  const { recipeId } = req.params;

  if (!userUID || !recipeId) {
    return res.status(400).send({ message: "User UID or Recipe ID missing." });
  }

  try {
    await Favorite.deleteOne({ userUID, recipeId });
    console.log(`Recipe with ID ${recipeId} removed from favorites`); // Log success
    return res.status(200).send({ message: "Favorite removed successfully." });
  } catch (error) {
    return res.status(500).send({ message: "Error removing favorite.", error: error.message });
  }
}

export const getFavorites = async (req, res) => {
  const userUID = req.headers['x-user-uid'];

  if (!userUID) {
    return res.status(400).send({ message: "User UID missing." });
  }

  try {
    const favorites = await Favorite.find({ userUID });
    return res.status(200).send(favorites);
  } catch (error) {
    return res.status(500).send({ message: "Error fetching favorites.", error: error.message });
  }
}
