import React, { useState } from 'react';
import './Projects.css';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaExternalLinkAlt, FaCode, FaServer, FaDatabase, FaRobot, FaChartLine, FaJava, FaAngular, FaLock } from 'react-icons/fa';
import { SiSpringboot, SiMysql } from 'react-icons/si';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const projects = [
    {
      title: "Inventory Management System",
      shortDescription: "Full-stack inventory management with authentication.",
      fullDescription:
        "A comprehensive inventory management system with user authentication, built with Angular (NG-ZORRO) for the frontend and Spring Boot for the backend. Features include role-based access control, product management, and reporting.",
      languages: ["JavaScript", "Java"],
      features: [
        "User authentication & authorization",
        "Role-based access control",
        "Product CRUD operations",
        "Inventory tracking",
        "Responsive dashboard",
        "JWT token security"
      ],
      liveLink: "#", // Add your live link if available
      codeLink: "https://github.com/milauog/inventory-management-backend",
      hasImages: false,
      techStack: [
        { name: "Angular", icon: <FaAngular /> },
        { name: "NG-ZORRO", icon: <FaAngular /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "JWT Auth", icon: <FaLock /> }
      ]
    },
    {
      title: "Online Code Editor",
      shortDescription: "A web-based editor for coding on the go.",
      fullDescription:
        "This Online Code Editor is a versatile tool allowing users to write, run, and test code directly in the browser. Built with a focus on simplicity and performance, it supports real-time previews and syntax highlighting.",
      languages: ["HTML", "CSS", "JavaScript"],
      features: [
        "Real-time code execution",
        "Syntax highlighting",
        "Responsive design",
        "Multiple file support"
      ],
      liveLink: "https://code-editor-k6wd.vercel.app/",
      codeLink: "https://github.com/milauog/code-editor",
      images: ["code-editor1.png", "code-editor-2.png", "code-editor-3.png"],
      hasImages: true
    },
    {
      title: "Diabetes Prediction",
      shortDescription: "A machine learning model to predict diabetes risk.",
      fullDescription:
        "A cutting-edge ML project predicting diabetes risk using health data. This model was trained on a comprehensive dataset and achieves 85% accuracy in predicting diabetes risk factors.",
      languages: ["Python"],
      features: [
        "Machine learning model (Random Forest)",
        "Data preprocessing pipeline",
        "Feature importance analysis",
        "Interactive Jupyter notebook"
      ],
      liveLink: "https://nbviewer.org/github/milauog/Diabetes-detection-by-ML/blob/main/Diabetes%20Prediction.ipynb",
      codeLink: "https://github.com/milauog/Diabetes-detection-by-ML",
      hasImages: false,
      techStack: [
        { name: "Scikit-learn", icon: <FaChartLine /> },
        { name: "Pandas", icon: <FaDatabase /> },
        { name: "NumPy", icon: <FaServer /> }
      ]
    },
    {
      title: "Image Enhancement",
      shortDescription: "A tool to improve image quality using AI.",
      fullDescription:
        "An AI-driven tool for upscaling and refining images. This project implements various computer vision techniques to enhance image quality, reduce noise, and improve resolution.",
      languages: ["Python"],
      features: [
        "Noise reduction algorithms",
        "Super-resolution techniques",
        "Contrast enhancement",
        "Edge detection"
      ],
      liveLink: "https://nbviewer.org/github/milauog/image-enhancement/blob/main/assignment%20%282%29.ipynb",
      codeLink: "https://github.com/milauog/image-enhancement",
      hasImages: false,
      techStack: [
        { name: "OpenCV", icon: <FaRobot /> },
        { name: "TensorFlow", icon: <FaServer /> },
        { name: "Pillow", icon: <FaDatabase /> }
      ]
    },
    {
      title: "Previous Portfolio",
      shortDescription: "My earlier portfolio with a minimalist design.",
      fullDescription:
        "A minimalist portfolio reflecting my early web development journey, featuring clean design principles, smooth animations, and responsive layout. This version focused on simplicity and readability.",
      languages: ["HTML", "CSS", "JavaScript"],
      features: [
        "Responsive design",
        "CSS animations",
        "Dark/light mode",
        "Project showcase"
      ],
      liveLink: "https://your-previous-portfolio-live-link.com",
      codeLink: "https://github.com/milauog/previous-portfolio",
      hasImages: false,
      techStack: [
        { name: "React", icon: <FaCode /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> }
      ]
    },
    {
      title: "Currency Converter",
      shortDescription: "A tool to convert currencies in real-time.",
      fullDescription:
        "A sleek web app fetching live exchange rates for accurate currency conversions. The application connects to financial APIs to get up-to-date exchange rates and provides historical data visualization.",
      languages: ["HTML", "CSS", "JavaScript"],
      features: [
        "Real-time exchange rates",
        "Historical data charts",
        "Multiple currency support",
        "Offline caching"
      ],
      liveLink: "https://your-currency-converter-live-link.com",
      codeLink: "https://github.com/milauog/currency-converter",
      hasImages: false,
      techStack: [
        { name: "ExchangeRate API", icon: <FaServer /> },
        { name: "Chart.js", icon: <FaChartLine /> },
        { name: "LocalStorage", icon: <FaDatabase /> }
      ]
    },
  ];

   const languageIcons = {
    HTML: { icon: <FaHtml5 className="language-icon" />, label: "HTML" },
    CSS: { icon: <FaCss3Alt className="language-icon" />, label: "CSS" },
    JavaScript: { icon: <FaJs className="language-icon" />, label: "JavaScript" },
    Python: { icon: <FaPython className="language-icon" />, label: "Python" },
    Java: { icon: <FaJava className="language-icon" />, label: "Java" },
  };

  const openPopup = (project) => setSelectedProject(project);
  const closePopup = () => {
    setSelectedProject(null);
    setEnlargedImage(null);
  };

  return (
    <div id="projects" className="section projects">
      <h2 className="projects-title">My Featured Projects</h2>
      <p className="projects-subtitle">Showcasing my skills and experience</p>

      <ul className="project-list">
        {projects.map((project, index) => (
          <li
            key={index}
            className="project-card"
            onClick={() => openPopup(project)}
            tabIndex="0"
            onKeyDown={(e) => e.key === 'Enter' && openPopup(project)}
          >
            <div className="card-header">
              <strong>{project.title}</strong>
            </div>
            <p className="card-description">{project.shortDescription}</p>
            <div className="tech-icons">
              {project.languages.map((lang, i) => (
                <span key={i} className="tech-icon" title={languageIcons[lang].label}>
                  {languageIcons[lang].icon}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>

      {selectedProject && (
        <div className="project-popup-overlay" onClick={closePopup}>
          <div className="project-popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>×</button>
            <h3>{selectedProject.title}</h3>
            <p className="popup-description">{selectedProject.fullDescription}</p>
            
            {selectedProject.hasImages ? (
              <div className="popup-image-grid">
                {selectedProject.images.map((image, i) => (
                  <img
                    key={i}
                    src={require(`../../assets/${image}`)}
                    alt={`${selectedProject.title} screenshot ${i + 1}`}
                    className="project-screenshot"
                    onClick={() => setEnlargedImage(require(`../../assets/${image}`))}
                  />
                ))}
              </div>
            ) : (
              <div className="project-details-container">
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {selectedProject.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-tech-stack">
                  <h4>Technology Stack:</h4>
                  <div className="tech-stack-icons">
                    {selectedProject.techStack?.map((tech, i) => (
                      <div key={i} className="tech-stack-item">
                        <span className="tech-stack-icon">{tech.icon}</span>
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            <div className="popup-buttons">
              <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="popup-button view-button">
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a href={selectedProject.codeLink} target="_blank" rel="noopener noreferrer" className="popup-button code-button">
                <FaCode /> Source Code
              </a>
            </div>
          </div>
        </div>
      )}

      {enlargedImage && (
        <div className="enlarged-image-overlay" onClick={() => setEnlargedImage(null)}>
          <img src={enlargedImage} alt="Enlarged project screenshot" className="enlarged-image" />
        </div>
      )}
    </div>
  );
}

export default Projects;