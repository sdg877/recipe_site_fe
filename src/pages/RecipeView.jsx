import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function RecipeView() {
  const [recipe, setRecipe] = useState(null);
  const [saved, setSaved] = useState(false);

  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };

  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information`,
          {
            params: {
              apiKey: process.env.REACT_APP_KEY
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

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    const isSaved = savedRecipes.some((savedRecipe) => savedRecipe.id === recipe?.id); // Use optional chaining
    setSaved(isSaved);
  }, [recipe]);

  const stripHtmlTags = (html) => {
    return html.replace(/<[^>]*>?/gm, '');
  };

  const capitalizeEachWord = (text) => {
    return text.replace(/\b\w/g, char => char.toUpperCase());
  };

  const formatDiets = (diets) => {
    return diets.map(capitalizeEachWord).join(', ');
  };

  const handleSaveRecipe = () => {
    const existingRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    const updatedRecipes = [...existingRecipes, recipe];
    localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
    setSaved(true);
  };

  return (
    <div className='recipe-card-view'>
      {recipe && (
        <>
          <h1>{recipe.title}</h1> 
          <img src={recipe.image} alt={recipe.title} /> 
          <h2>Instructions:</h2>
          <p>{stripHtmlTags(recipe.instructions)}</p>
          <p>Ready in: {recipe.readyInMinutes} minutes</p>
          <p>Servings: {recipe.servings}</p>
          <p>Dietary Requirements: {formatDiets(recipe.diets)}.</p>
          <div className="button-container">
            {isAuthenticated() ? (
              <button
                onClick={handleSaveRecipe}
                disabled={saved}
                className="btn btn-primary"
              >
                {saved ? "Recipe Saved" : "Save Recipe"}
              </button>
            ) : (
              <Link to="/profile" className="btn btn-primary">
                Save Recipe
              </Link>
            )}
          </div>
        </>
      )}
    </div>
  );
}
