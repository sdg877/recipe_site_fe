import React, { useState } from 'react';
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';
import { Navigate } from 'react-router-dom'; 
import Layout from '../components/Layout';

export default function LoginPage() {
  const [user, setUser] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm(prevState => !prevState);
  };

  return (
    <Layout>
    <main>
      {user ? (
        <Navigate to="/profile" />
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
    </Layout>
  );
}
