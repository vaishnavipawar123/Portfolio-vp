import React from "react";
import "./MainPage"; // Make sure your CSS is properly imported

const Header = () => {
  return (
    <header className="header">
      <div className="social-icons">
        <a href="https://github.com/vaishnavipawar123" className="social-icon">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/vaishnavi-pawar-24b636215/" className="social-icon">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/vaishnavii_pawar/" className="social-icon">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
