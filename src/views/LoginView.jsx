// import React, { useState } from 'react';
// import { googleLogin } from 'vue3-google-login'; // Import hypothetical function for Google login

// function LoginView() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState('');

//   const handleGoogleLogin = async () => {
//     try {
//       const response = await googleLogin({
//         clientId: '724548465399-s0k01ad07r5t9bptnpgmrspu572m6qh0.apps.googleusercontent.com', // Replace with your Google OAuth client ID
//         scope: 'profile email', // Specify the scopes you need for authentication
//       });
//       const userData = response.credential; // Assuming the response contains user credential
//       setIsLoggedIn(true);
//       setUserName(userData.given_name);
//       // Your logic for handling authentication and saving session data
//     } catch (error) {
//       console.error('Google login failed:', error);
//       // Handle login failure
//     }
//   };

//   const handleLogout = () => {
//     // Your logic for clearing session data
//     setIsLoggedIn(false);
//     setUserName('');
//   };

//   return (
//     <div>
//       {isLoggedIn ? (
//         <div>
//           <p>Welcome, {userName}!</p>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <p>Please sign in:</p>
//           <button onClick={handleGoogleLogin}>Sign in with Google</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default LoginView;

import React, { useState, useEffect } from 'react';

function LoginView() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.async = true;
    script.onload = initGoogleSignIn;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initGoogleSignIn = () => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: '724548465399-s0k01ad07r5t9bptnpgmrspu572m6qh0.apps.googleusercontent.com', // Replace with your Google OAuth client ID
      }).then((auth2) => {
        console.log('Google Sign-In initialized.');
      });
    });
  };

  const handleGoogleLogin = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then((googleUser) => {
      const profile = googleUser.getBasicProfile();
      setIsLoggedIn(true);
      setUserName(profile.getName());
      // Your logic for handling authentication and saving session data
    }).catch((error) => {
      console.error('Google login failed:', error);
      // Handle login failure
    });
  };

  const handleLogout = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      setIsLoggedIn(false);
      setUserName('');
      // Your logic for clearing session data
    });
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {userName}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please sign in:</p>
          <button onClick={handleGoogleLogin}>Sign in with Google</button>
        </div>
      )}
    </div>
  );
}

export default LoginView;

