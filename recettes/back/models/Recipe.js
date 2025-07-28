const mongoose = require('mongoose');

// https://mongoosejs.com/docs/schematypes.html
const recipeSchema = mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String
    },
    preparationTime: {
        required: true,
        type: Number
    },
    category: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }
})

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;