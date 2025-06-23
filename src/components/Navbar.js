import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import profilePhoto from '../assets/profile-photo.JPG';

function Navbar() {
  const [isPhotoExpanded, setIsPhotoExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlePhotoClick = () => {
    setIsPhotoExpanded(!isPhotoExpanded);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div
          className={`navbar-photo-container ${isPhotoExpanded ? 'expanded' : ''}`}
          onClick={handlePhotoClick}
        >
          <img src={profilePhoto} alt="Millyon Tilahun" className="navbar-photo" />
        </div>
        <h1>
          <span className="portfolio-text">P</span>
          <span className="portfolio-text">o</span>
          <span className="portfolio-text">r</span>
          <span className="portfolio-text">t</span>
          <span className="portfolio-text">f</span>
          <span className="portfolio-text">o</span>
          <span className="portfolio-text">l</span>
          <span className="portfolio-text">i</span>
          <span className="portfolio-text">o</span>
        </h1>
      </div>
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>About Me</Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</Link>
        </li>
        <li>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>Resume</a>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;