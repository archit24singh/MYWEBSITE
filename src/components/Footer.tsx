import React from 'react';

interface FooterProps {
  setActiveSection?: (section: 'home' | 'about' | 'services' | 'contact') => void;
}

const Footer: React.FC<FooterProps> = ({ setActiveSection }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/archit24singh', 
      icon: 'fab fa-github',
      color: 'text-light hover:text-gray-300'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/archit-b-155681310/', 
      icon: 'fab fa-linkedin',
      color: 'text-light hover:text-blue-400'
    }
  ];

  const quickLinks = [
    { name: 'About', section: 'about' as const },
    { name: 'Services', section: 'services' as const },
    { name: 'Contact', section: 'contact' as const }
  ];

  const skills = [
    'React', 'Angular', 'TypeScript', 'Node.js', 'Python', 'AWS', 'MongoDB', 'PostgreSQL'
  ];

  const handleQuickLinkClick = (section: 'home' | 'about' | 'services' | 'contact') => {
    if (setActiveSection) {
      setActiveSection(section);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">
              <i className="fas fa-code me-2 text-primary"></i>
              Archit Benipal
            </h5>
            <p className="text-light mb-3">
              Full Stack Developer passionate about creating innovative web solutions 
              and exploring the intersection of software engineering and AI.
            </p>
            <div className="d-flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`fs-5 social-link ${link.color}`}
                  title={link.name}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold mb-3 text-primary">Pages</h6>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <button
                    onClick={() => handleQuickLinkClick(link.section)}
                    className="btn btn-link text-light text-decoration-none p-0 text-start"
                    style={{ background: 'none', border: 'none' }}
                  >
                    <i className="fas fa-chevron-right me-2 small"></i>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-bold mb-3 text-primary">Technologies</h6>
            <div className="d-flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="badge bg-outline-light text-light border border-light"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-3">
              <small className="text-muted">
                Always learning and exploring new technologies
              </small>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-bold mb-3 text-primary">Get In Touch</h6>
            <div className="contact-info">
              <div className="mb-2">
                <i className="fas fa-envelope me-2 text-primary"></i>
                <a 
                  href="mailto:architbenipal77@gmail.com" 
                  className="text-light text-decoration-none"
                >
                  architbenipal77@gmail.com
                </a>
              </div>
              <div className="mb-2">
                <i className="fas fa-map-marker-alt me-2 text-primary"></i>
                <span className="text-light">Houston, United States</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 border-secondary" />

        {/* Bottom Section */}
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0 text-light">
              © 2025 Archit Benipal. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="d-flex justify-content-md-end gap-3">
              <a href="#privacy" className="text-muted text-decoration-none small">
                Privacy Policy
              </a>
              <a href="#terms" className="text-muted text-decoration-none small">
                Terms of Service
              </a>
              <a href="#sitemap" className="text-muted text-decoration-none small">
                Sitemap
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-4">
          <button 
            className="btn btn-outline-primary btn-sm"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <i className="fas fa-chevron-up me-2"></i>
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;