import Project from '../components/com_project';
import './project.css';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A full-featured online store with product listings, cart functionality, and secure checkout.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      imageUrl: "https://via.placeholder.com/400x300",
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/example/ecommerce"
    },
    {
      title: "Task Management App",
      description: "A productivity application for organizing tasks with drag-and-drop functionality.",
      technologies: ["React", "Firebase", "Material UI"],
      imageUrl: "https://via.placeholder.com/400x300",
      liveUrl: "https://example.com/taskapp",
      codeUrl: "https://github.com/example/taskapp"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather information with 5-day forecast for any location worldwide.",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      imageUrl: "https://via.placeholder.com/400x300",
      liveUrl: "https://example.com/weather",
      codeUrl: "https://github.com/example/weather"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website to showcase projects and skills.",
      technologies: ["React", "CSS3", "React Router"],
      imageUrl: "https://via.placeholder.com/400x300",
      liveUrl: "https://example.com/portfolio",
      codeUrl: "https://github.com/example/portfolio"
    }
  ];

  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <p className="projects-intro">
        Here are some of my recent projects. Each one was built to solve a specific problem or 
        demonstrate a particular skill set.
      </p>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Project 
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            imageUrl={project.imageUrl}
            liveUrl={project.liveUrl}
            codeUrl={project.codeUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;