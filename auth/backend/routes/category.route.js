const express = require('express');

const router = express.Router();

const CategoryController = require('../controllers/category.controller');
const verifyToken = require("../middlewares/auth");

// CRUD :
// C : Create -> POST
router.post('/', verifyToken, CategoryController.create);
// R : Read -> GET
router.get('/', CategoryController.getAll);

module.exports = router;