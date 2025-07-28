const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/user.route');
const recipeRoutes = require('./routes/recipe.route');
const categoryRoutes = require('./routes/category.route');

const app = express();

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/exercice-auth");
        console.log("Connexion à la base de données effectuée");
    } catch (error) {
        console.log(error);
    }
}

connectDb();

// Permet de recuperer le contenu du body en json envoyé le front
app.use(express.json());
// Permet de recuperer les parametres dans l'url (par exemple http://localhost:3000?info=test)
app.use(express.urlencoded({ extended: true }));
// Permet de récuperer le contenu du cookie envoyé par le front
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173',
    // Permet d'accepter les cookies httpOnly
    credentials: true
}))


app.use('/users', userRouter);
app.use('/recipes', recipeRoutes);
app.use('/categories', categoryRoutes);

app.listen(3000, () => {
    console.log("le serveur est bien lancé sur l'URL http://localhost:3000");
});