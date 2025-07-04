import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Hi, I'm <span>Ahmad Firman</span></h1>
          <h2>Web Developer & Data Scientist</h2>
          <p>
            <strong>Web Development:</strong> Building performant, scalable applications with React, Next.js, and Node.js<br />
            <strong>Data Science:</strong> Extracting actionable insights through machine learning and advanced analytics
          </p>
          <div className="hero-buttons">
            <Link to="/project" className="btn btn-primary">View My Work</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder"></div>
        </div>
      </section>

      <section className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {/* Web Development Skills */}
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" className="skill-card">
          <div className="skill-icon react-icon"></div>
          <h3>React</h3>
        </a>
        <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noopener noreferrer" className="skill-card">
          <div className="skill-icon js-icon"></div>
          <h3>JavaScript</h3>
        </a>
        <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank" rel="noopener noreferrer" className="skill-card">
          <div className="skill-icon html-icon"></div>
          <h3>HTML5</h3>
        </a>
        <a href="https://en.wikipedia.org/wiki/CSS" target="_blank" rel="noopener noreferrer" className="skill-card">
          <div className="skill-icon css-icon"></div>
          <h3>CSS3</h3>
        </a>
        <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer" className="skill-card">
          <div className="skill-icon git-icon"></div>
          <h3>Git</h3>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" target="_blank" rel="noopener noreferrer" className="skill-card">
          <div className="skill-icon responsive-icon"></div>
          <h3>Responsive Design</h3>
        </a>
        {/* Data Science Skills */}
        <a href="https://en.wikipedia.org/wiki/Data_science" target="_blank" rel="noopener noreferrer" className="skill-card">
          <div className="skill-icon data-science-icon"></div>
          <h3>Data Science</h3>
        </a>
        <a href="https://en.wikipedia.org/wiki/Data_mining" target="_blank" rel="noopener noreferrer" className="skill-card">
          <div className="skill-icon data-mining-icon"></div>
          <h3>Data Mining</h3>
        </a>
        <a href="https://en.wikipedia.org/wiki/Machine_learning" target="_blank" rel="noopener noreferrer" className="skill-card">
          <div className="skill-icon ml-icon"></div>
          <h3>Machine Learning</h3>
        </a>
        <a href="https://en.wikipedia.org/wiki/Deep_learning" target="_blank" rel="noopener noreferrer" className="skill-card">
          <div className="skill-icon dl-icon"></div>
          <h3>Deep Learning</h3>
        </a>
      </div>
    </section>
    </div>
  );
};

export default Home;