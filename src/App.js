import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Quotes from './components/Quotes';
import Principles from './components/Principles';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Quotes />
      <Principles />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
