import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Expertise from './components/Expertise';
import EducationAndExperience from './components/EducationAndExperience'; // New import
import Contact from './components/Contact';

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