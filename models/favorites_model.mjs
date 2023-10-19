import mongoose from 'mongoose';

const { Schema } = mongoose;

const FavoriteSchema = new Schema({
    userUID: { 
        type: String, 
        required: true
    },
    recipeId: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    servings: {
      type: String,
      required: false
    },
    sourceUrl: {
        type: String,
        required: false

    },
    readyInMinutes: {
        type: Number,
        require: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});


const Favorite = mongoose.model('Favorite', FavoriteSchema);

export default Favorite;
