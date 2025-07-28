const express = require('express');

const router = express.Router();

const CategoryController = require('../controllers/category.controller');

// CRUD :
// C : Create -> POST
router.post('/', CategoryController.create);
// R : Read -> GET
router.get('/', CategoryController.getAll);

module.exports = router;