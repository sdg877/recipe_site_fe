import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function RecipeView() {
    const [recipe, setRecipe] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get(
                    `https://api.spoonacular.com/recipes/${id}/information`,
                    {
                        params: {
                            apiKey: "41be0aedc5d04c7a87d5a17a3ad437b4"
                        }
                    }
                );
                console.log(response.data);
                setRecipe(response.data); 
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };
      
        fetchRecipe();
    }, [id]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title} />
            <p>Instructions: {recipe.instructions}</p>
            <p>Ready in: {recipe.readyInMinutes} minutes</p>
            <p>Servings: {recipe.servings}</p>
            {/* Add more details as needed */}
        </div>
    );
}

