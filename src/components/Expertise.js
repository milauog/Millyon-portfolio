import React from 'react';
import './Expertise.css';

function Expertise() {
  const skills = {
    languages: ['JavaScript', 'Python', 'HTML', 'CSS', 'TypeScript', 'C++', 'Java', 'PHP'],
    frameworks: ['React', 'Node.js', 'Express', 'MongoDB', 'Angular', 'Vue.js', 'Next.js', 'JavaFX'],
  };

  return (
    <div className="section expertise">
      <h2>My Expertise</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Languages</h3>
          {skills.languages.map((skill, index) => (
            <span key={index} className="skill-item">{skill}</span>
          ))}
        </div>
        <div className="skill-category">
          <h3>Frameworks</h3>
          {skills.frameworks.map((skill, index) => (
            <span key={index} className="skill-item">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;