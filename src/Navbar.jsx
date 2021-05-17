import React from "react";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">Cookie Clicker</h1>
      <div className="navbar__menu">
        <div className="menu__item">home</div>
        <div className="menu__item">achievements</div>
        <div className="menu__item">shop</div>
      </div>
    </nav>
  );
};

export default Navbar;
