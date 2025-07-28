const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const recipeRoutes = require('./routes/recipe.route');
const categoryRoutes = require('./routes/category.route');

const app = express();

mongoose.connect("mongodb://localhost:27017/exercice-recipe").then(() => {
    console.log("Connexion à la base de données effectuée");
}).catch(error => console.log(error));

// Permet a express d'accepter le json dans les requetes
// TOUJOURS AVANT LES ROUTES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TOUJOURS AVANT LES ROUTES
app.use(cors({
    origin: "http://localhost:5173"
}))

app.use('/recipes', recipeRoutes);
app.use('/categories', categoryRoutes);

app.listen(3000, () => {
    console.log("le serveur est bien lancé sur l'URL http://localhost:3000");
})