// import React, { useState } from 'react';
// import SignUpForm from '../components/SignUpForm';
// import LoginForm from '../components/LoginForm';
// import { Navigate } from 'react-router-dom'; 
// import Layout from '../components/Layout';

// export default function LoginPage() {
//   const [user, setUser] = useState(null);
//   const [showLoginForm, setShowLoginForm] = useState(true);

//   const toggleForm = () => {
//     setShowLoginForm(prevState => !prevState);
//   };

//   return (
//     <Layout>
//     <main>
//       {user ? (
//         <Navigate to="/profile" />
//       ) : (
//         <>
//           {showLoginForm ? (
//             <>
//               <SignUpForm setUser={setUser} />
//               <p><button onClick={toggleForm}>Have an account? <br /> LOGIN</button></p>
//             </>
//           ) : (
//             <>
//               <LoginForm setUser={setUser} />
//               <p><button onClick={toggleForm}>No account? <br /> SIGN UP</button></p>
//             </>
//           )}
//         </>
//       )}
//     </main>
//     </Layout>
//   );
// }

import React from 'react';
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';
import { Navigate } from 'react-router-dom'; 
import Layout from '../components/Layout';
import { login } from '../utilities/users-service'; // import login function

export default function LoginPage({ onLogin }) {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm(prevState => !prevState);
  };

  const handleLogin = async (credentials) => {
    try {
      await login(credentials); // Attempt login
      onLogin(); // Update login state in parent component
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error
    }
  };

  return (
    <Layout>
      <main>
        {showLoginForm ? (
          <>
            <LoginForm onLogin={handleLogin} />
            <p><button onClick={toggleForm}>Have an account? <br /> LOGIN</button></p>
          </>
        ) : (
          <>
            <SignUpForm />
            <p><button onClick={toggleForm}>No account? <br /> SIGN UP</button></p>
          </>
        )}
      </main>
    </Layout>
  );
}

