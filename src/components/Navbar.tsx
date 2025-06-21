import React, { useState } from 'react';

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
      color: 'text-dark'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/archit-singh-b-155681310/', 
      icon: 'fab fa-linkedin',
      color: 'text-primary'
    },
    { 
      name: 'Email', 
      url: 'mailto:architbenipal77@gmail.com', 
      icon: 'fas fa-envelope',
      color: 'text-success'
    }
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId as 'home' | 'about' | 'services' | 'contact');
    setIsMenuOpen(false); // Close mobile menu when nav item is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center w-100">
          {/* Brand */}
          <span className="navbar-brand fw-bold text-primary mb-0">
            <i className="fas fa-code me-2"></i>
            Archit Benipal
          </span>

          {/* Desktop Navigation - Always visible on large screens */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            <div className="d-flex gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`btn btn-sm ${
                    activeSection === item.id 
                      ? 'btn-primary' 
                      : 'btn-outline-primary'
                  }`}
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
                  className={`btn btn-sm ${link.color} border-0`}
                  title={link.name}
                  style={{ background: 'transparent' }}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button - Only visible on small screens */}
          <button
            className="btn btn-outline-primary d-lg-none"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Mobile Menu - Collapsible */}
        {isMenuOpen && (
          <div className="d-lg-none mt-3 pb-3">
            <div className="d-flex flex-column gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`btn text-start ${
                    activeSection === item.id 
                      ? 'btn-primary' 
                      : 'btn-outline-primary'
                  }`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <i className={`${item.icon} me-2`}></i>
                  {item.label}
                </button>
              ))}
              
              <hr className="my-2" />
              
              <div className="d-flex justify-content-center gap-2">
                <a
                  href="/resume.pdf"
                  className="btn btn-warning btn-sm"
                  title="Download Resume"
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
                    className={`btn btn-sm ${link.color}`}
                    title={link.name}
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