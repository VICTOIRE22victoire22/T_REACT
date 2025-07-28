const express = require('express');

const router = express.Router();

const RecipeController = require('../controllers/recipe.controller');
const verifyToken = require("../middlewares/auth");

// CRUD :
// C : Create -> POST
router.post('/', verifyToken, RecipeController.create);
// R : Read -> GET
router.get('/', RecipeController.getAll);
router.get('/:id', RecipeController.getOne);
// U : Update -> PUT
router.put("/:id", verifyToken, RecipeController.update);
// D : Delete -> DELETE
router.delete("/:id", verifyToken, RecipeController.delete);

module.exports = router;