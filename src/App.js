// App.js (Main Component)
import { useState, useEffect } from 'react';
// src/App.js
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero'; // Make sure this exists in the same structure
import About from './components/Aboutme/About'; // Make sure this exists
import Expertise from './components/EducationAndExperience/Expertise'; // Make sure this exists
import Projects from './components/Projects/Projects'; // Make sure this exists
import EducationAndExperience from './components/EducationAndExperience/EducationAndExperience';
import Contact from './components/Contact me/Contact'; // Make sure this exists
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <h2>Loading Portfolio...</h2>
      </div>
    );
  }

  return (
    <div className="portfolio-app">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero setActiveSection={setActiveSection} />
        <About setActiveSection={setActiveSection} />
        <Expertise setActiveSection={setActiveSection} />
        <Projects setActiveSection={setActiveSection} />
        <EducationAndExperience setActiveSection={setActiveSection} />
        <Contact setActiveSection={setActiveSection} />
      </main>
      <footer className="portfolio-footer">
        <p>© {new Date().getFullYear()} Millyon Tilahun. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;