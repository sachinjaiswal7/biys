import React from 'react';
import './Principles.css';

const principles = [
  {
    number: "01",
    title: "Know Your Worth",
    description: "Your value doesn't decrease based on someone's inability to see your worth. You are unique, capable, and deserving of success.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="5"/>
        <path d="M20 21a8 8 0 1 0-16 0"/>
      </svg>
    )
  },
  {
    number: "02",
    title: "Embrace Failures",
    description: "Every failure is a lesson in disguise. The most successful people are those who failed the most but never stopped trying.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    )
  },
  {
    number: "03",
    title: "Stay Consistent",
    description: "Small steps every day lead to big changes over time. Consistency is the bridge between goals and accomplishment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    )
  },
  {
    number: "04",
    title: "Trust The Process",
    description: "Growth takes time. Trust in your journey, be patient with yourself, and know that every step forward matters.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    )
  },
  {
    number: "05",
    title: "Surround Yourself Wisely",
    description: "You become the average of the five people you spend the most time with. Choose people who inspire and elevate you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  },
  {
    number: "06",
    title: "Take Action Now",
    description: "The best time to start was yesterday. The second best time is now. Don't let fear of imperfection hold you back.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    )
  }
];

const Principles = () => {
  return (
    <section id="principles" className="principles">
      <div className="container">
        <span className="section-tag">The Foundation</span>
        <h2 className="section-title">Six Principles of <span className="accent">Self-Belief</span></h2>
        <p className="section-subtitle">
          These guiding principles will help you build unshakeable confidence and achieve your greatest potential.
        </p>
        
        <div className="principles-grid">
          {principles.map((principle, index) => (
            <div key={index} className="principle-card">
              <div className="principle-number">{principle.number}</div>
              <div className="principle-icon">{principle.icon}</div>
              <h3 className="principle-title">{principle.title}</h3>
              <p className="principle-description">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;
