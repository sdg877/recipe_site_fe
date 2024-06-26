import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

export default function HomePage() {
    const location = useLocation();
    const navigate = useNavigate();

    // Parse query parameters from URL
    const queryParams = new URLSearchParams(location.search);
    const initialFilter = queryParams.get('filter') || '';
    const initialSearchQuery = queryParams.get('searchQuery') || '';

    const [successfulRecipes, setSuccessfulRecipes] = useState([]);
    const [filter, setFilter] = useState(initialFilter);
    const [searchQuery, setSearchQuery] = useState(initialSearchQuery);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                let params = {
                    number: 75,
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
                setSuccessfulRecipes(response.data.results);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, [filter, searchQuery]);

    const handleFilterChange = (event) => {
        const newFilter = event.target.value;
        setFilter(newFilter);
        updateURLParams(newFilter, searchQuery);
    };

    const handleSearchInputChange = (event) => {
        const newSearchQuery = event.target.value;
        setSearchQuery(newSearchQuery);
        updateURLParams(filter, newSearchQuery);
    };

    const updateURLParams = (newFilter, newSearchQuery) => {
        const params = new URLSearchParams();
        if (newFilter) params.set('filter', newFilter);
        if (newSearchQuery) params.set('searchQuery', newSearchQuery);
        navigate({ search: params.toString() });
    };

    const handleImageError = (recipeId) => {
        setSuccessfulRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== recipeId));
    };

    return (
        <Layout>
            <div>
                <div className="filter-search-container">
                    <select value={filter} onChange={handleFilterChange}>
                        <option value="">All Recipes</option>
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
                <div className="recipe-container">
                    {successfulRecipes.map(recipe => (
                        <div className='recipe-card' key={recipe.id}>
                            <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                <h2>{recipe.title}</h2>
                                <img
                                    src={recipe.image}
                                    alt={recipe.title}
                                    onError={() => handleImageError(recipe.id)}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}


