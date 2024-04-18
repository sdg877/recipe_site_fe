// import LoginForm from "./LoginForm.jsx"
// import SignUpForm from "./SignUpForm.jsx"

// export default function LoginPage({ setUser }) {
//   return (
//     <main>
//     <SignUpForm setUser={ setUser }/>
//     <LoginForm setUser={ setUser }/>
//     </main>
//   )
// }

import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

export default function LoginPage() {
  const [user, setUser] = useState(null);

  return (
    <main>
      {user ? (
        <UserProfile user={user} />
      ) : (
        <>
          <SignUpForm setUser={setUser} />
          <LoginForm setUser={setUser} />
        </>
      )}
    </main>
  );
}

