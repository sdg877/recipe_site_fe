// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// export default function HomePage() {
//     const [recipes, setRecipes] = useState([]);

//     useEffect(() => {
//         const fetchRecipes = async () => {
//             try {
//                 const response = await axios.get(
//                     "https://api.spoonacular.com/recipes/complexSearch",
//                     {
//                         params: {
//                             // query: "breakfast",
//                             // maxFat: 25,
//                             number: 50, // Adjust as needed
//                             apiKey: process.env.REACT_APP_KEY
//                         }
//                     }
//                 );
//                 console.log(response.data.results);
//                 setRecipes(response.data.results); 
//             } catch (error) {
//                 console.error('Error fetching recipes:', error);
//             }
//         };
      
//         fetchRecipes();
//     }, []);

//     return (
//         <div>
//             <h1>Recipes</h1>
//             <div>
//                 {recipes.map(recipe => (
//                     <div className='recipe-card' key={recipe.id}>
//                         <Link to={`/recipes/${recipe.id}`}>
//                             <h2>{recipe.title}</h2>
//                         </Link>
//                         <img src={recipe.image} alt={recipe.title} />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function HomePage() {
    const [recipes, setRecipes] = useState([]);
    const [filter, setFilter] = useState(''); // State to hold the selected filter
    const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                let params = {
                    number: 50, // Adjust as needed
                    apiKey: process.env.REACT_APP_KEY
                };

                if (filter) {
                    params['query'] = filter; // Add filter to API request if it's set
                }
                
                if (searchQuery) {
                    // If both filter and searchQuery are set, include both in the API request
                    if (params['query']) {
                        params['query'] += `,${searchQuery}`;
                    } else {
                        params['query'] = searchQuery;
                    }
                }

                const response = await axios.get("https://api.spoonacular.com/recipes/complexSearch", { params });
                setRecipes(response.data.results); 
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };
      
        fetchRecipes();
    }, [filter, searchQuery]); // Run useEffect whenever filter or searchQuery changes

    const handleFilterChange = (event) => {
        setFilter(event.target.value); // Update the filter state when dropdown value changes
    };

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value); // Update the searchQuery state when input value changes
    };

    return (
        <div>
            <h1>Recipes</h1>
            <div>
                {/* Dropdown menu for filtering */}
                <select value={filter} onChange={handleFilterChange}>
                    <option value="">All</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="snack">Snack</option>
                </select>
                {/* Search input */}
                <input 
                    type="text" 
                    placeholder="Search recipes..." 
                    value={searchQuery} 
                    onChange={handleSearchInputChange} 
                />
            </div>
            <div>
                {recipes.map(recipe => (
                    <div className='recipe-card' key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}>
                            <h2>{recipe.title}</h2>
                        </Link>
                        <img src={recipe.image} alt={recipe.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}

