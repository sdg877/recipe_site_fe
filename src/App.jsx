import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import HomePage from '../src/pages/HomePage.jsx';
import NavBar from './components/NavBar.jsx';
import RecipeView from './pages/RecipeView.jsx';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className='App'>
      <NavBar isLoggedIn={!!user} />
      <Routes>
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/recipes/:id" element={<RecipeView />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;


