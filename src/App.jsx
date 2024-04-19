import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../src/components/LoginPage.jsx';
import UserProfile from '../src/components/UserProfile.jsx';
import HomePage from '../src/pages/HomePage.jsx';
import NavBar from './components/NavBar.jsx';
import RecipeView from './pages/RecipeView.jsx';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/recipe/:id" element={<RecipeView />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
