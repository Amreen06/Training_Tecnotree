import React from 'react';
import './Projects.scss';

function Projects() {
  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="project">
        <img src="project1.png" alt="Project 1" />
        <h2>Project 1</h2>
        <p>Description of project 1.</p>
        <a href="https://github.com/username/project1">GitHub Repository</a>
      </div>
      <div className="project">
        <img src="project2.png" alt="Project 2" />
        <h2>Project 2</h2>
        <p>Description of project 2.</p>
        <a href="https://github.com/username/project2">GitHub Repository</a>
      </div>
    </section>
  );
}

export default Projects;
