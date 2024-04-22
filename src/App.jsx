// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import LoginPage from './pages/LoginPage.jsx'
// import ProfilePage from './pages/ProfilePage.jsx';
// import HomePage from '../src/pages/HomePage.jsx';
// import NavBar from './components/NavBar.jsx';
// import RecipeView from './pages/RecipeView.jsx';

// function App() {
//   return (
//       <div>
//         <NavBar />
//         <Routes>
//             <Route path="/" element={<LoginPage />} />
//             <Route path="/profile" element={<ProfilePage />} />
//             <Route path="/recipe/:id" element={<RecipeView />} />
//             <Route path="/home" element={<HomePage />} />
//         </Routes>
//       </div>
//   );
// }

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/LoginPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import HomePage from '../src/pages/HomePage.jsx';
import NavBar from './components/NavBar.jsx';
import RecipeView from './pages/RecipeView.jsx';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/recipe/:id" element={<RecipeView />} />
        <Route path="/recipe" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
