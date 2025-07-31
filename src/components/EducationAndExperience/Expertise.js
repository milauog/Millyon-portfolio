import React, { useEffect, useRef } from 'react';
import { FaCode, FaServer, FaGitAlt } from 'react-icons/fa';
import './Expertise.css';

const Expertise = ({ setActiveSection }) => {
  const expertiseRef = useRef();
  const sectionRef = useRef();

  useEffect(() => {
    const currentRef = expertiseRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('expertise');
          const skillItems = sectionRef.current.querySelectorAll('.skill-item');
          skillItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
            item.classList.add('animate');
          });
        }
      },
      { threshold: 0.2 }
    );

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [setActiveSection]);

  const skills = {
    frontend: {
      icon: <FaCode className="category-icon" />,
      items: ['React', 'Angular', 'TypeScript', 'HTML/CSS', 'Tailwind'],
    },
    backend: {
      icon: <FaServer className="category-icon" />,
      items: ['Node.js', 'Express', 'Spring Boot', 'Postgres', 'MongoDB',],
    },
    others: {
      icon: <FaGitAlt className="category-icon" />,
      items: ['Git', 'Docker', 'CI/CD'],
    },
  };

  return (
    <section id="expertise" className="expertise-section" ref={expertiseRef}>
      <div className="container" ref={sectionRef}>
        <div className="section-header">
          <span className="section-number">01</span>
          <h2 className="section-title">My Expertise</h2>
          <div className="title-line"></div>
          <p className="section-subtitle">Core technologies I use to build robust and scalable solutions</p>
        </div>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, data], index) => (
            <div key={category} className="skill-category">
              <div className="category-header">
                {data.icon}
                <h3 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              </div>
              <div className="skills-list">
                {data.items.map((skill, i) => (
                  <div key={i} className="skill-item" style={{ '--delay': `${i * 0.1}s` }}>
                    <span className="skill-text">{skill}</span>
                    <div className="skill-level-container">
                      <div
                        className="skill-level"
                        style={{ width: `${75 + Math.random() * 20}%`, animationDelay: `${i * 0.1}s` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;