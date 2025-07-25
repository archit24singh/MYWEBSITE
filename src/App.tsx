import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

type Section = 'home' | 'about' | 'services' | 'contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home setActiveSection={setActiveSection} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services setActiveSection={setActiveSection} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="App">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="min-h-screen" style={{ paddingTop: '70px' }}>
        {renderSection()}
      </main>
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
};

export default App;