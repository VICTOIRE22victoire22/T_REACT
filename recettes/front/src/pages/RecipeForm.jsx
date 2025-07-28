import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const RecipeForm = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories()
    }, []);

    const fetchCategories = async () => {
        const response = await fetch("http://localhost:3000/categories");
        const data = await response.json();
        setCategories(data);
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

        const response = await fetch("http://localhost:3000/recipes", {
            method: "POST",
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

    return (
        <div>
            <h1>Creation de recette</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Titre <input type="text" name="title" />
                </label>

                <label>
                    Image <input type="text" name="image" />
                </label>

                <label>
                    Temps de préparation <input type="number" name="preparationTime" />
                </label>

                <select name="category">
                    {categories.map(category => (
                        <option key={category._id} value={category._id}>{category.name}</option>
                    ))}
                </select>
                <button>Creer la recette</button>
            </form>
        </div>
    );
};

export default RecipeForm;