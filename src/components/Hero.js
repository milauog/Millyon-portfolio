import React from 'react';
import './Hero.css';

function Hero() {
  const nameLetters = "Millyon Tilahun".split('').map((letter, index) => (
    <span key={index} style={{ '--i': index + 1 }}>{letter}</span>
  ));

  const titleWords = "Full Stack Web Developer".split(' ').map((word, index) => (
    <span key={index} style={{ '--i': index + 1 }}>
      {word.split('').map((letter, letterIndex) => (
        <span key={letterIndex}>{letter}</span>
      ))}
      <span> </span> {/* Add space between words */}
    </span>
  ));

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-intro">
          {'Hi, my name is'.split('').map((letter, index) => (
            <span key={index} style={{ '--i': index + 1 }}>{letter}</span>
          ))}
        </div>
        <h1 className="hero-name">
          <span className="code-tag">&lt;</span>
          {nameLetters}
          <span className="code-tag">&gt;</span>
        </h1>
        <h2 className="hero-title">
          <span className="code-bracket">{'"'}</span>
          {titleWords}
          <span className="code-bracket">{'"'}</span>
        </h2>
        <div className="hero-subtitle">Crafting Innovative Digital Solutions</div>
      </div>
    </div>
  );
}

export default Hero;