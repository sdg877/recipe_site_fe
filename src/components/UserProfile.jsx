import React from 'react';
import { Router, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import UserProfile from './UserProfile';

function App() {
  return (
    <Router>
      <Route path="/" exact component={LoginPage} />
      <Route path="/profile" component={UserProfile} />
    </Router>
  );
}

export default App;
