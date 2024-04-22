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
                            // query: "breakfast",
                            // maxFat: 25,
                            number: 50, // Adjust as needed
                            apiKey: process.env.REACT_APP_KEY
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
                    <div className='recipe-card' key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}>
                            <h2>{recipe.title}</h2>
                        </Link>
                        <img src={recipe.image} alt={recipe.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}
