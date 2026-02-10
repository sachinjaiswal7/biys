import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">BIYS</span>
              <span className="logo-tagline">Believe In Your Self</span>
            </div>
            <p className="footer-description">
              Inspiring self-belief and personal growth, one person at a time. 
              Remember: You have within you right now, everything you need to deal 
              with whatever the world throws at you.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#quotes">Inspiration</a></li>
                <li><a href="#principles">Principles</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h4>Connect</h4>
              <ul>
                <li><a href="mailto:hello@biys.co.in">hello@biys.co.in</a></li>
                <li><a href="https://biys.co.in">biys.co.in</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} BIYS - Believe In Your Self. All rights reserved.
          </p>
          <p className="footer-quote">
            "The only limit to our realization of tomorrow is our doubts of today."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
