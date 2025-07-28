const Recipe = require('../models/Recipe');

class RecipeController {

    async getAll(req, res) {
        // https://mongoosejs.com/docs/api/model.html#Model.find()
        // https://mongoosejs.com/docs/populate.html
        const recipes = await Recipe.find().populate('category');

        res.json(recipes);
    }

    async getOne(req, res) {
        const recipe = await Recipe.findById(req.params.id).populate('category');

        res.json(recipe);
    }

    async create(req, res) {
        // https://mongoosejs.com/docs/api/model.html#Model.create()
        const recipe = await Recipe.create(req.body);

        res.json(recipe);
    }

    async update(req, res) {
        const { id } = req.params;
        // https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()
        const recipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true });

        res.json(recipe);
    }

    async delete(req, res) {
        const { id } = req.params;
        // https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()
        const recipe = await Recipe.findByIdAndDelete(id);

        res.json(recipe);
    }
}

module.exports = new RecipeController;