import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import profilePhoto from '../../assets/profile-photo.jpg';

function Navbar({ setActiveSection }) {
  const [isPhotoExpanded, setIsPhotoExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const navbarRef = useRef(null);

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'expertise', 'education', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-10% 0px -10% 0px' }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, [setActiveSection]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handlePhotoClick = () => {
    setIsPhotoExpanded(!isPhotoExpanded);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar animate-on-load" ref={navbarRef}>
      <div
        className="particle-background"
        style={{
          transform: `translate(${mousePos.x * 0.01}px, ${mousePos.y * 0.01}px)`,
        }}
      ></div>
      <div className="navbar-brand">
        <div
          className={`navbar-photo-container ${isPhotoExpanded ? 'expanded' : ''}`}
          onClick={handlePhotoClick}
          role="button"
          aria-label="Toggle profile photo size"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handlePhotoClick()}
        >
          <img src={profilePhoto} alt="Millyon Tilahun" className="navbar-photo" />
          <div className="particle-burst"></div>
          <span className="photo-tooltip">Click to {isPhotoExpanded ? 'shrink' : 'expand'}</span>
        </div>
        <h1 className="navbar-title">Portfolio</h1>
      </div>
      <button
        className={`hamburger ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
        <div className="hamburger-trail"></div>
      </button>
      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        {[
          { to: 'about', label: 'About Me' },
          { to: 'projects', label: 'Projects' },
          { to: 'resume', label: 'Resume', href: '/resume.pdf', external: true },
          { to: 'contact', label: 'Contact Me' },
        ].map((link, index) => (
          <li key={index} className="nav-item animate-on-load" style={{ '--delay': `${index * 0.1}s` }}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
                onClick={toggleMenu}
              >
                {link.label}
                <div className="ripple-effect"></div>
              </a>
            ) : (
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className="nav-link"
                activeClass="active"
                spy={true}
                onClick={toggleMenu}
              >
                {link.label}
                <div className="ripple-effect"></div>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;