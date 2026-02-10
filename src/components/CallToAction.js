import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section id="cta" className="cta">
      <div className="cta-background">
        <div className="cta-shape cta-shape-1"></div>
        <div className="cta-shape cta-shape-2"></div>
        <div className="cta-shape cta-shape-3"></div>
      </div>
      
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">
            Your Journey Starts <span className="accent">Today</span>
          </h2>
          
          <p className="cta-text">
            Every master was once a disaster. Every expert was once a beginner. 
            The only difference between them and others is that they believed in themselves 
            enough to start — and keep going.
          </p>
          
          <div className="cta-message">
            <div className="message-card">
              <p>
                "I believe in <strong>myself</strong>. I believe in my <strong>dreams</strong>. 
                I believe in my <strong>potential</strong>. Today, I choose to take one step 
                closer to the person I want to become."
              </p>
              <span className="message-label">— Your Daily Affirmation</span>
            </div>
          </div>
          
          <div className="cta-actions">
            <a href="mailto:hello@biys.co.in" className="btn btn-primary">
              Get In Touch
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
