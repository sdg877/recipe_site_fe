import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css'; 
import { getUser } from '../utilities/users-service'

export default function NavBar() {
  const isLoggedIn = !!getUser();

  return (
    <nav className="navbar">
      <div>
        <NavLink to="/">Recipes</NavLink> &nbsp;
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


