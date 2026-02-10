import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <span className="section-tag">About BIYS</span>
            <h2 className="section-title">What Does It Mean to <span className="accent">Believe In Your Self?</span></h2>
            
            <p className="about-text">
              <strong>BIYS</strong> — <em>Believe In Your Self</em> — is more than just a phrase. 
              It's a philosophy, a way of life, and the foundation upon which dreams are built and achieved.
            </p>
            
            <p className="about-text">
              Self-belief is the quiet voice within you that says "I can" when the world says "you can't." 
              It's the courage to take the first step, the resilience to keep going when things get tough, 
              and the wisdom to know that your worth isn't determined by others' opinions.
            </p>

            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <h3>Discover Your Worth</h3>
                <p>Recognize the unique value you bring to the world</p>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                  </svg>
                </div>
                <h3>Embrace Change</h3>
                <p>Transform challenges into stepping stones for growth</p>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h3>Achieve Dreams</h3>
                <p>Turn your aspirations into reality, one step at a time</p>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="visual-card">
              <div className="visual-inner">
                <span className="visual-letter">B</span>
                <span className="visual-word">Believe</span>
              </div>
              <div className="visual-inner">
                <span className="visual-letter">I</span>
                <span className="visual-word">In</span>
              </div>
              <div className="visual-inner">
                <span className="visual-letter">Y</span>
                <span className="visual-word">Your</span>
              </div>
              <div className="visual-inner">
                <span className="visual-letter">S</span>
                <span className="visual-word">Self</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
