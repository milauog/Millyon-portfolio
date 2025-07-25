import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace these with your actual EmailJS service ID, template ID, and user ID
    const serviceID = 'service_tsymmo9';
    const templateID = 'template_zcqvmo5';
    const userID = 'OFsZ52lSkeeQKCjhV';

    emailjs.send(serviceID, templateID, {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
      to_email: 'tilahunmillyon@gmail.com'
    }, userID)
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.error('Failed to send email:', err);
      alert('Failed to send message. Please try again later.');
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  return (
    <div id="contact" className="section contact">
      <h2>Contact Me</h2>
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
        <button type="submit" className="form-button" disabled={isSending}>
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/millyon-tilahun/" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaLinkedin className="social-icon" />
          <span>LinkedIn</span>
        </a>
        <a href="mailto:tilahunmillyon@gmail.com" className="social-link">
          <FaEnvelope className="social-icon" />
          <span>Email</span>
        </a>
        <a href="https://github.com/milauog" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaGithub className="social-icon" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;