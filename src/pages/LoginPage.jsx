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
                <p><button onClick={toggleForm}>Have an account? <br /> LOGIN</button></p>
              </>
            ) : (
              <>
                <LoginForm setUser={setUser} />
                <p><button onClick={toggleForm}>No account? <br /> SIGN UP</button></p>
              </>
            )}
          </>
        )}
      </main>
    </Layout>
  );
}
