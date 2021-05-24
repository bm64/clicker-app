import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">Cookie Clicker</h1>
      <div className="navbar__menu">
        <Link className="menu__item" to="/">
          Home
        </Link>
        <Link className="menu__item" to="/achievements">
          Achievements
        </Link>
        <Link className="menu__item" to="/shop">
          Shop
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
