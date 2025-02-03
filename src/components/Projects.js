import React from "react";
import "./Projects.css";
import drumMachineImg from "../assests/drum.jpg";
import mazeRunImg from "../assests/maze.png";
import vpMedsImg from "../assests/medicine.jpg";
import githubImg from "../assests/git.jpg";

const Projects = () => {
  const projects = [
    { 
      title: "Drum Machine", 
      description: "A simple drum machine can be operated with keyboard.", 
      link: "https://vaishnavipawar123.github.io/drum-machine/",
      image: drumMachineImg
    },
    { 
      title: "Mazerun", 
      description: "A JavaScript maze game still in process.", 
      link: "https://vaishnavipawar123.github.io/runmaze/",
      image: mazeRunImg
    },
    { 
      title: "VPmeds", 
      description: "A digital medical supply management system.", 
      link: "https://github.com/vaishnavipawar123/medical-supply-managment",
      image: vpMedsImg
    },
    { 
      title: "Pomodoro", 
      description: "Simple pomodoro clock.", 
      link: "https://vaishnavipawar123.github.io/pomodoro/",
      image: githubImg
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-box"
            style={{ backgroundImage: `url(${project.image})` }} 
          >
            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
