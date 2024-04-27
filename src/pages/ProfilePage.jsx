// import React, { useState, useEffect } from 'react';
// import { getUser } from "../utilities/users-service.js";
// import axios from 'axios'; // Import axios for making HTTP requests

// export default function ProfilePage() {
//     const [user, setUser] = useState(getUser());
//     const [savedRecipes, setSavedRecipes] = useState([]); // Define state variable for saved recipes

//     useEffect(() => {
//         const fetchSavedRecipes = async () => {
//             try {
//                 if (user) {
//                     // Fetch saved recipes for the logged-in user
//                     const response = await axios.get(`/api/savedRecipes/${user.id}`);
//                     // Update saved recipes state with the response data
//                     setSavedRecipes(response.data);
//                     console.log('Saved recipes fetched!');
//                 }
//             } catch (error) {
//                 console.error('Error fetching saved recipes:', error);
//             }
//         };

//         fetchSavedRecipes();
//     }, [user]);

//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         setUser(null);
//     };

//     return (
//         <main>
//             <h1>Welcome, {user ? user.name : 'Guest'}!</h1>
//             {user ? (
//                 <>
//                     <button onClick={handleLogout}>Logout</button>
//                     <h2>Saved Recipes</h2>
//                     <ul>
//                         {savedRecipes.map(recipe => (
//                             <li key={recipe.id}>{recipe.title}</li>
//                         ))}
//                     </ul>
//                 </>
//             ) : (
//                 <div>
//                     <p>Please log in to view saved recipes.</p>
//                 </div>
//             )}
//         </main>
//     );
// }

// import React, { useState, useEffect } from 'react';
// import { getUser } from "../utilities/users-service.js";

// export default function ProfilePage() {
//     const [user, setUser] = useState(getUser());
//     const [savedRecipes, setSavedRecipes] = useState([]); // Define state variable for saved recipes

//     useEffect(() => {
//         // Function to fetch saved recipes from local storage
//         const fetchSavedRecipes = () => {
//             try {
//                 if (user) {
//                     // Retrieve saved recipes from local storage
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
//         localStorage.removeItem('token');
//         setUser(null);
//     };

//     return (
//         <main>
//             <h1>Welcome, {user ? user.name : 'Guest'}!</h1>
//             {user ? (
//                 <>
//                     <button onClick={handleLogout}>Logout</button>
//                     <h2>Saved Recipes</h2>
//                     <ul>
//                         {savedRecipes.map(recipe => (
//                             <li key={recipe.id}>{recipe.title}</li>
//                         ))}
//                     </ul>
//                 </>
//             ) : (
//                 <div>
//                     <p>Please log in to view saved recipes.</p>
//                 </div>
//             )}
//         </main>
//     );
// }

import React, { useState, useEffect } from 'react';
import { getUser } from "../utilities/users-service.js";
import { Link } from 'react-router-dom';

export default function ProfilePage() {
    const [user] = useState(getUser()); // Removed setUser since it's not being used
    const [savedRecipes, setSavedRecipes] = useState([]);

    useEffect(() => {
        const fetchSavedRecipes = () => {
            try {
                if (user) {
                    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
                    setSavedRecipes(savedRecipes);
                    console.log('Saved recipes fetched from local storage!');
                }
            } catch (error) {
                console.error('Error fetching saved recipes:', error);
            }
        };

        fetchSavedRecipes();
    }, [user]);

    return (
        <main>
            <h1>Welcome, {user ? user.name : 'Guest'}!</h1>
            {user ? (
                <>
                    <h2>Saved Recipes</h2>
                    <ul>
                        {savedRecipes.map(recipe => (
                            <li key={recipe.id}>
                                <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <div>
                    <p>Please log in to view saved recipes.</p>
                </div>
            )}
        </main>
    );
}

