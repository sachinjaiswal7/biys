import React, { useState } from 'react';
import './Quotes.css';

const quotes = [
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis"
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "Trust yourself. You know more than you think you do.",
    author: "Benjamin Spock"
  }
];

const Quotes = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextQuote = () => {
    setActiveIndex((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setActiveIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <section id="quotes" className="quotes">
      <div className="quotes-background">
        <div className="quote-shape quote-shape-1"></div>
        <div className="quote-shape quote-shape-2"></div>
      </div>
      
      <div className="container">
        <span className="section-tag">Daily Inspiration</span>
        <h2 className="section-title">Words to <span className="accent">Live By</span></h2>
        
        <div className="quotes-carousel">
          <button className="carousel-btn prev" onClick={prevQuote} aria-label="Previous quote">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          
          <div className="quote-card">
            <div className="quote-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            <p className="quote-text">{quotes[activeIndex].text}</p>
            <span className="quote-author">— {quotes[activeIndex].author}</span>
          </div>
          
          <button className="carousel-btn next" onClick={nextQuote} aria-label="Next quote">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
        
        <div className="quote-indicators">
          {quotes.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quotes;
