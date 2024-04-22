
import React, { useState } from 'react';
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';
import UserProfile from './ProfilePage';

export default function LoginPage() {
  const [user, setUser] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm(prevState => !prevState);
  };

  return (
    <main>
      {user ? (
        <UserProfile user={user} />
      ) : (
        <>
          {showLoginForm ? (
            <>
              <LoginForm setUser={setUser} />
              <p>No account? <button onClick={toggleForm}>Sign up</button></p>
            </>
          ) : (
            <>
              <SignUpForm setUser={setUser} />
              <p>Have an account? <button onClick={toggleForm}>Log in</button></p>
            </>
          )}
        </>
      )}
    </main>
  );
}


