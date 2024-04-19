// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default async function HomePage() {
//     const [recipes, setRecipes] = useState([]);

//     useEffect(() => {
//         fetchRecipes();
//     }, []);

//     const axios = require('axios');

//     const options = {
//       method: 'GET',
//       url: 'https://tasty.p.rapidapi.com/recipes/list',
//       params: {
//         from: '0',
//         size: '20',
//         tags: 'under_30_minutes'
//       },
//       headers: {
//         'X-RapidAPI-Key': 'cfb9fc44c9mshf95a1e02a2f8a0ap1d6d26jsnf60922167d5c',
//         'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
//       }
//     };
    
//     try {
//         const response = await axios.request(options);
//         console.log(response.data);
//     } catch (error) {
//         console.error(error);
//     }

//     const fetchRecipes = async () => {
//         try {
//             const response = await fetch(
//                 `https://api.edamam.com/api/recipes/v2/?app_id=280512b9&app_key=e6d14e4193a3298a550d0b68ce5ba220`,
//                 {
//                     headers: {
//                         'Content-Type': 'application/json',
//                         // Add any additional headers if needed
//                     },
//                 }
//             );
//             if (!response.ok) {
//                 throw new Error('Failed to fetch recipes');
//             }
//             const data = await response.json();
//             console.log("API response:", data); // Log the API response
    
//             // Access the array of recipes from the object
//             const recipeArray = data.hits.map(hit => hit.recipe);
    
//             setRecipes(recipeArray); // Assuming the response contains an array of recipes
//         } catch (error) {
//             console.error('Error fetching recipes:', error);
//         }
//     };
    
    
    
    
    
    
    
    
    

//     return (
//         <div>
//             <h1>Recipes</h1>
//             <ul>
//                 {recipes.map(recipe => (
//                     <li key={recipe.id}>
//                         <h2>{recipe.title}</h2>
//                         <p>{recipe.description}</p>
//                         {/* Render other details of the recipe as needed */}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios properly

export default function HomePage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await axios.get(
                "https://tasty.p.rapidapi.com/recipes/list",
                {
                    params: {
                        from: '0',
                        size: '20',
                        tags: 'under_30_minutes'
                    },
                    headers: {
                        'X-RapidAPI-Key': 'cfb9fc44c9mshf95a1e02a2f8a0ap1d6d26jsnf60922167d5c',
                        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                    }
                }
            );
            console.log(response.data); // Log the API response
            setRecipes(response.data.results); // Assuming the response contains an array of recipes
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    return (
        <div>
            <h1>Recipes</h1>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <h2>{recipe.name}</h2>
                        {/* Render other details of the recipe as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

