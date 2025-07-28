const Category = require('../models/Category');

class CategoryController {

    async getAll(req, res) {
        // https://mongoosejs.com/docs/api/model.html#Model.find()
        const categories = await Category.find();

        res.json(categories);
    }

    async create(req, res) {
        // https://mongoosejs.com/docs/api/model.html#Model.create()
        const category = await Category.create(req.body);

        res.json(category);
    }
}

module.exports = new CategoryController;