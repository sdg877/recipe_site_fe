import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function HomePage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get(
                    "https://api.spoonacular.com/recipes/complexSearch",
                    {
                        params: {
                            query: "pasta",
                            maxFat: 25,
                            number: 10, // Adjust as needed
                            apiKey: "41be0aedc5d04c7a87d5a17a3ad437b4" // Your API key here
                        }
                    }
                );
                console.log(response.data.results);
                setRecipes(response.data.results); 
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };
      
        fetchRecipes();
    }, []);

    return (
        <div>
            <h1>Recipes</h1>
            <div>
                {recipes.map(recipe => (
                    <div key={recipe.id}>
                        <Link to={`/recipe/${recipe.id}`}>
                            <h2>{recipe.title}</h2>
                        </Link>
                        <img src={recipe.image} alt={recipe.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}
