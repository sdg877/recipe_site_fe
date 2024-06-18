// import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import './App.css';
// import LoginPage from './pages/LoginPage.jsx';
// import ProfilePage from './pages/ProfilePage.jsx';
// import HomePage from '../src/pages/HomePage.jsx';
// import NavBar from './components/NavBar.jsx';
// import RecipeView from './pages/RecipeView.jsx';

// function App() {
//   const [user, setUser] = useState(null);

//   return (
//     <div className='App'>
//       <NavBar isLoggedIn={!!user} />
//       <Routes>
//         <Route path="/login" element={<LoginPage setUser={setUser} />} />
//         <Route path="/profile" element={<ProfilePage />} />
//         <Route path="/recipes/:id" element={<RecipeView />} />
//         <Route path="/" element={<HomePage />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import HomePage from '../src/pages/HomePage.jsx';
import NavBar from './components/NavBar.jsx';
import RecipeView from './pages/RecipeView.jsx';
import { getUser } from '../utilities/users-service'; // import getUser

function App() {
  // Manage authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(!!getUser());

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true); // Update isLoggedIn state
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false); // Update isLoggedIn state
  };

  return (
    <div className='App'>
      {/* Pass isLoggedIn and handleLogout to NavBar */}
      <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        {/* Pass handleLogin to LoginPage */}
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/recipes/:id" element={<RecipeView />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;

