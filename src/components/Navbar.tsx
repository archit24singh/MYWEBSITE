import React, { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: 'home' | 'about' | 'services' | 'contact') => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: 'fas fa-home' },
    { id: 'about', label: 'About Me', icon: 'fas fa-user' },
    { id: 'services', label: 'Services', icon: 'fas fa-cogs' },
    { id: 'contact', label: 'Contact Me', icon: 'fas fa-envelope' }
  ];

  const socialLinks: SocialLink[] = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/archit24singh', 
      icon: 'fab fa-github',
      color: 'text-white'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/archit-singh-b-155681310/', 
      icon: 'fab fa-linkedin',
      color: 'text-info'
    },
    { 
      name: 'Email', 
      url: 'mailto:architbenipal77@gmail.com', 
      icon: 'fas fa-envelope',
      color: 'text-warning'
    }
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId as 'home' | 'about' | 'services' | 'contact');
    setIsMenuOpen(false);
  };

  const handleBrandClick = () => {
    setActiveSection('home');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className="navbar navbar-expand-lg sticky-top"
      style={{
        background: '#000000',
        border: 'none',
        borderBottom: 'none',
        boxShadow: 'none',
        borderRadius: '0',
        padding: '0.5rem 0'
      }}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center w-100">
          {/* Brand - Clickable to go home */}
          <button
            className="navbar-brand fw-bold mb-0 border-0 bg-transparent p-0 text-white"
            style={{ 
              cursor: 'pointer',
              textShadow: 'none',
              fontSize: '1.5rem',
              fontWeight: '700',
              filter: 'none'
            }}
            onClick={handleBrandClick}
          >
            <i className="fas fa-code me-2"></i>
            Archit Benipal
          </button>

          {/* Desktop Navigation - Always visible on large screens */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            <div className="d-flex gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`btn btn-sm ${
                    activeSection === item.id 
                      ? 'btn-warning' 
                      : 'btn-outline-light'
                  }`}
                  style={{
                    textShadow: 'none',
                    fontWeight: '600',
                    border: activeSection === item.id ? 'none' : '2px solid rgba(255,255,255,0.8)',
                    backgroundColor: activeSection === item.id ? '#ffc107' : 'transparent',
                    color: activeSection === item.id ? '#000' : '#fff',
                    boxShadow: 'none'
                  }}
                  onClick={() => handleNavClick(item.id)}
                >
                  <i className={`${item.icon} me-1`}></i>
                  {item.label}
                </button>
              ))}
            </div>
            
            <div className="d-flex gap-2 align-items-center">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm border-0 text-white"
                  title={link.name}
                  style={{ 
                    background: 'transparent',
                    textShadow: 'none',
                    fontSize: '1.1rem',
                    border: '1px solid rgba(255,255,255,0.6)',
                    borderRadius: '8px'
                  }}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button - Only visible on small screens */}
          <button
            className="btn btn-outline-light d-lg-none"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            style={{
              textShadow: 'none',
              border: '2px solid rgba(255,255,255,0.8)',
              fontWeight: '600',
              backgroundColor: 'transparent'
            }}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Mobile Menu - Collapsible */}
        {isMenuOpen && (
          <div 
            className="d-lg-none mt-3 pb-3"
            style={{
              background: 'rgba(0, 0, 0, 0.9)',
              backdropFilter: 'blur(20px)',
              borderRadius: '15px',
              padding: '20px',
              marginTop: '15px',
              border: '1px solid rgba(255,255,255,0.3)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
            }}
          >
            <div className="d-flex flex-column gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`btn text-start ${
                    activeSection === item.id 
                      ? 'btn-warning' 
                      : 'btn-outline-light'
                  }`}
                  style={{
                    textShadow: 'none',
                    fontWeight: '600',
                    backgroundColor: activeSection === item.id ? '#ffc107' : 'transparent',
                    backdropFilter: 'none',
                    border: activeSection === item.id ? 'none' : '1px solid rgba(255,255,255,0.4)'
                  }}
                  onClick={() => handleNavClick(item.id)}
                >
                  <i className={`${item.icon} me-2`}></i>
                  {item.label}
                </button>
              ))}
              
              <hr className="my-2 border-light opacity-50" />
              
              <div className="d-flex justify-content-center gap-2">
                <a
                  href="/resume.pdf"
                  className="btn btn-warning btn-sm"
                  title="Download Resume"
                  style={{ 
                    fontWeight: '600',
                    boxShadow: '0 0 15px rgba(255, 193, 7, 0.3)'
                  }}
                >
                  <i className="fas fa-download me-1"></i>
                  Resume
                </a>
                
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm text-white"
                    title={link.name}
                    style={{
                      textShadow: 'none',
                      backgroundColor: 'transparent',
                      backdropFilter: 'none',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    <i className={link.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;