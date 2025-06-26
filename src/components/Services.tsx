import React, { useState } from 'react';

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
  technologies: string[];
  detailedDescription: string[];
  benefits: string[];
  deliverables: string[];
}

interface ServicesProps {
  setActiveSection: (section: 'home' | 'about' | 'services' | 'contact') => void;
}

const Services: React.FC<ServicesProps> = ({ setActiveSection }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      title: "Full-Stack Web Development",
      description: "Complete web application development from frontend to backend, including database design and deployment.",
      icon: "fas fa-globe",
      features: [
        "Responsive web design",
        "Modern JavaScript frameworks (React, Angular)",
        "Backend API development",
        "Database design and optimization",
        "Cloud deployment and hosting",
        "Performance optimization"
      ],
      technologies: ["React", "Angular", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "AWS"],
      detailedDescription: [
        "I provide end-to-end web application development services, from initial concept to deployment and maintenance.",
        "My approach focuses on creating scalable, maintainable, and high-performance applications that grow with your business.",
        "I work with modern technologies and follow industry best practices to ensure your application is secure, fast, and user-friendly.",
        "Each project includes thorough testing, documentation, and deployment to production environments."
      ],
      benefits: [
        "Modern, responsive design that works on all devices",
        "Scalable architecture that grows with your business",
        "High-performance applications with optimized load times",
        "SEO-friendly structure for better search rankings",
        "Secure coding practices and data protection",
        "Cross-browser compatibility and accessibility compliance"
      ],
      deliverables: [
        "Complete source code with documentation",
        "Responsive web application",
        "Database schema and setup",
        "API documentation",
        "Deployment guides and scripts",
        "30 days post-launch support"
      ]
    },
    {
      title: "Healthcare Software Solutions",
      description: "Specialized medical billing platforms and healthcare management systems with HIPAA compliance.",
      icon: "fas fa-heartbeat",
      features: [
        "Medical billing platforms",
        "Patient portal development",
        "HIPAA compliant systems",
        "Healthcare analytics dashboards",
        "Integration with medical APIs",
        "Regulatory compliance automation"
      ],
      technologies: ["Angular", "React", "GraphQL", "PostgreSQL", "AWS", "HIPAA Tools"],
      detailedDescription: [
        "Specialized in developing healthcare software solutions with deep understanding of medical workflows and compliance requirements.",
        "I have hands-on experience building medical billing platforms that serve thousands of users while maintaining strict security standards.",
        "All healthcare solutions are designed with HIPAA compliance from the ground up, ensuring patient data protection and regulatory adherence.",
        "My healthcare applications include real-time analytics, automated billing processes, and seamless integration with existing medical systems."
      ],
      benefits: [
        "HIPAA compliant architecture and data handling",
        "Streamlined medical billing and claims processing",
        "Real-time analytics and reporting dashboards",
        "Integration with existing healthcare systems",
        "Improved operational efficiency and cost reduction",
        "Enhanced patient experience through digital portals"
      ],
      deliverables: [
        "HIPAA compliant application",
        "Security audit and compliance documentation",
        "Healthcare analytics dashboard",
        "API integrations with medical systems",
        "User training materials",
        "Ongoing compliance monitoring"
      ]
    },
    {
      title: "Frontend Web Development",
      description: "Specialized frontend development with modern JavaScript frameworks, responsive design, and optimal user experience.",
      icon: "fas fa-paint-brush",
      features: [
        "Modern JavaScript frameworks (React, Angular, Vue)",
        "Responsive and mobile-first design",
        "Component-based architecture",
        "Performance optimization and SEO",
        "Cross-browser compatibility",
        "Accessibility compliance (WCAG 2.1)"
      ],
      technologies: ["React", "Angular", "Vue.js", "TypeScript", "HTML5", "CSS3", "SASS"],
      detailedDescription: [
        "I specialize in creating exceptional user interfaces using the latest frontend technologies and design principles.",
        "My frontend development approach focuses on performance, accessibility, and user experience to create applications that users love.",
        "I build component libraries and design systems that ensure consistency and maintainability across large applications.",
        "Each frontend project includes responsive design, cross-browser testing, and performance optimization for fast load times."
      ],
      benefits: [
        "Modern, intuitive user interfaces",
        "Fast loading times and smooth interactions",
        "Mobile-responsive design for all screen sizes",
        "SEO-optimized structure for better visibility",
        "Accessibility compliance for inclusive design",
        "Reusable component libraries for consistency"
      ],
      deliverables: [
        "Complete frontend application",
        "Component library and style guide",
        "Responsive design across all devices",
        "Performance optimization report",
        "SEO implementation",
        "Browser compatibility testing results"
      ]
    },
    {
      title: "System Architecture & Migration",
      description: "Modernize legacy systems with microservices architecture and cloud migration strategies.",
      icon: "fas fa-sitemap",
      features: [
        "Legacy system modernization",
        "Microservices architecture design",
        "Cloud migration strategies",
        "Performance optimization",
        "Scalability planning",
        "DevOps implementation"
      ],
      technologies: ["Docker", "Kubernetes", "AWS", "Microservices", "GraphQL", "CI/CD"],
      detailedDescription: [
        "I help organizations modernize their legacy systems by designing and implementing scalable, cloud-native architectures.",
        "My approach includes comprehensive system analysis, migration planning, and phased implementation to minimize business disruption.",
        "I specialize in breaking down monolithic applications into microservices using proven patterns like strangulation and anti-corruption layers.",
        "Each migration project includes performance improvements, cost optimization, and enhanced security through modern cloud practices."
      ],
      benefits: [
        "Improved system scalability and performance",
        "Reduced infrastructure costs through cloud optimization",
        "Enhanced security and compliance capabilities",
        "Faster development and deployment cycles",
        "Better fault tolerance and disaster recovery",
        "Simplified maintenance and updates"
      ],
      deliverables: [
        "System architecture documentation",
        "Migration roadmap and timeline",
        "Containerized applications",
        "CI/CD pipeline setup",
        "Performance benchmarking report",
        "Team training and knowledge transfer"
      ]
    },
    {
      title: "AI & Data Analytics Integration",
      description: "Implement AI-powered features and data analytics to enhance your business operations.",
      icon: "fas fa-robot",
      features: [
        "AI model integration",
        "Data analytics dashboards",
        "Predictive analytics",
        "Machine learning implementations",
        "Business intelligence tools",
        "Automated reporting systems"
      ],
      technologies: ["Python", "TensorFlow", "React", "D3.js", "PostgreSQL", "AWS AI Services"],
      detailedDescription: [
        "I integrate cutting-edge AI and machine learning capabilities into existing business applications to drive intelligent decision-making.",
        "My AI solutions include predictive analytics, automated data processing, and intelligent dashboards that provide actionable insights.",
        "I work with various AI services and custom models to solve specific business problems and improve operational efficiency.",
        "Each AI implementation includes data pipeline setup, model training, and comprehensive analytics dashboards for monitoring and insights."
      ],
      benefits: [
        "Automated decision-making and process optimization",
        "Predictive insights for better business planning",
        "Improved operational efficiency through AI automation",
        "Real-time data visualization and reporting",
        "Enhanced customer experience through personalization",
        "Cost reduction through intelligent resource allocation"
      ],
      deliverables: [
        "AI-powered application features",
        "Analytics dashboards and reports",
        "Data pipeline and processing systems",
        "Model training and deployment setup",
        "Performance monitoring tools",
        "AI implementation documentation"
      ]
    },
    {
      title: "Technical Consulting & Code Review",
      description: "Expert technical guidance, code reviews, and architecture consulting for your development team.",
      icon: "fas fa-search",
      features: [
        "Code review and optimization",
        "Architecture consulting",
        "Technical team mentoring",
        "Best practices implementation",
        "Performance auditing",
        "Development process improvement"
      ],
      technologies: ["Various based on project needs"],
      detailedDescription: [
        "I provide expert technical consulting services to help development teams improve their code quality, architecture, and development processes.",
        "My consulting approach includes comprehensive code reviews, architecture assessments, and hands-on mentoring to elevate team capabilities.",
        "I help organizations implement best practices, improve development workflows, and establish coding standards that ensure long-term maintainability.",
        "Each consulting engagement is tailored to your specific needs and includes actionable recommendations with implementation guidance."
      ],
      benefits: [
        "Improved code quality and maintainability",
        "Enhanced team productivity and skills",
        "Better system architecture and scalability",
        "Reduced technical debt and bugs",
        "Established development best practices",
        "Faster delivery times and improved quality"
      ],
      deliverables: [
        "Comprehensive code review report",
        "Architecture improvement recommendations",
        "Development process documentation",
        "Team training sessions",
        "Best practices implementation guide",
        "Ongoing mentoring and support"
      ]
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "Understanding your requirements, goals, and technical constraints.",
      icon: "fas fa-lightbulb"
    },
    {
      step: "2",
      title: "Design & Architecture",
      description: "Creating detailed technical specifications and system architecture.",
      icon: "fas fa-drafting-compass"
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "Agile development with continuous testing and quality assurance.",
      icon: "fas fa-code"
    },
    {
      step: "4",
      title: "Deployment & Support",
      description: "Seamless deployment with ongoing maintenance and support.",
      icon: "fas fa-rocket"
    }
  ];

  const openServiceModal = (service: Service) => {
    setSelectedService(service);
  };

  const navigateToContact = () => {
    setActiveSection('contact');
  };

  return (
    <div className="services-container">
      {/* Services Hero Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="text-center">
            <h1 className="display-5 fw-bold mb-4">Professional Services</h1>
            <p className="lead mb-4">
              Comprehensive software development and cybersecurity solutions tailored to your business needs
            </p>
            <div className="row text-center">
              <div className="col-md-3">
                <h3 className="display-6 fw-bold text-warning">8+</h3>
                <p>Years Experience</p>
              </div>
              <div className="col-md-3">
                <h3 className="display-6 fw-bold text-warning">100+</h3>
                <p>Projects Delivered</p>
              </div>
              <div className="col-md-3">
                <h3 className="display-6 fw-bold text-warning">50+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="col-md-3">
                <h3 className="display-6 fw-bold text-warning">24/7</h3>
                <p>Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">
            <i className="fas fa-cogs me-2 text-primary"></i>
            My Services
          </h2>
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div 
                  className="card border-0 shadow-sm card-hover h-100"
                  style={{ cursor: 'pointer' }}
                  onClick={() => openServiceModal(service)}
                  data-bs-toggle="modal"
                  data-bs-target="#serviceModal"
                >
                  <div className="card-body">
                    <div className="text-center mb-3">
                      <i className={`${service.icon} fa-3x text-primary`}></i>
                    </div>
                    <h5 className="card-title text-center text-primary">{service.title}</h5>
                    <p className="card-text text-muted">{service.description}</p>
                    
                    <div className="mb-3">
                      <h6 className="fw-bold text-dark">Key Features:</h6>
                      <ul className="list-unstyled">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="small text-muted">
                            <i className="fas fa-check text-success me-2"></i>
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="small text-muted">
                            <i className="fas fa-plus text-primary me-2"></i>
                            +{service.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="mb-3">
                      <h6 className="fw-bold text-dark">Technologies:</h6>
                      <div className="d-flex flex-wrap gap-1">
                        {service.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span key={techIndex} className="badge bg-light text-dark small">
                            {tech}
                          </span>
                        ))}
                        {service.technologies.length > 3 && (
                          <span className="badge bg-primary small">
                            +{service.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-center mt-auto">
                      <small className="text-muted">
                        <i className="fas fa-eye me-1"></i>
                        Click to view details
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">
            <i className="fas fa-route me-2 text-primary"></i>
            My Process
          </h2>
          <div className="row">
            {processSteps.map((step, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="text-center">
                  <div className="process-step-icon mb-3">
                    <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center" 
                         style={{ width: '80px', height: '80px' }}>
                      <i className={`${step.icon} fa-2x`}></i>
                    </div>
                    <div className="step-number bg-warning text-dark rounded-circle position-relative" 
                         style={{ 
                           width: '30px', 
                           height: '30px', 
                           marginTop: '-15px',
                           marginLeft: 'auto',
                           marginRight: 'auto',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center',
                           fontWeight: 'bold'
                         }}>
                      {step.step}
                    </div>
                  </div>
                  <h5 className="fw-bold text-primary">{step.title}</h5>
                  <p className="text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h3 className="mb-4">Ready to Get Started?</h3>
              <p className="lead mb-4">
                Let's discuss your project requirements and how I can help bring your ideas to life.
              </p>
              <div className="d-flex justify-content-center">
                <button 
                  onClick={navigateToContact}
                  className="btn btn-warning btn-lg px-4"
                >
                  <i className="fas fa-envelope me-2"></i>
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <div className="modal fade" id="serviceModal" tabIndex={-1}>
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            {selectedService && (
              <>
                <div className="modal-header">
                  <div className="d-flex align-items-center">
                    <i className={`${selectedService.icon} fa-2x text-primary me-3`}></i>
                    <div>
                      <h4 className="modal-title mb-0">{selectedService.title}</h4>
                      <small className="text-muted">Professional service details</small>
                    </div>
                  </div>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-8">
                      <h5 className="text-primary mb-3">Service Overview</h5>
                      {selectedService.detailedDescription.map((desc, index) => (
                        <p key={index} className="mb-3">{desc}</p>
                      ))}
                      
                      <h5 className="text-primary mb-3 mt-4">Key Benefits</h5>
                      <div className="row">
                        {selectedService.benefits.map((benefit, index) => (
                          <div key={index} className="col-md-6 mb-2">
                            <i className="fas fa-check-circle text-success me-2"></i>
                            <small>{benefit}</small>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="col-md-4">
                      <h5 className="text-primary mb-3">What You Get</h5>
                      <ul className="list-unstyled">
                        {selectedService.deliverables.map((deliverable, index) => (
                          <li key={index} className="mb-2">
                            <i className="fas fa-arrow-right text-primary me-2"></i>
                            <small>{deliverable}</small>
                          </li>
                        ))}
                      </ul>
                      
                      <h6 className="fw-bold mb-2 mt-4">Technologies & Tools:</h6>
                      <div className="d-flex flex-wrap gap-1">
                        {selectedService.technologies.map((tech, index) => (
                          <span key={index} className="badge bg-primary small">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={() => {
                      const modal = document.getElementById('serviceModal');
                      if (modal) {
                        const bootstrap = (window as any).bootstrap;
                        if (bootstrap) {
                          const bsModal = bootstrap.Modal.getInstance(modal);
                          if (bsModal) bsModal.hide();
                        }
                      }
                      navigateToContact();
                    }}
                  >
                    <i className="fas fa-envelope me-2"></i>
                    Get Started
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;