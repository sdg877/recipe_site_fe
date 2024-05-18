import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css'; 

export default function NavBar() {
  return (
    <nav className="navbar">
      <div>
        <NavLink to="/recipes">Recipes</NavLink> &nbsp;
        <NavLink to="/profile">Profile</NavLink> &nbsp;
      </div>
    </nav>
  );
}
