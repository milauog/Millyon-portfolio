import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import About from './components/Aboutme/About';
import Projects from './components/Projects/Projects';
import Expertise from './components/EducationAndExperience/Expertise';
import EducationAndExperience from './components/EducationAndExperience/EducationAndExperience'; // New import
import Contact from './components/Contact me/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Hero />
        <About />
        <Projects />
        <Expertise />
        <EducationAndExperience /> {/* Updated section */}
        <Contact />
      </div>
    </div>
  );
}

export default App;