
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function HomePage() {
//     const [recipes, setRecipes] = useState([]);

//     useEffect(() => {
//         fetchRecipes();
//     }, []);

//     const fetchRecipes = async () => {
//         try {
//             const response = await axios.get(
//                 "https://tasty.p.rapidapi.com/recipes/list",
//                 {
//                     headers: {
//                         'X-RapidAPI-Key': 'cfb9fc44c9mshf95a1e02a2f8a0ap1d6d26jsnf60922167d5c',
//                         'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
//                     }
//                 }
//             );
//             console.log(response.data.results);
//             setRecipes(response.data.results); 
//         } catch (error) {
//             console.error('Error fetching recipes:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>Recipes</h1>
//             <div>
//                 {recipes.map(recipe => (
//                     <div key={recipe.id}>
//                         <h2>
//                             <a href={`recipe/${recipe.id}/`}>
//                                 {recipe.name}
//                             </a>
//                         </h2>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link component

export default function HomePage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get(
                    "https://tasty.p.rapidapi.com/recipes/list",
                    {
                        headers: {
                            'X-RapidAPI-Key': 'cfb9fc44c9mshf95a1e02a2f8a0ap1d6d26jsnf60922167d5c',
                            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                        }
                    }
                );
                console.log(response.data.results);
                setRecipes(response.data.results); 
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };
      
        fetchRecipes();
    }, []);

    return (
        <div>
            <h1>Recipes</h1>
            <div>
                {recipes.map(recipe => (
                    <div key={recipe.id}>
                        <h2>
                            <Link to={`/recipe/${recipe.id}`}>
                                {recipe.name}
                            </Link>
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
}
