// import React from "react";
// import { NavLink } from "react-router-dom";
// import '../App.css'; 
// import { getUser } from '../utilities/users-service'

// export default function NavBar() {
//   const isLoggedIn = !!getUser();

//   return (
//     <nav className="navbar">
//       <div>
//         <NavLink to="/">Recipes</NavLink> &nbsp;
//         {isLoggedIn ? (
//           <NavLink to="/profile">Profile</NavLink>
//         ) : (
//           <NavLink to="/login">Login</NavLink>
//         )}
//         &nbsp;
//       </div>
//     </nav>
//   );
// }


// import React from "react";
// import { NavLink } from "react-router-dom";
// import '../App.css'; 
// import { getUser } from '../utilities/users-service';

// export default function NavBar() {
//   const isLoggedIn = !!getUser();
//   console.log("isLoggedIn:", isLoggedIn); // Log isLoggedIn

//   return (
//     <nav className="navbar">
//       <div>
//         <NavLink to="/">Recipes</NavLink> &nbsp;
//         {isLoggedIn ? (
//           <NavLink to="/profile">Profile</NavLink>
//         ) : (
//           <NavLink to="/login">Login</NavLink>
//         )}
//         &nbsp;
//       </div>
//     </nav>
//   );
// }

import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css'; 

export default function NavBar({ isLoggedIn, onLogout }) {
  return (
    <nav className="navbar">
      <div>
        <NavLink to="/">Recipes</NavLink> &nbsp;
        {isLoggedIn ? (
          <>
            <NavLink to="/profile">Profile</NavLink>
            <button onClick={onLogout}>Logout</button> {/* Add logout button */}
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
        &nbsp;
      </div>
    </nav>
  );
}
