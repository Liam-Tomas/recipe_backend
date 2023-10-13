import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserRecipeSchema = new Schema({
    userUID: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    recipes: Array,
    id: Number,
    title: String,
    image: String,
    number: Number,
    type: String,
    vegetarian: Boolean,
    vegan: Boolean,
    glutenFree: Boolean,
    dairyFree: Boolean,
    veryHealthy: Boolean,
    cheap: Boolean,
    veryPopular: Boolean,
    sustainable: Boolean,
    lowFodmap: Boolean,
    weightWatcherSmartPoints: Number,
    gaps: String,
    preparationMinutes: Number,
    cookingMinutes: Number,
    aggregateLikes: Number,
    healthScore: Number,
    creditsText: String,
    sourceName: String,
    pricePerServing: Number,
    readyInMinutes: Number,
    servings: Number,
    sourceUrl: String,
    imageType: String,
    summary: String,
    cuisines: [String],
    dishTypes: [String],
    diets: [String],
    occasions: [String],
    analyzedInstructions: [
        {
            name: String,
            steps: [
                {
                    number: Number,
                    step: String,
                    ingredients: [
                        {
                            id: Number,
                            name: String,
                            localizedName: String,
                            image: String,
                        },
                    ],
                    equipment: [
                        {
                            id: Number,
                            name: String,
                            localizedName: String,
                            image: String,
                        },
                    ],
                    length: {
                        number: Number,
                        unit: String,
                    },
                },
            ],
        },
    ],
});

const UserRecipe = mongoose.model('UserRecipe', UserRecipeSchema);

export default UserRecipe;


