// src/components/Layout.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
