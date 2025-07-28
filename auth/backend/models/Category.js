const mongoose = require('mongoose');

// https://mongoosejs.com/docs/schematypes.html
const categorySchema = mongoose.Schema({
    name: {
        required: true,
        type: String
    }
})

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;