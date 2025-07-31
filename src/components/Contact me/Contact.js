// components/Contact.js (Enhanced)
import React, { useState, useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = ({ setActiveSection }) => {
  const contactRef = useRef();
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('contact');
        }
      },
      { threshold: 0.5 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, [setActiveSection]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.send(
      'service_tsymmo9', 
      'template_zcqvmo5', 
      {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
        to_email: 'tilahunmillyon@gmail.com'
      }, 
      'OFsZ52lSkeeQKCjhV'
    )
    .then(() => {
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 3000);
    })
    .catch(() => {
      alert('Failed to send message. Please try again later.');
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  return (
    <section id="contact" className="contact-section" ref={contactRef}>
      <div className="section-header">
        <span className="section-number">04</span>
        <h2 className="section-title">Get In Touch</h2>
        <div className="title-line"></div>
      </div>
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button 
            type="submit" 
            className="submit-button"
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send Message'}
            <span className="button-border"></span>
          </button>
          {isSent && (
            <div className="success-message">
              Message sent successfully!
            </div>
          )}
        </form>
        <div className="social-links">
          <a 
            href="https://www.linkedin.com/in/millyon-tilahun/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
          >
            <FaLinkedin className="social-icon" />
            <span>LinkedIn</span>
          </a>
          <a 
            href="mailto:tilahunmillyon@gmail.com" 
            className="social-link"
          >
            <FaEnvelope className="social-icon" />
            <span>Email</span>
          </a>
          <a 
            href="https://github.com/milauog" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
          >
            <FaGithub className="social-icon" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;