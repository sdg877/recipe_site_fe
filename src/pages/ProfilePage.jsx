import React, { useState, useEffect } from 'react';
import { getUser, logOut } from "../utilities/users-service.js";
import { Link } from 'react-router-dom';
import '../App.css'; 

export default function ProfilePage() {
    const [user] = useState(getUser()); 
    const [savedRecipes, setSavedRecipes] = useState([]);

    useEffect(() => {
        const fetchSavedRecipes = () => {
            try {
                if (user) {
                    const existingRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
                    setSavedRecipes(existingRecipes);
                }
            } catch (error) {
                console.error('Error fetching saved recipes:', error);
            }
        };

        fetchSavedRecipes();
    }, [user]);

    const handleLogout = () => {
        logOut();
        window.location.href = "/";
    };

    const handleDeleteRecipe = (recipeId) => {
        const updatedRecipes = savedRecipes.filter(recipe => recipe.id !== recipeId);
        setSavedRecipes(updatedRecipes);
        localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
    };

    const handleDropdownChange = (event, recipeId) => {
        const updatedRecipes = savedRecipes.map(recipe => {
            if (recipe.id === recipeId) {
                return {
                    ...recipe,
                    status: event.target.value
                };
            }
            return recipe;
        });
        setSavedRecipes(updatedRecipes);
        // Save updated recipes to local storage
        localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
    };

    return (
        <main>
            <h2>Welcome, {user ? user.name : 'Guest'}!</h2>
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <h2>Saved Recipes</h2>
            <div className="recipe-container">
                {savedRecipes.map(recipe => (
                    <div className='recipe-card-profile' key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                            <h2>{recipe.title}</h2>
                        </Link>
                        <select value={recipe.status || 'Want To Try'} onChange={(event) => handleDropdownChange(event, recipe.id)}>
                            <option value="Want To Try">Want To Try</option>
                            <option value="Tried - Will Make Again">Tried - Will Make Again</option>
                            <option value="Tried - Didn't Like">Tried - Didn't Like</option>
                        </select>
                        <button onClick={() => handleDeleteRecipe(recipe.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </main>
    );
}


