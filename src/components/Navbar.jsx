import React from "react";
import logo from "../assets/logoShok.png"; // import your logo image
import './styles/navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" className="navbar__logo-img" />
      </div>
      <ul className="navbar__menu">
        <li className="navbar__menu-item">
          <a href="#home">Home</a>
        </li>
        <li className="navbar__menu-item">
          <a href="#about">About</a>
        </li>
        <li className="navbar__menu-item">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="navbar__menu-item">
          <a href="#product">Product</a>
        </li>
        <li className="navbar__menu-item">
          <a href="#career">Career</a>
        </li>
        <li className="navbar__menu-item">
          <a href="#blog">Blog</a>
        </li>
      </ul>
      <div className="navbar__search">
        <input type="text" placeholder="Search Here..." className="navbar__search-input" />
      </div>
      <button className="navbar__contact-button">Contact Us</button>
    </nav>
  );
};

export default Navbar;
