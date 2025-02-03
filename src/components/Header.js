import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import "./Header.css"; // Import the CSS file

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="navbar-container">
        {/* Logo */}
        <a href="\About.js" className="navbar-logo">
          VP
        </a>
        

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          {/* <li><a href="#education">Education</a></li> */}
          <li><a href="#contact">Contact</a></li>
          
        </ul>

        {/* Mobile Menu Button */}
        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Gradient Underline */}
      <div className="navbar-gradient"></div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="mobile-menu">
          
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          {/* <li><a href="#education" onClick={() => setIsOpen(false)}>Education</a></li> */}
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </header>
  );
};

export default Header;
