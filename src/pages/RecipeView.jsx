// // import React, { useState, useEffect } from 'react';
// // import { useParams } from 'react-router-dom';
// // import axios from 'axios';

// // export default function RecipeView() {
// //     const [recipe, setRecipe] = useState(null);
// //     const { id } = useParams(); // Get the recipeId from URL params

// //     useEffect(() => {
// //         fetchRecipe();
// //     }, [recipeId]);

// //     const fetchRecipe = async () => {
// //         try {
// //             const response = await axios.get(
// //                 `https://tasty.p.rapidapi.com/recipes/detail?id=${recipeId}`,
// //                 {
// //                     headers: {
// //                         'X-RapidAPI-Key': 'cfb9fc44c9mshf95a1e02a2f8a0ap1d6d26jsnf60922167d5c',
// //                         'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
// //                     }
// //                 }
// //             );
// //             console.log(response.data); // Log the recipe data
// //             setRecipe(response.data);
// //         } catch (error) {
// //             console.error('Error fetching recipe:', error);
// //         }
// //     };

// //     if (!recipe) {
// //         return <div>Loading...</div>;
// //     }

// //     return (
// //         <div>
// //             <h1>{recipe.name}</h1>
// //             <p>Description: {recipe.description}</p>
// //             <p>Servings: {recipe.yields}</p>
// //             <p>Prep Time: {recipe.prep_time_minutes} minutes</p>
// //             <p>Cook Time: {recipe.cook_time_minutes} minutes</p>
// //             {/* Render other details of the recipe as needed */}
// //         </div>
// //     );
// // }

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// export default function RecipeView() {
//     const [recipe, setRecipe] = useState(null);
//     const { id } = useParams(); // Change 'recipeId' to 'id'

//     useEffect(() => {
//         fetchRecipe();
//     }, [id]);

//     const fetchRecipe = async () => {
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
//             console.log(response.data); // Log the recipe data
//             setRecipe(response.data);
//         } catch (error) {
//             console.error('Error fetching recipe:', error);
//         }
//     };

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
//             {/* Render other details of the recipe as needed */}
//         </div>
//     );
// }

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// export default function RecipeView() {
//     const [recipe, setRecipe] = useState(null);
//     const { id } = useParams(); // 

//     useEffect(() => {
//         fetchRecipe();
//     }, [id]);

//     const fetchRecipe = async () => {
//         try {
//             const response = await axios.get(
//                 `https://tasty.p.rapidapi.com/recipes/detail?id=${recipeId}`,
//                 {
//                     headers: {
//                         'X-RapidAPI-Key': 'cfb9fc44c9mshf95a1e02a2f8a0ap1d6d26jsnf60922167d5c',
//                         'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
//                     }
//                 }
//             );
//             setRecipe(response.data);
//         } catch (error) {
//             console.error('Error fetching recipe:', error);
//         }
//     };

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
//             {/* Render other details of the recipe as needed */}
//         </div>
//     );
// }

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function RecipeView() {
    const [recipe, setRecipe] = useState(null);
    const { id } = useParams(); // 

    useEffect(() => {
        fetchRecipe();
    }, [id]);

    const fetchRecipe = async () => {
        try {
            const response = await axios.get(
                `https://tasty.p.rapidapi.com/recipes/detail?id=${id}`,
                {
                    headers: {
                        'X-RapidAPI-Key': 'cfb9fc44c9mshf95a1e02a2f8a0ap1d6d26jsnf60922167d5c',
                        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                    }
                }
            );
            setRecipe(response.data);
        } catch (error) {
            console.error('Error fetching recipe:', error);
        }
    };

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
            {/* Render other details of the recipe as needed */}
        </div>
    );
}
