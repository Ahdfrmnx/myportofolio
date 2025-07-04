import React from 'react';
import './footer.css';

const Project = ({ title, description }) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '2px', margin: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Ahmad Firman A. All rights reserved.
      </div>
    </div>
  );
};

export default Project;