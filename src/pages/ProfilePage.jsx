// import React, { useState, useEffect } from 'react';
// import { getUser, logOut } from "../utilities/users-service.js";
// import { Link, Navigate } from 'react-router-dom';

// export default function ProfilePage() {
//     const [user] = useState(getUser()); 
//     const [savedRecipes, setSavedRecipes] = useState([]);

//     useEffect(() => {
//         const fetchSavedRecipes = () => {
//             try {
//                 if (user) {
//                     const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
//                     setSavedRecipes(savedRecipes);
//                     console.log('Saved recipes fetched from local storage!');
//                 }
//             } catch (error) {
//                 console.error('Error fetching saved recipes:', error);
//             }
//         };

//         fetchSavedRecipes();
//     }, [user]);

//     const handleLogout = () => {
//         logOut();
//         window.location.href = "/";
//     };

//     const handleDeleteRecipe = (recipeId) => {
//         const updatedRecipes = savedRecipes.filter(recipe => recipe.id !== recipeId);
//         setSavedRecipes(updatedRecipes);
//         localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
//     };

//     if (!user) {
//         return <Navigate to="/" />;
//     }

//     return (
//         <main>

//             <h1>Welcome, {user ? user.name : 'Guest'}!</h1>
//             <div>
//                     <button onClick={handleLogout}>Logout</button>
//             </div>
//             <>
//                 <h2>Saved Recipes</h2>
//                 <ul>
//                     {savedRecipes.map(recipe => (
//                         <li key={recipe.id}>
//                             <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link> {' '}
//                             <button onClick={() => handleDeleteRecipe(recipe.id)}>X</button>
//                         </li>
//                     ))}
//                 </ul>
//             </>
//         </main>
//     );
// }

// import React, { useState, useEffect } from 'react';
// import { getUser, logOut } from "../utilities/users-service.js";
// import { Link, Navigate } from 'react-router-dom';

// export default function ProfilePage() {
//     const [user] = useState(getUser()); 
//     const [savedRecipes, setSavedRecipes] = useState([]);

//     useEffect(() => {
//         const fetchSavedRecipes = () => {
//             try {
//                 if (user) {
//                     const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
//                     setSavedRecipes(savedRecipes);
//                     console.log('Saved recipes fetched from local storage!');
//                 }
//             } catch (error) {
//                 console.error('Error fetching saved recipes:', error);
//             }
//         };

//         fetchSavedRecipes();
//     }, [user]);

//     const handleLogout = () => {
//         logOut();
//         window.location.href = "/";
//     };

//     const handleDeleteRecipe = (recipeId) => {
//         const updatedRecipes = savedRecipes.filter(recipe => recipe.id !== recipeId);
//         setSavedRecipes(updatedRecipes);
//         localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
//     };

//     if (!user) {
//         return <Navigate to="/" />;
//     }

//     return (
//         <main>
//             <h1>Welcome, {user ? user.name : 'Guest'}!</h1>
//             <div>
//                 <button onClick={handleLogout}>Logout</button>
//             </div>
//             <h2>Saved Recipes</h2>
//             <div>
//                 {savedRecipes.map(recipe => (
//                     <div className='recipe-card-profile' key={recipe.id}>
//                         <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'black' }}>
//                             <h2>{recipe.title}</h2>
//                         </Link>
//                         <img src={recipe.image} alt={recipe.title} />
//                         <button onClick={() => handleDeleteRecipe(recipe.id)}>Remove</button>
//                     </div>
//                 ))}
//             </div>
//         </main>
//     );
// }

// import React, { useState, useEffect } from 'react';
// import { getUser, logOut } from "../utilities/users-service.js";
// import { Link, Navigate } from 'react-router-dom';

// export default function ProfilePage() {
//     const [user] = useState(getUser()); 
//     const [savedRecipes, setSavedRecipes] = useState([]);

//     useEffect(() => {
//         const fetchSavedRecipes = () => {
//             try {
//                 if (user) {
//                     const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
//                     setSavedRecipes(savedRecipes);
//                     console.log('Saved recipes fetched from local storage!');
//                 }
//             } catch (error) {
//                 console.error('Error fetching saved recipes:', error);
//             }
//         };

//         fetchSavedRecipes();
//     }, [user, savedRecipes]); // Adding savedRecipes as a dependency

//     const handleLogout = () => {
//         logOut();
//         window.location.href = "/";
//     };

//     const handleDeleteRecipe = (recipeId) => {
//         const updatedRecipes = savedRecipes.filter(recipe => recipe.id !== recipeId);
//         setSavedRecipes(updatedRecipes);
//         localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
//     };

//     const handleDropdownChange = (event, recipeId) => {
//         const updatedRecipes = savedRecipes.map(recipe => {
//             if (recipe.id === recipeId) {
//                 return {
//                     ...recipe,
//                     status: event.target.value
//                 };
//             }
//             return recipe;
//         });
//         setSavedRecipes(updatedRecipes);
//         // Update localStorage or send to server if needed
//     };

//     if (!user) {
//         return <Navigate to="/" />;
//     }

//     return (
//         <main>
//             <h1>Welcome, {user ? user.name : 'Guest'}!</h1>
//             <div>
//                 <button onClick={handleLogout}>Logout</button>
//             </div>
//             <h2>Saved Recipes</h2>
//             <div>
//                 {savedRecipes.map(recipe => (
//                     <div className='recipe-card-profile' key={recipe.id}>
//                         <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'black' }}>
//                             <h2>{recipe.title}</h2>
//                         </Link>
//                         <select value={recipe.status || 'Want To Try'} onChange={(event) => handleDropdownChange(event, recipe.id)}>
//                             <option value="Want To Try">Want To Try</option>
//                             <option value="Tried - Will Make Again">Tried - Will Make Again</option>
//                             <option value="Tried - Didn't Like">Tried - Didn't Like</option>
//                         </select>
//                         <button onClick={() => handleDeleteRecipe(recipe.id)}>Remove</button>
//                     </div>
//                 ))}
//             </div>
//         </main>
//     );
// }

// import React, { useState, useEffect } from 'react';
// import { getUser, logOut } from "../utilities/users-service.js";
// import { Link, Navigate } from 'react-router-dom';

// export default function ProfilePage() {
//     const [user] = useState(getUser()); 
//     const [savedRecipes, setSavedRecipes] = useState([]);

//     useEffect(() => {
//         const fetchSavedRecipes = () => {
//             try {
//                 if (user) {
//                     const existingRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
//                     setSavedRecipes(existingRecipes);
//                 }
//             } catch (error) {
//                 console.error('Error fetching saved recipes:', error);
//             }
//         };

//         fetchSavedRecipes();
//     }, [user]);

//     const handleLogout = () => {
//         logOut();
//         window.location.href = "/";
//     };

//     const handleDeleteRecipe = (recipeId) => {
//         const updatedRecipes = savedRecipes.filter(recipe => recipe.id !== recipeId);
//         setSavedRecipes(updatedRecipes);
//         localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
//     };

//     const handleDropdownChange = (event, recipeId) => {
//         const updatedRecipes = savedRecipes.map(recipe => {
//             if (recipe.id === recipeId) {
//                 return {
//                     ...recipe,
//                     status: event.target.value
//                 };
//             }
//             return recipe;
//         });
//         setSavedRecipes(updatedRecipes);
//         // Update localStorage or send to server if needed
//     };

//     if (!user) {
//         return <Navigate to="/" />;
//     }

//     return (
//         <main>
//             <h1>Welcome, {user ? user.name : 'Guest'}!</h1>
//             <div>
//                 <button onClick={handleLogout}>Logout</button>
//             </div>
//             <h2>Saved Recipes</h2>
//             <div>
//                 {savedRecipes.map(recipe => (
//                     <div className='recipe-card-profile' key={recipe.id}>
//                         <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'black' }}>
//                             <h2>{recipe.title}</h2>
//                         </Link>
//                         <select value={recipe.status || 'Want To Try'} onChange={(event) => handleDropdownChange(event, recipe.id)}>
//                             <option value="Want To Try">Want To Try</option>
//                             <option value="Tried - Will Make Again">Tried - Will Make Again</option>
//                             <option value="Tried - Didn't Like">Tried - Didn't Like</option>
//                         </select>
//                         <button onClick={() => handleDeleteRecipe(recipe.id)}>Remove</button>
//                     </div>
//                 ))}
//             </div>
//         </main>
//     );
// }


import React, { useState, useEffect } from 'react';
import { getUser, logOut } from "../utilities/users-service.js";
import { Link, Navigate } from 'react-router-dom';
import '../App.css'; // Importing the CSS file

export default function ProfilePage() {
    const [user] = useState(getUser()); 
    const [savedRecipes, setSavedRecipes] = useState([]);

    useEffect(() => {
        const fetchSavedRecipes = () => {
            try {
                if (user) {
                    const existingRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
                    setSavedRecipes(existingRecipes);
                }
            } catch (error) {
                console.error('Error fetching saved recipes:', error);
            }
        };

        fetchSavedRecipes();
    }, [user]);

    const handleLogout = () => {
        logOut();
        window.location.href = "/";
    };

    const handleDeleteRecipe = (recipeId) => {
        const updatedRecipes = savedRecipes.filter(recipe => recipe.id !== recipeId);
        setSavedRecipes(updatedRecipes);
        localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
    };

    const handleDropdownChange = (event, recipeId) => {
        const updatedRecipes = savedRecipes.map(recipe => {
            if (recipe.id === recipeId) {
                return {
                    ...recipe,
                    status: event.target.value
                };
            }
            return recipe;
        });
        setSavedRecipes(updatedRecipes);
        // Update localStorage or send to server if needed
    };

    if (!user) {
        return <Navigate to="/" />;
    }

    return (
        <main>
            <h1>Welcome, {user ? user.name : 'Guest'}!</h1>
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <h2>Saved Recipes</h2>
            <div className="recipe-container">
                {savedRecipes.map(recipe => (
                    <div className='recipe-card-profile' key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                            <h2>{recipe.title}</h2>
                        </Link>
                        <select value={recipe.status || 'Want To Try'} onChange={(event) => handleDropdownChange(event, recipe.id)}>
                            <option value="Want To Try">Want To Try</option>
                            <option value="Tried - Will Make Again">Tried - Will Make Again</option>
                            <option value="Tried - Didn't Like">Tried - Didn't Like</option>
                        </select>
                        <button onClick={() => handleDeleteRecipe(recipe.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </main>
    );
}


