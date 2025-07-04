import { useState } from 'react';
import './com_project.css';

const Project = ({ title, description, technologies, imageUrl, liveUrl, codeUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-image-container">
        <img src={imageUrl} alt={title} className="project-image" />
        {isHovered && (
          <div className="project-overlay">
            <div className="project-links">
              {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="live-demo">Live Demo</a>}
              {codeUrl && <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="view-code">View Code</a>}
            </div>
          </div>
        )}
      </div>
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;