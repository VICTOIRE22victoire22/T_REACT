import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from 'react';

const Recipe = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCategories()
        fetchRecipe();
    }, []);

    const fetchCategories = async () => {
        const response = await fetch("http://localhost:3000/categories");
        const data = await response.json();
        setCategories(data);
    }

    const fetchRecipe = async () => {
        try {
            const response = await fetch(`http://localhost:3000/recipes/${id}`);
            const data = await response.json();
            console.log(data);
            setRecipe(data);
        } catch {
            console.log("error");
        } finally {
            setLoading(false);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const recipe = {
            title: formData.get('title'),
            image: formData.get("image"),
            preparationTime: formData.get("preparationTime"),
            category: formData.get('category')
        }

        const response = await fetch(`http://localhost:3000/recipes/${id}`, {
            method: "PUT",
            headers: {
                // application/json est un mime type
                // https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types/Common_types
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)
        })

        if (response.ok) {
            navigate('/');
        }
    }

    if (loading) {
        return <p>Chargement...</p>
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Titre <input type="text" name="title" defaultValue={recipe.title} />
                </label>

                <label>
                    Image <input type="text" name="image" defaultValue={recipe.image} />
                </label>

                <label>
                    Temps de préparation <input type="number" name="preparationTime" defaultValue={recipe.preparationTime} />
                </label>

                {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining */}
                <select name="category" defaultValue={recipe.category?._id}>
                    {categories.map(category => (
                        <option key={category._id} value={category._id} >{category.name}</option>
                    ))}
                </select>
                <button>Modifier la recette</button>
            </form>
        </div>
    );
};

export default Recipe;