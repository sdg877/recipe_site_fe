// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// export default function RecipeView() {
//     const [recipe, setRecipe] = useState(null);
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

//     if (!recipe) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className='recipe-card-view'>
//             <h1>{recipe.title}</h1>
//             <img src={recipe.image} alt={recipe.title} />
//             <h2>Instructions:</h2>
//             <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
//             <p>Ready in: {recipe.readyInMinutes} minutes</p>
//             <p>Servings: {recipe.servings}</p>
//         </div>
//     );
// }

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

    if (!recipe) {
        return <div>Loading...</div>;
    }

    // Function to strip HTML tags
    const stripHtmlTags = (html) => {
        return html.replace(/<[^>]*>?/gm, '');
    };

    const capitalizeEachWord = (text) => {
        return text.replace(/\b\w/g, char => char.toUpperCase());
    };

    // Function to format diets info with commas and capitalize first letters
    const formatDiets = (diets) => {
        return diets.map(capitalizeEachWord).join(', ');
    };


    return (
        <div className='recipe-card-view'>
            <h1>{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title} />
            <h2>Instructions:</h2>
            <p>{stripHtmlTags(recipe.instructions)}</p>
            <p>Ready in: {recipe.readyInMinutes} minutes</p>
            <p>Servings: {recipe.servings}</p>
            <p>Dietary Requirements: {formatDiets(recipe.diets)}.</p>
        </div>
    );
}

