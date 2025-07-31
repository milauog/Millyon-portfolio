import React, { useEffect, useRef } from 'react';
import { FaCode, FaServer, FaArrowDown } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb } from 'react-icons/si';
import './Hero.css';

const Hero = ({ setActiveSection }) => {
  const heroRef = useRef();

  useEffect(() => {
    const currentRef = heroRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('home');
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

  const techIcons = [
    { icon: <SiJavascript />, top: '15%', left: '10%', animationDelay: '0s' },
    { icon: <SiReact />, top: '25%', left: '85%', animationDelay: '2s' },
    { icon: <SiNodedotjs />, top: '35%', left: '20%', animationDelay: '4s' },
    { icon: <SiMongodb />, top: '50%', left: '75%', animationDelay: '1s' },
  ];

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      <div className="tech-icons">
        {techIcons.map((tech, index) => (
          <div
            key={index}
            className="tech-icon"
            style={{
              top: tech.top,
              left: tech.left,
              animationDelay: tech.animationDelay,
              animationDuration: `${15 + index * 3}s`,
            }}
          >
            {tech.icon}
          </div>
        ))}
      </div>
      <div className="hero-content">
        <h1 className="hero-title animate-on-load">
          <span className="hero-name">Millyon Tilahun</span>
          <span className="hero-title-line"></span>
          <span className="hero-subtitle">Full Stack JavaScript Developer</span>
        </h1>
        <p className="hero-description animate-on-load">
          Crafting scalable web applications with a passion for seamless user experiences and clean, efficient code.
        </p>
        <div className="hero-highlights animate-on-load">
          <div className="highlight-item">
            <FaCode className="highlight-icon" />
            <span>Frontend Development</span>
          </div>
          <div className="highlight-item">
            <FaServer className="highlight-icon" />
            <span>Backend Systems</span>
          </div>
        </div>
        <div className="hero-buttons animate-on-load">
          <a href="#projects" className="hero-button projects-button">
            <FaCode /> View Projects
          </a>
          <a href="#contact" className="hero-button contact-button">
            Contact Me
          </a>
        </div>
      </div>
      <div className="hero-scroll-indicator animate-on-load" onClick={scrollToNextSection}>
        <span>Explore My Work</span>
        <FaArrowDown className="scroll-icon" />
      </div>
    </section>
  );
};

export default Hero;