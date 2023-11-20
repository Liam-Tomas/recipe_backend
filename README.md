# Recipe Portfolio Project - Backend

## Overview
The backend for the Recipe Manager Web Application is a Node.js server using Express.js. It interfaces with MongoDB to store and manage recipe data and handles various API requests for recipe management and user interaction.

## Key Components

### Main Server (app.mjs)
- Initializes the Express.js server.
- Sets up MongoDB connection using Mongoose.
- Configures CORS and JSON middleware for API request handling.
- Registers recipe-related routes.

### Controllers
- **details_controller.mjs:** Manages detailed recipe data operations.
- **favorites_controller.mjs:** Handles user favorite recipes, including adding, retrieving, and deleting favorites.
- **filter_controller.mjs:** Provides functionality for filtering recipes based on user preferences.
- **my_recipes_controller.mjs:** Manages operations related to user-created recipes.
- **recipe_search_controller.mjs:** Implements the recipe search functionality, including querying external APIs and storing results.

### Models
- **recipe_model.mjs:** Mongoose schema and model for recipes, including fields for various recipe attributes.
- **favorites_model.mjs:** Manages the favorites data schema.
- **user_recipe_model.mjs:** Schema for user-submitted recipes.

### Routes
- **recipe_routes.mjs:** Defines the Express routes for handling recipe-related operations.

## API Endpoints
### Recipe Search and Management
- `GET /recipes/search`: Retrieves a list of recipes based on query parameters such as keywords, dietary preferences, and sorting options. Supports pagination for displaying results.
- `POST /recipes`: Endpoint for users to add new recipes to the database. Requires authentication.
- `GET /recipes/:id`: Fetches detailed information about a specific recipe identified by its unique ID.
- `PUT /recipes/:id`: Updates the details of an existing recipe. This endpoint is restricted to the user who created the recipe.
- `DELETE /recipes/:id`: Removes a recipe from the database. Only accessible by the recipe's creator or an admin.
### User Favorites
- `GET /recipes/favorites`: Retrieves the list of a user's favorite recipes. User identification is required.
- `POST /recipes/favorites`: Adds a recipe to the user's favorites list. Requires user identification.
- `DELETE /recipes/favorites/:id`: Removes a recipe from the user's favorites. The ID in the request specifies the recipe to be removed.
### Recipe Details
- `GET /recipes/details/:id`: Provides comprehensive details of a recipe, including ingredients, cooking instructions, and nutritional information.
### Filters and Sorting
- `GET /recipes/filters`: Returns a list of available filters, such as dietary restrictions or meal types, that can be applied to recipe searches.
- `GET /recipes/sort`: Provides sorting options for recipe searches, such as sorting by popularity, preparation time, or healthiness.


## Environment Variables
Description of required environment variables (e.g., MONGODB_CONNECT_STRING, PORT, etc.).

## Repository Structure
Provide an overview of the repository structure, highlighting the key directories and files.

## Technologies Used
- Node.js and Express.js for server-side logic.
- MongoDB with Mongoose for database management.
- Axios for external API requests.
- CORS for handling cross-origin requests.

