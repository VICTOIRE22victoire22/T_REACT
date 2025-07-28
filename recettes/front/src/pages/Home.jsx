import { useEffect, useState } from "react";
import { Link } from "react-router";
import "../assets/Home.css";

const Home = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        const response = await fetch("http://localhost:3000/recipes");
        const data = await response.json();
        setRecipes(data);
    }

    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:3000/recipes/${id}`, {
            method: "DELETE"
        })

        if (response.ok) {
            await fetchRecipes();
            alert("La suppression à bien été effectuée");
        }
    }

    return (
        <div className="home">
            {recipes.map(recipe => (
                <div key={recipe._id} className="recipe">
                    <h2>{recipe.title}</h2>
                    <img src={recipe.image} alt={recipe.title} />
                    <h3>{recipe.category.name}</h3>
                    <Link to={`/recette/${recipe._id}`}>Modifier</Link>
                    <br />
                    <button onClick={() => handleDelete(recipe._id)}>Supprimer</button>
                </div>
            ))}
        </div>
    );
};

export default Home;