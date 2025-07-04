import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './index';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Project from './pages/project';
import Contact from './pages/contact';
import './App.css';

function App() {
  const { darkMode, toggleTheme } = useTheme();
  const [appLoaded, setAppLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.add('app-loaded');
      setAppLoaded(true);
    }, 500); // Adjust timing based on your actual load time

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark-theme' : 'light-theme'} ${appLoaded ? 'app-loaded' : ''}`}>
        <div className="theme-switch-wrapper">
          <label className="theme-switch">
            <input 
              type="checkbox" 
              checked={darkMode} 
              onChange={toggleTheme} 
            />
            <span className="slider round">
              <span className="icon sun">☀️</span>
              <span className="icon moon">🌙</span>
            </span>
          </label>
        </div>
        
        <Header darkMode={darkMode} />
        <main>
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/about" element={<About darkMode={darkMode} />} />
            <Route path="/project" element={<Project darkMode={darkMode} />} />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          </Routes>
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;