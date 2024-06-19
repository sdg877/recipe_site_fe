// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
// import Layout from '../components/Layout';

// export default function RecipeView() {
//   const [recipe, setRecipe] = useState(null);
//   const [ingredients, setIngredients] = useState([]);
//   const [saved, setSaved] = useState(false);

//   const isAuthenticated = () => {
//     const token = localStorage.getItem('token');
//     return !!token;
//   };

//   const { id } = useParams();

//   useEffect(() => {
//     const fetchRecipe = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.spoonacular.com/recipes/${id}/information`,
//           {
//             params: {
//               apiKey: process.env.REACT_APP_KEY
//             }
//           }
//         );
//         setRecipe(response.data);
//         setIngredients(response.data.extendedIngredients);
//       } catch (error) {
//         console.error('Error fetching recipe:', error);
//       }
//     };

//     fetchRecipe();
//   }, [id]);

//   useEffect(() => {
//     const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
//     const isSaved = savedRecipes.some((savedRecipe) => savedRecipe.id === recipe?.id); 
//     setSaved(isSaved);
//   }, [recipe]);

//   const stripHtmlTags = (html) => {
//     return html.replace(/<[^>]*>?/gm, '');
//   };

//   const capitalizeEachWord = (text) => {
//     return text.replace(/\b\w/g, char => char.toUpperCase());
//   };

//   const formatDiets = (diets) => {
//     return diets.map(capitalizeEachWord).join(', ');
//   };

//   const handleSaveRecipe = () => {
//     const existingRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
//     const updatedRecipes = [...existingRecipes, recipe];
//     localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
//     setSaved(true);
//   };

//   return (
// <Layout>
//   <div className='recipe-card-view'>
//     {recipe && (
//       <>
//         <h1>{recipe.title}</h1>
//         <img src={recipe.image} alt={recipe.title} />
//         <h5>Instructions:</h5>
//         <p>{stripHtmlTags(recipe.instructions)}</p>
//         <h5>Ingredients:</h5>
//         <ul>
//           {ingredients.map((ingredient) => (
//             <li key={ingredient.id}>{ingredient.original}</li>
//           ))}
//         </ul>
//         <p>Ready in: {recipe.readyInMinutes} minutes</p>
//         <p>Servings: {recipe.servings}</p>
//         <p>Dietary Requirements: {formatDiets(recipe.diets)}.</p>
//         <div className="button-container">
//           {isAuthenticated() ? (
//             <button onClick={handleSaveRecipe} disabled={saved} className="btn btn-primary">
//               {saved ? "Recipe Saved" : "Save Recipe"}
//             </button>
//           ) : (
//             <Link to="/login" className="btn btn-primary">Save Recipe</Link>
//           )}
//         </div>
//       </>
//     )}
//   </div>
// </Layout>

//   );
// }

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Layout from '../components/Layout';

export default function RecipeView() {
  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [saved, setSaved] = useState(false);
  const { id } = useParams();

  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };

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
        setRecipe(response.data);
        setIngredients(response.data.extendedIngredients);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, [id]);

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    const isSaved = savedRecipes.some((savedRecipe) => savedRecipe.id === recipe?.id); 
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
    <Layout>
      <div className='recipe-card-view'>
        {recipe && (
          <>
            <h1>{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title} />
            <div className="image-quality-info">
              <p>Note: This image is sourced externally. Quality may vary.</p>
            </div>
            <h5>Instructions:</h5>
            <p>{stripHtmlTags(recipe.instructions)}</p>
            <h5>Ingredients:</h5>
            <ul className="ingredients-list">
              {ingredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
            <p>Ready in: {recipe.readyInMinutes} minutes</p>
            <p>Servings: {recipe.servings}</p>
            <p>Dietary Requirements: {formatDiets(recipe.diets)}.</p>
            <div className="button-container">
              {isAuthenticated() ? (
                <button onClick={handleSaveRecipe} disabled={saved} className="btn btn-primary">
                  {saved ? "Recipe Saved" : "Save Recipe"}
                </button>
              ) : (
                <Link to="/login" className="btn btn-primary">Save Recipe</Link>
              )}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}

