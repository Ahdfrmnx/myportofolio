import './about.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-section">
        <div className="about-image">
          <div className="image-placeholder"></div>
        </div>
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            I'm a full-stack leaning frontend developer with data science superpowers. I craft beautiful, responsive web applications using React and modern JavaScript, while also embedding intelligent data analytics and machine learning capabilities. My unique blend of frontend expertise and data science knowledge allows me to build web solutions that are both visually stunning and powerfully data-driven.
          </p>
          <p>
            My career in web development started 4 years ago, starting from creating basic HTML/CSS pages to building complex web applications with React and Node.js. I also have a deep passion for data science, specifically in the application of data mining, machine learning, and deep learning to extract valuable insights from large data sets - a dual competency that allows me to work effectively in both web development and data analysis.
          </p>
          <div className="about-details">
            <div className="detail">
              <h3>Education</h3>
              <p>Computer Science Degree</p>
              <p>Raden Fatah Islamic State University, 2025</p>
            </div>
            <div className="detail">
              <h3>Experience</h3>
              <p>Frontend Developer, Data Science & Web Development</p>
              <p>2020 - Present</p>
            </div>
          </div>
          <a href="/path/to/resume.pdf" download className="download-resume">
            Download Resume
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;