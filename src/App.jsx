import React from 'react';
import { Router, Route } from 'react-router-dom';
import LoginPage from '../src/components/LoginPage.jsx';
import UserProfile from '../src/components/UserProfile.jsx';

function App() {
  return (
    <Router>
      <Route path="/" element={LoginPage} />
      <Route path="/profile" element={UserProfile} />
    </Router>
  );
}

export default App;
