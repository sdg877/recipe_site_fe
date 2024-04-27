// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';

// export default function RecipeView() {
//     const [recipe, setRecipe] = useState(null);
//     const [saved, setSaved] = useState(false);

//     const isAuthenticated = () => {
//         const token = localStorage.getItem('token');
//         return !!token;
//       };

//     const { id } = useParams();

//     useEffect(() => {
//         const fetchRecipe = async () => {
//             try {
//                 const response = await axios.get(
//                     `https://api.spoonacular.com/recipes/${id}/information`,
//                     {
//                         params: {
//                             apiKey: process.env.REACT_APP_KEY
//                         }
//                     }
//                 );
//                 console.log(response.data);
//                 setRecipe(response.data); 
//             } catch (error) {
//                 console.error('Error fetching recipe:', error);
//             }
//         };
      
//         fetchRecipe();
//     }, [id]);

//     useEffect(() => {
//         const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
//         const isSaved = savedRecipes.some((savedRecipe) => savedRecipe.id === recipe.id);
//         setSaved(isSaved);
//       }, [recipe]);
    
//       if (!recipe) {
//         return <div>Loading...</div>;
//       }

//     if (!recipe) {
//         return <div>Loading...</div>;
//     }

//     const stripHtmlTags = (html) => {
//         return html.replace(/<[^>]*>?/gm, '');
//     };

//     const capitalizeEachWord = (text) => {
//         return text.replace(/\b\w/g, char => char.toUpperCase());
//     };


//     const formatDiets = (diets) => {
//         return diets.map(capitalizeEachWord).join(', ');
//     };

//     const handleSaveRecipe = () => {
//         const savedRecipes = JSON.parse(localStorage.getItem("savedRecipe")) || [];
//         const updatedSavedRecipes = [...savedRecipes, recipe];
//         localStorage.setItem("savedRecipes", JSON.stringify(updatedSavedRecipes));
//         setSaved(true);
//       };


//     return (
//         <div className='recipe-card-view'>
//             <h1>{recipe.title}</h1>
//             <img src={recipe.image} alt={recipe.title} />
//             <h2>Instructions:</h2>
//             <p>{stripHtmlTags(recipe.instructions)}</p>
//             <p>Ready in: {recipe.readyInMinutes} minutes</p>
//             <p>Servings: {recipe.servings}</p>
//             <p>Dietary Requirements: {formatDiets(recipe.diets)}.</p>
//             <div className="button-container">
//           { isAuthenticated() ? ( 
//             <button
//               onClick={handleSaveRecipe}
//               disabled={saved}
//               className="btn btn-primary"
//             >
//               {saved ? "Recipe Saved" : "Save Recipe"}
//             </button>
//           ) : (
//             <Link to="/profile" className="btn btn-primary">
//               Save Job
//             </Link>
//           )}
//             </div>
//         </div>
//     );
// }

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

  if (!recipe) {
    return <div>Loading...</div>;
  }

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
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipe")) || [];
    const updatedSavedRecipes = [...savedRecipes, recipe];
    localStorage.setItem("savedRecipes", JSON.stringify(updatedSavedRecipes));
    setSaved(true);
  };

  return (
    <div className='recipe-card-view'>
      <h1>{recipe?.title}</h1>  {/* Use optional chaining */}
      <img src={recipe?.image} alt={recipe.title} />  {/* Use optional chaining */}
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
            Save Job
          </Link>
        )}
      </div>
    </div>
  );
}