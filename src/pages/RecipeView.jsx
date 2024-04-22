// import React, { useState, useEffect, useCallback } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// export default function RecipeView() {
//     const [recipe, setRecipe] = useState(null);
//     const { id } = useParams();

//     // const fetchRecipe = useCallback(async () => {
//     //     try {
//     //         const response = await axios.get(
//     //             `https://tasty.p.rapidapi.com/recipes/detail?id=${id}`,
//     //             {
//     //                 headers: {
//     //                     'X-RapidAPI-Key': 'cfb9fc44c9mshf95a1e02a2f8a0ap1d6d26jsnf60922167d5c',
//     //                     'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
//     //                 }
//     //             }
//     //         );
//     //         setRecipe(response.data);
//     //     } catch (error) {
//     //         console.error('Error fetching recipe:', error);
//     //     }
//     // }, [id]);

//     const fetchRecipe = useCallback(async () => {
//         try {
//             const response = await axios.get(
//                 `https://tasty.p.rapidapi.com/recipes/detail?id=${id}`,
//                 {
//                     headers: {
//                         'X-RapidAPI-Key': 'cfb9fc44c9mshf95a1e02a2f8a0ap1d6d26jsnf60922167d5c',
//                         'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
//                     }
//                 }
//             );
//             console.log('API Response:', response.data); // Log the response data
//             setRecipe(response.data);
//             console.log('Recipe:', response.data);
//         } catch (error) {
//             console.error('Error fetching recipe:', error);
//         }
//     }, [id]);
    

//     useEffect(() => {
//         console.log('ID:', id);
//         fetchRecipe();
//     }, [fetchRecipe, id]);

//     if (!recipe) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <h1>{recipe.name}</h1>
//             <p>Description: {recipe.description}</p>
//             <p>Servings: {recipe.yields}</p>
//             <p>Prep Time: {recipe.prep_time_minutes} minutes</p>
//             <p>Cook Time: {recipe.cook_time_minutes} minutes</p> 
//         </div>
//     );
// }

// import React, { useState, useEffect, useCallback } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// export default function RecipeView() {
//     const [recipe, setRecipe] = useState(null);
//     const { id } = useParams();

//     const fetchRecipe = useCallback(async () => {
//         try {
//             const response = await axios.get(
//                 `https://tasty.p.rapidapi.com/recipes/detail?id=${id}`,
//                 {
//                     headers: {
//                         'X-RapidAPI-Key': 'cfb9fc44c9mshf95a1e02a2f8a0ap1d6d26jsnf60922167d5c',
//                         'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
//                     }
//                 }
//             );
//             console.log('API Response:', response.data);
//             setRecipe(response.data);
//         } catch (error) {
//             console.error('Error fetching recipe:', error);
//         }
//     }, [id]);

//     useEffect(() => {
//         console.log('ID:', id);
//         fetchRecipe();
//     }, [fetchRecipe, id]);

//     if (!recipe) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <h1>{recipe.name}</h1>
//             <p>Description: {recipe.description}</p>
//             <p>Servings: {recipe.yields}</p>
//             <p>Prep Time: {recipe.prep_time_minutes} minutes</p>
//             <p>Cook Time: {recipe.cook_time_minutes} minutes</p> 
//         </div>
//     );
// }

import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function RecipeView() {
    const [recipe, setRecipe] = useState(null);
    const { id } = useParams();

    const fetchRecipe = useCallback(async () => {
        try {
            console.log(`Fetching recipe with ID: ${id}`);
            const response = await axios.get(
                `https://tasty.p.rapidapi.com/recipes/detail?id=${id}`,
                {
                    headers: {
                        'X-RapidAPI-Key': 'cfb9fc44c9mshf95a1e02a2f8a0ap1d6d26jsnf60922167d5c',
                        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                    }
                }
            );
            console.log('API Response:', response);
            setRecipe(response.data);
        } catch (error) {
            console.error('Error fetching recipe:', error);
        }
    }, [id]);

    useEffect(() => {
        console.log('ID:', id);
        fetchRecipe();
    }, [fetchRecipe, id]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{recipe.name}</h1>
            <p>Description: {recipe.description}</p>
            <p>Servings: {recipe.yields}</p>
            <p>Prep Time: {recipe.prep_time_minutes} minutes</p>
            <p>Cook Time: {recipe.cook_time_minutes} minutes</p> 
        </div>
    );
}
