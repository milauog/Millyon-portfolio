import React, { useEffect, useRef } from 'react';
import { FaBriefcase, FaGraduationCap, FaArrowRight } from 'react-icons/fa';
import './EducationAndExperience.css';

const EducationAndExperience = ({ setActiveSection }) => {
  const educationRef = useRef();

  useEffect(() => {
    const currentRef = educationRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('education');
          const items = currentRef.querySelectorAll('.timeline-item');
          items.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.2}s`;
            item.classList.add('animate');
          });
        }
      },
      { threshold: 0.3 }
    );

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [setActiveSection]);

  const timelineItems = [
    {
      year: 'Jul 2021 - Oct 2024',
      title: 'B.Sc. in Computer Science',
      institution: 'University of Gondar',
      status: 'Graduated',
      skills: ['Algorithms', 'Data Structures', 'Software Engineering'],
      icon: <FaGraduationCap />,
      type: 'education',
    },
    {
      year: 'Jun 2024 - Aug 2024',
      title: 'Network Engineer Intern',
      company: 'Secretariat of Ethiopian Parliament',
      status: 'Completed',
      skills: ['Network Infrastructure', 'Troubleshooting', 'System Administration'],
      icon: <FaBriefcase />,
      type: 'experience',
    },
    {
      year: 'Jan 2025 - Apr 2025',
      title: 'Full Stack Developer Intern',
      company: 'Baro Technologies',
      status: 'Completed',
      skills: ['MERN Stack', 'REST APIs', 'React'],
      icon: <FaBriefcase />,
      type: 'experience',
    },
    {
      year: 'May 2025 - Present',
      title: 'Junior Programmer',
      company: 'Enat Bank',
      status: 'Ongoing',
      skills: ['Spring Boot', 'Angular', 'Database Integration'],
      icon: <FaBriefcase />,
      type: 'experience',
    },
  ];

  return (
    <section id="education" className="education-section" ref={educationRef}>
      <div className="section-header">
        <span className="section-number">03</span>
        <h2 className="section-title">My Journey</h2>
        <div className="title-line"></div>
        <p className="section-subtitle">From academic foundations to professional milestones</p>
      </div>
      <div className="timeline-container">
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${item.type} ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-content">
              <div className="timeline-marker">
                <span className="marker-icon">{item.icon}</span>
              </div>
              <div className="timeline-details">
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-entity">{item.company || item.institution}</p>
                <span className="timeline-year">{item.year}</span>
                <span className="timeline-status">{item.status}</span>
                <div className="timeline-skills">
                  {item.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button"
      >
        View Full Résumé <FaArrowRight className="resume-icon" />
      </a>
    </section>
  );
};

export default EducationAndExperience;