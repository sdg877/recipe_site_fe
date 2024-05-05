import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function HomePage() {
    const [recipes, setRecipes] = useState([]);
    const [filter, setFilter] = useState(''); 
    const [searchQuery, setSearchQuery] = useState(''); 

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                let params = {
                    number: 150, 
                    apiKey: process.env.REACT_APP_KEY
                };

                if (filter) {
                    params['query'] = filter; 
                }
                
                if (searchQuery) {
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
    }, [filter, searchQuery]); 

    const handleFilterChange = (event) => {
        setFilter(event.target.value); 
    };

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value); 
    };

    return (
        <div>
            <h1>Recipes</h1>
            <div>
                <select value={filter} onChange={handleFilterChange}>
                    <option value="">All</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="snack">Snack</option>
                </select>
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
                        <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                            <h2>{recipe.title}</h2>
                        </Link>
                        <img src={recipe.image} alt={recipe.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}