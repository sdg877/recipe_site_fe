import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/recipes/:id" element={<RecipeView />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import LoginPage from './pages/LoginPage';
// import ProfilePage from './pages/ProfilePage';
// import HomePage from './pages/HomePage';
// import NavBar from './components/NavBar';
// import RecipeView from './pages/RecipeView';

// function App() {
//   return (
//     <Router>
//       <div className='App'>
//         <NavBar />
//         <Routes>
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/profile" element={<ProfilePage />} />
//           <Route path="/recipes/:id" element={<RecipeView />} />
//           <Route path="/" element={<HomePage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

