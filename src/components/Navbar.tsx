import React from 'react';
import GooeyNav from './GooeyNav';

type Section = 'home' | 'about' | 'services' | 'contact';

interface NavbarProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  // Navigation items mapped to your sections
  const items = [
    { label: "Home", section: "home" },
    { label: "About", section: "about" },
    { label: "Services", section: "services" },
    { label: "Contact", section: "contact" },
  ];

  // Find the active index based on current section
  const activeIndex = items.findIndex(item => item.section === activeSection);

  const handleSectionChange = (section: string) => {
    setActiveSection(section as Section);
  };

  return (
    <div style={{ 
      height: '70px', 
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(25, 25, 25, 0.95) 100%)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 2px 20px rgba(0,0,0,0.3)'
    }}>
      <GooeyNav
        items={items}
        particleCount={12}
        particleDistances={[70, 8]}
        particleR={80}
        activeIndex={activeIndex >= 0 ? activeIndex : 0}
        animationTime={500}
        timeVariance={200}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        onSectionChange={handleSectionChange}
      />
    </div>
  );
};

export default Navbar;