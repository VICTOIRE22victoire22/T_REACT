const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.controller');
const verifyToken = require("../middlewares/auth");


router.post('/register', UserController.register);
router.post('/login', UserController.login);
// Le middleWare verifyToken va recuperer l'utilisateur connecté
// Si il y en a pas, alors ca s'arrete la et ca renvois une erreur
// Si tout se passe bien, ca stock le user._id dans req.userId et passe a la fonction suivante
// Ici la fonction getLoggedUser
router.get('/me', verifyToken, UserController.getLoggedUser);

module.exports = router;