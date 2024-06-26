import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';
import Layout from '../components/Layout';
import '../App.css'; 

export default function LoginPage() {
  const [user, setUser] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/profile";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  const toggleForm = () => {
    setShowLoginForm(prevState => !prevState);
  };

  return (
    <Layout>
      <main>
        {user ? (
          <Navigate to={from} replace />
        ) : (
          <>
            {showLoginForm ? (
              <>
                <LoginForm setUser={setUser} />
                <div className="btn-container">
                  <p><button onClick={toggleForm} className="btn-spacing">No account? SIGN UP</button></p>
                </div>
              </>
            ) : (
              <>
                <SignUpForm setUser={setUser} />
                <div className="btn-container">
                  <p><button onClick={toggleForm} className="btn-spacing">Have an account? LOGIN</button></p>
                </div>
              </>
            )}
          </>
        )}
      </main>
    </Layout>
  );
}
