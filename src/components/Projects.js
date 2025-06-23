import React, { useState } from 'react';
import './Projects.css';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import codeEditor1 from '../assets/code editor 1.PNG';
import codeEditor2 from '../assets/code editor 2.PNG';
import codeEditor3 from '../assets/code editor 3.PNG';
import profilePhoto from '../assets/profile-photo.JPG';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const projects = [
    {
      title: "Online Code Editor",
      shortDescription: "A web-based editor for coding on the go.",
      fullDescription: "This Online Code Editor is a versatile tool allowing users to write, run, and test code directly in the browser. Built with a focus on simplicity and performance, it supports real-time previews.",
      languages: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://code-editor-4x37oc0s9-millyons-projects.vercel.app",
      codeLink: "https://github.com/milauog/code-editor",
      images: [codeEditor1, codeEditor2, codeEditor3],
    },
    {
      title: "Diabetes Prediction",
      shortDescription: "A machine learning model to predict diabetes risk.",
      fullDescription: "A cutting-edge ML project predicting diabetes risk using health data. Powered by Python and Scikit-learn, it offers precise insights with a sleek interface.",
      languages: ["Python"],
      liveLink: "https://nbviewer.org/github/milauog/Diabetes-detection-by-ML/blob/main/Diabetes%20Prediction.ipynb",
      codeLink: "https://github.com/milauog/Diabetes-detection-by-ML",
      images: [profilePhoto, profilePhoto, profilePhoto],
    },
    {
      title: "Image Enhancement",
      shortDescription: "A tool to improve image quality using AI.",
      fullDescription: "An AI-driven tool for upscaling and refining images. Built with Python, OpenCV, and TensorFlow, it delivers professional-grade enhancements.",
      languages: ["Python"],
      liveLink: "https://nbviewer.org/github/milauog/image-enhancement/blob/main/assignment%20%282%29.ipynb",
      codeLink: "https://github.com/milauog/image-enhancement",
      images: [profilePhoto, profilePhoto, profilePhoto],
    },
    {
      title: "Previous Portfolio",
      shortDescription: "My earlier portfolio with a minimalist design.",
      fullDescription: "A minimalist portfolio reflecting my early web development journey, crafted with clean design and smooth transitions.",
      languages: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://your-previous-portfolio-live-link.com",
      codeLink: "https://github.com/milauog/previous-portfolio",
      images: [profilePhoto, profilePhoto, profilePhoto],
    },
    {
      title: "Currency Converter",
      shortDescription: "A tool to convert currencies in real-time.",
      fullDescription: "A sleek web app fetching live exchange rates for accurate currency conversions. Ideal for travelers and finance enthusiasts.",
      languages: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://your-currency-converter-live-link.com",
      codeLink: "https://github.com/milauog/currency-converter",
      images: [profilePhoto, profilePhoto, profilePhoto],
    },
  ];

  const languageIcons = {
    HTML: { icon: <FaHtml5 className="language-icon" />, label: "HTML" },
    CSS: { icon: <FaCss3Alt className="language-icon" />, label: "CSS" },
    JavaScript: { icon: <FaJs className="language-icon" />, label: "JavaScript" },
    Python: { icon: <FaPython className="language-icon" />, label: "Python" },
  };

  const openPopup = (project) => {
    setSelectedProject(project);
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.style.display = 'none';
      navbar.setAttribute('aria-hidden', 'true');
    }
  };

  const closePopup = () => {
    setSelectedProject(null);
    setEnlargedImage(null);
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.style.display = '';
      navbar.setAttribute('aria-hidden', 'false');
    }
  };

  const openEnlargedImage = (image) => {
    setEnlargedImage(image);
  };

  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };

  return (
    <div id="projects" className="section projects">
      <h2>My Projects</h2>
      <ul className="project-list">
        {projects.map((project, index) => (
          <li
            key={index}
            className="project-item"
            onClick={() => openPopup(project)}
            tabIndex="0"
            onKeyDown={(e) => e.key === 'Enter' && openPopup(project)}
          >
            <strong>{project.title}</strong>
            <p className="project-description">{project.shortDescription}</p>
          </li>
        ))}
      </ul>

      {selectedProject && (
        <div className="project-popup-overlay" onClick={closePopup}>
          <div className="project-popup" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-button"
              onClick={closePopup}
              aria-label="Close project modal"
            >
              ×
            </button>
            <h3>{selectedProject.title}</h3>
            <div className="popup-content">
              <div className="popup-text-container">
                <p className="popup-description">{selectedProject.fullDescription}</p>
              </div>
              <div className="popup-image-container">
                <div className="popup-image-grid">
                  {selectedProject.images.map((image, index) => (
                    <div key={index} className="image-wrapper">
                      <div className="image-loading-spinner"></div>
                      <img
                        src={image}
                        alt={`${selectedProject.title} screenshot ${index + 1}`}
                        className="project-screenshot"
                        onClick={() => openEnlargedImage(image)}
                        loading="lazy"
                      />
                      <p className="image-caption">Screenshot {index + 1}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="language-section">
                <h4>Languages Used</h4>
                <div className="language-tags">
                  {selectedProject.languages.map((lang, index) => (
                    <span
                      key={index}
                      className="language-tag"
                      title={languageIcons[lang].label}
                    >
                      {languageIcons[lang].icon}
                      <span className="language-label">{languageIcons[lang].label}</span>
                    </span>
                  ))}
                </div>
              </div>
              <div className="popup-buttons">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="popup-button view-button"
                  aria-label="View project live demo"
                  title="View live project"
                >
                  <FaExternalLinkAlt className="button-icon" />
                  View Project
                </a>
                <a
                  href={selectedProject.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="popup-button code-button"
                  aria-label="View project source code"
                  title="View source code"
                >
                  <FaCode className="button-icon" />
                  Access Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {enlargedImage && (
        <div className="enlarged-image-overlay" onClick={closeEnlargedImage}>
          <div className="enlarged-image-container">
            <button
              className="close-button"
              onClick={closeEnlargedImage}
              aria-label="Close enlarged image"
            >
              ×
            </button>
            <img
              src={enlargedImage}
              alt="Enlarged project screenshot"
              className="enlarged-image"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;