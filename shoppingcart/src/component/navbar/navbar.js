import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="container">
      <ul className="navbar">
        <li>
          <Link to="/home"> Home</Link>
        </li>
        <li>
          <Link to="/product"> Product</Link>
        </li>
        <li>
          <Link to="/cart"> Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
