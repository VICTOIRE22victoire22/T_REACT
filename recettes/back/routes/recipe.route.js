const express = require('express');

const router = express.Router();

const RecipeController = require('../controllers/recipe.controller');

// CRUD :
// C : Create -> POST
router.post('/', RecipeController.create);
// R : Read -> GET
router.get('/', RecipeController.getAll);
router.get('/:id', RecipeController.getOne);
// U : Update -> PUT
router.put("/:id", RecipeController.update);
// D : Delete -> DELETE
router.delete("/:id", RecipeController.delete);

module.exports = router;