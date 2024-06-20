import React, { useState, useEffect } from 'react';
import { getUser, logOut } from "../utilities/users-service";
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

export default function ProfilePage() {
  const [user] = useState(getUser());
  const [savedRecipes, setSavedRecipes] = useState([]);
  const navigate = useNavigate();

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

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logOut();
    navigate('/');
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
    localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
  };

  if (!user) {
    return null;
  }

  return (
    <Layout>
      <main>
        <h2>{user.name}'s Saved Recipes</h2>
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
              <button onClick={() => handleDeleteRecipe(recipe.id)}>Delete Recipe</button>
            </div>
          ))}
        </div>
        <div className="logout-container">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </main>
    </Layout>
  );
}
