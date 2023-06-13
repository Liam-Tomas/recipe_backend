import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import mongoose from 'mongoose';
import recipeRoutes from "./routes/recipe_routes.mjs";

dotenv.config();

const app = express();

// MongoDB connection
const db = process.env.MONGODB_CONNECT_STRING;
console.log(db)
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

app.use(cors());

// Register routes
app.use("/recipes", recipeRoutes);

// app.use("/favorites", favoritesRoutes)

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
