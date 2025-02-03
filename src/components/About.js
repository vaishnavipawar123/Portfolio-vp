import React from "react";
import "./About.css";
import aboutImage from "../assests/about.jpg";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi! I'm <span className="highlight">Vaishnavi Pawar</span>, a passionate developer with expertise 
            in Java, C++, and full-stack development. Also a team member of GDG MESWCOE, 
            I inspire learning and innovation. I've worked on projects like a medical supply management system, 
            javascript games, and banking app.
          </p>
          <p>
          When I'm not coding, I explore graphic design, animation, and photography. 
          I'm driven by creativity, 
          problem-solving, and a mission to make an impact through technology. 
          Let's build something amazing! </p>
        </div>
        <div className="about-image">
        <img src={aboutImage} alt="About Us Illustration" />
        </div>
      </div>
    </section>
  );
};

export default About;
