
import React, { useState, useEffect } from 'react';
import { getUser } from "../utilities/users-service.js";
import { Link } from 'react-router-dom';

export default function ProfilePage() {
    const [user] = useState(getUser()); 
    const [savedRecipes, setSavedRecipes] = useState([]);

    useEffect(() => {
        const fetchSavedRecipes = () => {
            try {
                if (user) {
                    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
                    setSavedRecipes(savedRecipes);
                    console.log('Saved recipes fetched from local storage!');
                }
            } catch (error) {
                console.error('Error fetching saved recipes:', error);
            }
        };

        fetchSavedRecipes();
    }, [user]);

    return (
        <main>
            <h1>Welcome, {user ? user.name : 'Guest'}!</h1>
            {user ? (
                <>
                    <h2>Saved Recipes</h2>
                    <ul>
                        {savedRecipes.map(recipe => (
                            <li key={recipe.id}>
                                <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <div>
                    <p>Please log in to view saved recipes.</p>
                </div>
            )}
        </main>
    );
}

