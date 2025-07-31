import React, { useRef, useEffect, useState } from 'react';
import { FaReact, FaAngular } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiPostgresql, SiSpringboot } from 'react-icons/si';
import './About.css';

const About = ({ setActiveSection }) => {
  const aboutRef = useRef();
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { icon: <FaReact />, name: 'React', color: '#61DAFB', proficiency: 'Advanced' },
    { icon: <SiJavascript />, name: 'JavaScript', color: '#F7DF1E', proficiency: 'Advanced' },
    { icon: <FaAngular />, name: 'Angular', color: '#DD0031', proficiency: 'Intermediate' },
    { icon: <SiNextdotjs />, name: 'Next.js', color: '#000000', proficiency: 'Intermediate' },
    { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#336791', proficiency: 'Intermediate' },
    { icon: <SiSpringboot />, name: 'Spring Boot', color: '#6DB33F', proficiency: 'Intermediate' },
  ];

  useEffect(() => {
    const currentRef = aboutRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('about');
          const elements = currentRef.querySelectorAll('.animate-on-load');
          elements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.2}s`;
            el.classList.add('animate');
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

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <div className="particle-background"></div>
      <div className="section-header">
        <span className="section-number">01</span>
        <h2 className="section-title">About Me</h2>
        <div className="title-line"></div>
        <p className="section-subtitle animate-on-load">Unveiling the coder behind the magic</p>
      </div>
      <div className="about-content">
        <div className="about-card animate-on-load">
          <div className="profile-bio">
            <div className="bio-text">
              <p className="greeting animate-on-load">Hello, World!</p>
              <h3 className="intro animate-on-load">
                I'm <span className="highlight typing">Millyon Tilahun</span>
                <span className="cursor">|</span>
              </h3>
              <p className="description animate-on-load">
                A <span className="role">Full Stack Developer</span> driven to craft seamless, innovative web applications. From dynamic <span className="role">React</span> and <span className="role">Angular</span> frontends to scalable <span className="role">Next.js</span> and <span className="role">Spring Boot</span> backends, I transform ideas into reality with precision and passion.
              </p>
            </div>
            <div className="skills-cloud">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`skill-bubble ${hoveredSkill === index ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  style={{ '--delay': `${index * 0.1}s`, '--skill-color': skill.color }}
                >
                  {skill.icon}
                  <span className="skill-name">{skill.name} - {skill.proficiency}</span>
                  <div className="ripple-effect"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="experience-timeline">
            <div className="timeline-badge animate-on-load">
              <svg className="progress-ring" width="220" height="220">
                <circle
                  className="progress-ring__circle"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="14"
                  fill="transparent"
                  r="90"
                  cx="110"
                  cy="110"
                />
                <circle
                  className="progress-ring__progress"
                  stroke="url(#gradient)"
                  strokeWidth="14"
                  strokeDasharray="565.5"
                  strokeDashoffset="169.65"
                  fill="transparent"
                  r="90"
                  cx="110"
                  cy="110"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--accent-1)" />
                    <stop offset="100%" stopColor="var(--accent-2)" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="badge-content">
                <span className="years">2+</span>
                <span className="label">Years of Coding Mastery</span>
              </div>
              <div className="sparkle-effect"></div>
              <span className="badge-tooltip">Innovating since 2023</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;