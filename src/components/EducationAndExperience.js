import React from 'react';
import './EducationAndExperience.css';

function EducationAndExperience() {
  return (
    <div id="education" className="section education-experience">
      <h2>Education & Experience</h2>
      <div className="timeline">
        <div className="timeline-item" style={{ '--i': 1 }}>
          <div className="timeline-year">January 2025 - Present</div>
          <div className="timeline-details">
            <h3>Software Development Intern</h3>
            <p>Baro Technologies</p>
            <span className="timeline-status">Ongoing</span>
            <span className="timeline-knowledge">Experience: Full-Stack Development, React</span>
          </div>
        </div>
        <div className="timeline-item" style={{ '--i': 2 }}>
          <div className="timeline-year">June 2024 - August 2024</div>
          <div className="timeline-details">
            <h3>Software Development Intern</h3>
            <p>Secretariat of Ethiopian Parliament</p>
            <span className="timeline-status">Duration: 2 months</span>
            <span className="timeline-knowledge">Experience: Web Development, Team Collaboration</span>
          </div>
        </div>
        <div className="timeline-item" style={{ '--i': 3 }}>
          <div className="timeline-year">July 2021 - October 2024</div>
          <div className="timeline-details">
            <h3>B.Sc. in Computer Science</h3>
            <p>University of Gondar</p>
            <span className="timeline-status">Graduated October 2024</span>
            <span className="timeline-knowledge">Skills: JavaScript, Python, Algorithms, Data Structures</span>
          </div>
        </div>
        <div className="timeline-item" style={{ '--i': 4 }}>
          <div className="timeline-year">2015 - 2018</div>
          <div className="timeline-details">
            <h3>High School Diploma</h3>
            <p>Bashewam School</p>
            <span className="timeline-status">Graduated</span>
          </div>
        </div>
      </div>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button-unique">
        Résumé
      </a>
    </div>
  );
}

export default EducationAndExperience;