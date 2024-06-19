import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div>
        <NavLink to="/">Recipes</NavLink> &nbsp;
        <NavLink to="/profile">Profile</NavLink>
      </div>
    </nav>
  );
}
