import React, { useState, useEffect, useRef } from 'react';
import { FaExternalLinkAlt, FaCode, FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FaAngular, FaJs, FaChartLine, FaDatabase, FaServer, FaLock } from 'react-icons/fa';
import { SiSpringboot, SiMysql } from 'react-icons/si';
import './Projects.css';

const Projects = ({ setActiveSection }) => {
  const projectsRef = useRef();
  const [selectedProject, setSelectedProject] = useState(null);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const currentRef = projectsRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('projects');
          const cards = currentRef.querySelectorAll('.project-card');
          cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.2}s`;
            card.classList.add('animate');
          });
          const introElements = currentRef.querySelectorAll('.intro-animate');
          introElements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.2}s`;
            el.classList.add('animate');
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

  const projects = [
    {
      title: 'Inventory Management System',
      shortDescription: 'Full-stack inventory management with authentication.',
      fullDescription:
        'A comprehensive inventory management system with user authentication, built with Angular (NG-ZORRO) for the frontend and Spring Boot for the backend. Features include role-based access control, product management, and reporting.',
      languages: ['JavaScript', 'Java'],
      features: [
        'User authentication & authorization',
        'Role-based access control',
        'Product CRUD operations',
        'Inventory tracking',
        'Responsive dashboard',
        'JWT token security',
      ],
      liveLink: '#',
      codeLink: 'https://github.com/milauog/inventory-management-backend',
            images: ['inventory1.png', 'inventory22.png', 'signin.png'],

      hasImages: true,
      techStack: [
        { name: 'Angular', icon: <FaAngular />, color: '220, 53, 69' },
        { name: 'NG-ZORRO', icon: <FaAngular />, color: '220, 53, 69' },
        { name: 'Spring Boot', icon: <SiSpringboot />, color: '108, 135, 57' },
        { name: 'MySQL', icon: <SiMysql />, color: '0, 113, 164' },
        { name: 'JWT Auth', icon: <FaLock />, color: '255, 107, 107' },
      ],
    },
    {
      title: 'Online Code Editor',
      shortDescription: 'A web-based editor for coding on the go.',
      fullDescription:
        'A versatile online code editor allowing users to write, run, and test code directly in the browser. Built with a focus on simplicity and performance, it supports real-time previews and syntax highlighting.',
      languages: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Real-time code execution',
        'Syntax highlighting',
        'Responsive design',
        'Multiple file support',
      ],
      liveLink: 'https://code-editor-k6wd.vercel.app/',
      codeLink: 'https://github.com/milauog/code-editor',
      images: ['code-editor1.png', 'code-editor2.png', 'code-editor3.png'],
      hasImages: true,
      techStack: [
        { name: 'HTML', icon: <FaJs />, color: '227, 79, 38' },
        { name: 'CSS', icon: <FaJs />, color: '21, 114, 182' },
        { name: 'JavaScript', icon: <FaJs />, color: '240, 219, 79' },
      ],
    },
    {
      title: 'Diabetes Prediction',
      shortDescription: 'A machine learning model to predict diabetes risk.',
      fullDescription:
        'A cutting-edge ML project predicting diabetes risk using health data. This model was trained on a comprehensive dataset and achieves 85% accuracy in predicting diabetes risk factors.',
      languages: ['Python'],
      features: [
        'Machine learning model (Random Forest)',
        'Data preprocessing pipeline',
        'Feature importance analysis',
        'Interactive Jupyter notebook',
      ],
      liveLink: 'https://nbviewer.org/github/milauog/Diabetes-detection-by-ML/blob/main/Diabetes%20Prediction.ipynb',
      codeLink: 'https://github.com/milauog/Diabetes-detection-by-ML',
      hasImages: false,
      techStack: [
        { name: 'Scikit-learn', icon: <FaChartLine />, color: '249, 174, 88' },
        { name: 'Pandas', icon: <FaDatabase />, color: '19, 64, 106' },
        { name: 'NumPy', icon: <FaServer />, color: '119, 170, 221' },
      ],
    },
    {
      title: 'Image Enhancement',
      shortDescription: 'A tool to improve image quality using AI.',
      fullDescription:
        'An AI-driven tool for upscaling and refining images. This project implements various computer vision techniques to enhance image quality, reduce noise, and improve resolution.',
      languages: ['Python'],
      features: [
        'Noise reduction algorithms',
        'Super-resolution techniques',
        'Contrast enhancement',
        'Edge detection',
      ],
      liveLink: 'https://nbviewer.org/github/milauog/image-enhancement/blob/main/assignment%20%282%29.ipynb',
      codeLink: 'https://github.com/milauog/image-enhancement',
      hasImages: false,
      techStack: [
        { name: 'OpenCV', icon: <FaServer />, color: '0, 128, 0' },
        { name: 'TensorFlow', icon: <FaServer />, color: '255, 167, 38' },
        { name: 'Pillow', icon: <FaDatabase />, color: '100, 100, 100' },
      ],
    },
    {
      title: 'Previous Portfolio',
      shortDescription: 'My earlier portfolio with a minimalist design.',
      fullDescription:
        'A minimalist portfolio reflecting my early web development journey, featuring clean design principles, smooth animations, and responsive layout. This version focused on simplicity and readability.',
      languages: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Responsive design',
        'CSS animations',
        'Dark/light mode',
        'Project showcase',
      ],
      liveLink: '#',
      codeLink: 'https://github.com/milauog/previous-portfolio',
      hasImages: false,
      techStack: [
        { name: 'React', icon: <FaJs />, color: '97, 218, 251' },
        { name: 'CSS3', icon: <FaJs />, color: '21, 114, 182' },
        { name: 'JavaScript', icon: <FaJs />, color: '240, 219, 79' },
      ],
    },
    {
      title: 'Currency Converter',
      shortDescription: 'A tool to convert currencies in real-time.',
      fullDescription:
        'A sleek web app fetching live exchange rates for accurate currency conversions. The application connects to financial APIs to get up-to-date exchange rates and provides historical data visualization.',
      languages: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Real-time exchange rates',
        'Historical data charts',
        'Multiple currency support',
        'Offline caching',
      ],
      liveLink: 'https://currency-converter-41c0c.web.app/',
      codeLink: 'https://github.com/milauog/currency-converter-backend',
            images: ['currency1.png', 'currency2.png', 'currency3.png'],

      hasImages: true,
      techStack: [
        { name: 'ExchangeRate API', icon: <FaServer />, color: '100, 100, 100' },
        { name: 'Chart.js', icon: <FaChartLine />, color: '255, 99, 132' },
        { name: 'LocalStorage', icon: <FaDatabase />, color: '100, 100, 100' },
      ],
    },
  ];

  const openPopup = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closePopup = () => {
    setSelectedProject(null);
    setEnlargedImage(null);
    setCurrentImageIndex(0);
  };

  const handleImageClick = (image) => setEnlargedImage(image);

  const nextImage = () => {
    if (selectedProject && selectedProject.hasImages) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.hasImages) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="projects" className="projects-section" ref={projectsRef}>
      <div className="intro-section">
        
          
        
          <div className="experience-badge intro-animate">
            <svg className="progress-ring" width="100" height="100">
              <circle
                className="progress-ring__circle"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="6"
                fill="transparent"
                r="44"
                cx="50"
                cy="50"
              />
              <circle
                className="progress-ring__progress"
                stroke="url(#gradient)"
                strokeWidth="6"
                strokeDasharray="276"
                strokeDashoffset="83"
                fill="transparent"
                r="44"
                cx="50"
                cy="50"
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
              <span className="label">Years</span>
            </div>
          </div>
        
      </div>
      <div className="section-header">
        <span className="section-number">02</span>
        <h2 className="section-title">Featured Projects</h2>
        <div className="title-line"></div>
        <p className="section-subtitle">A showcase of my technical expertise and creativity</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => openPopup(project)}
            tabIndex="0"
            onKeyDown={(e) => e.key === 'Enter' && openPopup(project)}
          >
            <div className="project-image-container">
              {project.hasImages && project.images[0] ? (
                <img
                  src={require(`../../assets/${project.images[0]}`)}
                  alt={`${project.title} screenshot`}
                  className="project-image"
                />
              ) : (
                <div className="project-image-placeholder">
                  <FaCode className="placeholder-icon" />
                </div>
              )}
              <div className="project-overlay"></div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.shortDescription}</p>
              <div className="project-tags">
                {project.languages.map((lang, i) => (
                  <span key={i} className="project-tag">{lang}</span>
                ))}
              </div>
              <button className="project-link">
                <FaExternalLinkAlt /> View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal">
          <div className="modal-overlay" onClick={closePopup}></div>
          <div className="modal-content">
            <button className="modal-close" onClick={closePopup}>
              <FaTimes />
            </button>
            <div className="modal-header">
              <h3 className="modal-title">{selectedProject.title}</h3>
              <div className="modal-links">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href={selectedProject.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaCode /> Source Code
                </a>
              </div>
            </div>
            <div className="modal-body">
              {selectedProject.hasImages && selectedProject.images.length > 0 ? (
                <div className="modal-image-container">
                  <img
                    src={require(`../../assets/${selectedProject.images[currentImageIndex]}`)}
                    alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                    className="modal-image"
                    onClick={() => handleImageClick(require(`../../assets/${selectedProject.images[currentImageIndex]}`))}
                  />
                  {selectedProject.images.length > 1 && (
                    <div className="image-nav">
                      <button className="nav-button prev" onClick={prevImage}>
                        <FaArrowLeft />
                      </button>
                      <button className="nav-button next" onClick={nextImage}>
                        <FaArrowRight />
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="modal-image-container">
                  <div className="project-image-placeholder">
                    <FaCode className="placeholder-icon" />
                  </div>
                </div>
              )}
              <div className="modal-details">
                <div className="modal-section">
                  <h4>Description</h4>
                  <p>{selectedProject.fullDescription}</p>
                </div>
                <div className="modal-section">
                  <h4>Key Features</h4>
                  <ul className="features-list">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="feature-item">
                        <span className="feature-icon">▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="modal-section">
                  <h4>Tech Stack</h4>
                  <div className="tech-stack">
                    {selectedProject.techStack.map((tech, i) => (
                      <div key={i} className="tech-item" style={{ background: `rgba(${tech.color}, 0.1)` }}>
                        <span className="tech-icon" style={{ color: `rgb(${tech.color})` }}>
                          {tech.icon}
                        </span>
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {enlargedImage && (
        <div className="image-modal" onClick={() => setEnlargedImage(null)}>
          <img src={enlargedImage} alt="Enlarged project screenshot" className="enlarged-image" />
        </div>
      )}
    </section>
  );
};

export default Projects;