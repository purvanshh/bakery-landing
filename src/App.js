import React, { useState } from 'react';
import Preloader from './components/ui/Preloader';
import GridBackground from './components/shared/GridBackground';
import Hero from './components/sections/Hero';
import Menu from './components/sections/Menu';
import OurStory from './components/sections/OurStory';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="app">
      {isLoading && (
        <Preloader
          onLoadComplete={handleLoadComplete}
          minDuration={5000}
        />
      )}

      <div className={`app-content ${isLoading ? 'app-content--hidden' : 'app-content--visible'}`}>
        <GridBackground />

        <main>
          <Hero />
          <Menu />
          <OurStory />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;

