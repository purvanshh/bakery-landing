import React from 'react';
import GridBackground from './components/shared/GridBackground';
import Hero from './components/sections/Hero';
import Menu from './components/sections/Menu';
import OurStory from './components/sections/OurStory';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <GridBackground />

      <main>
        <Hero />
        <Menu />
        <OurStory />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
