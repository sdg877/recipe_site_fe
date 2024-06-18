// import React from "react";
// import { NavLink } from "react-router-dom";
// import '../App.css'; 

// export default function NavBar() {
//   return (
//     <nav className="navbar">
//       <div>
//         <NavLink to="/recipes">Recipes</NavLink> &nbsp;
//         <NavLink to="/profile">Profile</NavLink> &nbsp;
//       </div>
//     </nav>
//   );
// }

import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css'; 
import { getUser } from '../utilities/users-service'

export default function NavBar() {
  // Check if user is logged in
  const isLoggedIn = !!getUser();

  return (
    <nav className="navbar">
      <div>
        <NavLink to="/">Recipes</NavLink> &nbsp;
        {/* Conditionally render Profile or Login based on isLoggedIn */}
        {isLoggedIn ? (
          <NavLink to="/profile">Profile</NavLink>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
        &nbsp;
      </div>
    </nav>
  );
}


