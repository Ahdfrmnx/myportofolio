import { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h1>Get In Touch</h1>
          <p>
            Have a project in mind or want to discuss potential opportunities? 
            Feel free to reach out!
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <h3>Email</h3>
              <p>ahmadfirmanar@gmail.com</p>
            </div>
            <div className="contact-item">
              <h3>Phone</h3>
              <p>(+62) 851-7440-6558</p>
            </div>
            <div className="contact-item">
              <h3>Social Media</h3>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/ahmad-firman-ari-yanto-891040301/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/Ahdfrmnx" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <h2>Send Me a Message</h2>
          {submitted ? (
            <div className="success-message">
              <p>Thank you for your message! I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;