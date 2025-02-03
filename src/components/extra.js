import React from "react";
import "./extra.css";
import drumMachineImg from "../assests/photo.jpg";
import mazeRunImg from "../assests/poster.jpg";

const Projects = () => {
  const projects = [
    { 
      title: "Photography page", 
      description: "Take a look at beautiful scenic views.", 
      link: "https://www.instagram.com/viis_cameraroll/",
      image: drumMachineImg
    },
    { 
      title: "Graphics design", 
      description: "Collection of graphics like posters, posts, etc.", 
      link: "https://drive.google.com/drive/folders/1iMAdJcOqNVwXytRT_a4Zqnoxff8nXZE7?usp=sharing",
      image: mazeRunImg
    }
  ];

  return (
    <section id="projects" className="projects-section2">
      <h2 className="projects-title">Co-curricular</h2>

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
