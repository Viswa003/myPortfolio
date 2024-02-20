// src/ProjectCard.js
import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`project-card ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
      <div className="project-front">
        <img src={project.thumbnail} alt={project.name} />
        <h3>{project.name}</h3>
      </div>
      <div className="project-back">
        <p>{project.description}</p>
        {/* Add more project details */}
      </div>
    </div>
  );
};

export default ProjectCard;
