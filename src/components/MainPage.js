import React from "react";
import "./MainPage.css";
import ppImage from '../assests/pp.jpg'; // Adjust path based on where your image is located

const MainPage = () => {
  return (
    <div className="main-page">
      {/* Header Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>VAISHNAVI PAWAR</h1>
          <div className="button-group">
            {/* Scroll to contact section */}
            <a href="#contact">
              <button className="btn btn-secondary">Contact me</button>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={ppImage} alt="Profile" />
        </div>
      </header>

      {/* Contact Section at the bottom */}
    </div>
  );
};

export default MainPage;
