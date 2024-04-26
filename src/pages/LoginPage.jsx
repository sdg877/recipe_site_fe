import React, { useState } from 'react';
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';
import { Navigate } from 'react-router-dom'; 

export default function LoginPage() {
  const [user, setUser] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm(prevState => !prevState);
  };

  return (
    <main>
      {user ? (
        <Navigate to="/recipes" />
      ) : (
        <>
          {showLoginForm ? (
            <>
              <SignUpForm setUser={setUser} />
              <p>Have an account? <button onClick={toggleForm}>Log in</button></p>
            </>
          ) : (
            <>
              <LoginForm setUser={setUser} />
              <p>No account? <button onClick={toggleForm}>Sign up</button></p>
            </>
          )}
        </>
      )}
    </main>
  );
}
