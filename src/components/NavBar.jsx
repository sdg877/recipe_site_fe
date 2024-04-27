import React from "react";
import { NavLink } from "react-router-dom";
import { logOut } from "../utilities/users-service";

export default function NavBar() {
  const handleLogout = () => {
    logOut();
    window.location.href = "/";
  };

  return (
    <nav className="navbar">
      <div>
        <NavLink to="/">Login/SignUp</NavLink> <br />
        <NavLink to="/recipes">Recipes</NavLink> <br />
        <NavLink to="/profile">Profile</NavLink> <br />
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}
