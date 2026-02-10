import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>
      
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <h1 className="hero-title">
          <span className="hero-title-line">Believe</span>
          <span className="hero-title-line accent">In Your Self</span>
        </h1>
        
        <p className="hero-subtitle">
          Your journey to greatness begins with a single belief — the belief in yourself. 
          Unlock your potential, embrace your dreams, and transform your life.
        </p>
        
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={scrollToAbout}>
            Discover More
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">∞</span>
            <span className="stat-label">Possibilities</span>
          </div>
          <div className="stat">
            <span className="stat-number">1</span>
            <span className="stat-label">You</span>
          </div>
          <div className="stat">
            <span className="stat-number">NOW</span>
            <span className="stat-label">The Time</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={scrollToAbout}>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
