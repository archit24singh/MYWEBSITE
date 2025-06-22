import React, { useState, useEffect, useRef } from 'react';
import { useScrollAnimation, getStaggeredDelay } from '../hooks/useScrollAnimation';

// Typing Animation Component
interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ 
  text, 
  speed = 100, 
  delay = 0, 
  className = "",
  onComplete = () => {} 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay + currentIndex * speed);

      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete();
    }
    
    // Return undefined explicitly for the case where neither condition is met
    return undefined;
  }, [currentIndex, text, speed, delay, isComplete, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && <span className="typing-cursor">|</span>}
    </span>
  );
};

type Section = 'home' | 'about' | 'services' | 'contact';

interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  detailedDescription: string[];
  keyResponsibilities: string[];
}

interface Achievement {
  title: string;
  description: string;
  icon: string;
  date: string;
  detailedDescription: string[];
  impact: string;
}

interface UpcomingProject {
  title: string;
  description: string;
  technologies: string[];
  status: string;
}

interface HomeProps {
  setActiveSection?: (section: Section) => void;
}

const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  
  // Animation hooks
  const heroAnimation = useScrollAnimation({ delay: 100 });

  // Initialize Vanta effect
  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      // Check if VANTA is available
      if (typeof window !== 'undefined' && (window as any).VANTA && (window as any).THREE) {
        vantaEffect.current = (window as any).VANTA.HALO({
          el: vantaRef.current,
          THREE: (window as any).THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          baseColor: 0x6745ca,
          backgroundColor: 0x0a0a0a, // Darker background for better contrast
          amplitudeFactor: 0.8, // Reduced intensity
          xOffset: 0.00,
          yOffset: -0.09,
          size: 0.8 // Smaller size for less intensity
        });
      }
    }
    
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  // Update Vanta effect on resize
  useEffect(() => {
    const handleResize = () => {
      if (vantaEffect.current) {
        vantaEffect.current.resize();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const experiences: Experience[] = [
    {
      company: "Omega Medical Billing Inc.",
      position: "Software Developer",
      duration: "2024 - Present",
      description: "Leading development of scalable web applications using modern technologies. Mentoring junior developers and architecting solutions for complex business requirements.",
      technologies: ["React", "Angular", "Node.js", "PostgreSQL", "GraphQL", "AWS", "Terraform"],
      detailedDescription: [
        "Developed innovative software solutions architecting Angular and React-based medical billing platform from concept to deployment, managing complete application lifecycle serving 10,000+ users",
        "Collaborated with UX designers and stakeholders to translate business requirements into engaging, accessible user experiences for web and mobile applications",
        "Created personalized UI analytics dashboards using modern JavaScript frameworks with responsive design and data visualization components",
        "Implemented real-time features using WebSockets for live data updates and seamless user interactions in dashboard applications",
        "Led frontend development initiatives working independently and in collaborative team environments, providing constructive feedback and exploring alternative solutions"
      ],
      keyResponsibilities: [
        "Managing project scopes and estimates from initial client needs assessment through solution delivery and performance optimization",
        "Building full-stack applications using React and Node.js with PostgreSQL database, implementing GraphQL APIs and modern serverless deployment practices with Terraform infrastructure management",
        "Leading technical architecture decisions for medical billing platform serving 10,000+ users",
        "Collaborating with cross-functional teams to deliver scalable healthcare solutions"
      ]
    },
    {
      company: "Southeast Missouri State University",
      position: "Graduate Teaching Assistant & AI Researcher",
      duration: "01/2024 - 05/2024",
      description: "Developed full-stack applications using React, Node.js, and TypeScript with emphasis on user experience and accessibility best practices",
      technologies: ["React", "TypeScript", "Node.js", "AI/ML", "Research"],
      detailedDescription: [
        "Developed full-stack applications using React, Node.js, and TypeScript with emphasis on user experience and accessibility best practices",
        "Designed responsive web interfaces translating design concepts into functional applications with modern CSS techniques and cross-browser compatibility",
        "Mentored students on frontend development, user experience design, and collaborative development practices",
        "Led technical discussions on application architecture, performance optimization, and modern development methodologies"
      ],
      keyResponsibilities: [
        "Collaborating with distributed teams using agile practices and proactive communication across multiple projects",
        "Conducting AI research projects focused on practical applications",
        "Teaching and mentoring students in modern web development practices",
        "Contributing to academic research in AI and software engineering"
      ]
    },
    {
      company: "Southeast Missouri State University",
      position: "IT Support Specialist (Web Portal Management)",
      duration: "01/2023 - 01/2024",
      description: "Conducted comprehensive testing across browsers and mobile devices ensuring consistent user experience and performance",
      technologies: ["WordPress", "CMS", "Website Management", "JavaScript", "Testing"],
      detailedDescription: [
        "Architected user-focused solutions supporting 30,000+ users with emphasis on accessible interface design and user experience optimization",
        "Implemented automated solutions using JavaScript frameworks and modern web technologies for improved user engagement",
        "Conducted comprehensive testing across browsers and mobile devices ensuring consistent user experience and performance"
      ],
      keyResponsibilities: [
        "Managing web portals and CMS systems for university infrastructure",
        "Ensuring accessibility standards and optimal user experience for 30,000+ users",
        "Implementing automated testing and performance optimization strategies",
        "Providing technical support and troubleshooting for web-based systems"
      ]
    },
    {
      company: "Accenture",
      position: "Fullstack Developer Senior Analyst",
      duration: "08/2021 - 12/2022",
      description: "Developed responsive web applications and collaborated with UX/UI designers to create exceptional user experiences.",
      technologies: ["React", "Angular", "JavaScript", "SASS", "Redux", "Firebase"],
      detailedDescription: [
        "Led innovative software solution development building React and Angular applications serving 50,000+ enterprise users with focus on user experience",
        "Collaborated with consultants and UX teams to develop client-facing applications with responsive design and modern CSS frameworks",
        "Managed application lifecycles from requirements gathering through deployment, ensuring performance optimization and accessibility standards",
        "Translated business requirements into scalable software solutions working independently and in collaborative team environments"
      ],
      keyResponsibilities: [
        "Leading development teams and architectural decisions for enterprise applications",
        "Implementing UI analytics dashboards with real-time data visualization and personalized user experiences",
        "Managing client relationships and technical consultations",
        "Ensuring enterprise-level security and performance standards"
      ]
    },
    {
      company: "Accenture",
      position: "Fullstack Developer Analyst",
      duration: "08/2017 - 08/2021",
      description: "Built and maintained web applications while learning modern development practices and agile methodologies.",
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "Python", "Django"],
      detailedDescription: [
        "Developed high-performance web applications for trading platforms using React, JavaScript, HTML5, and CSS3 with strict user experience requirements",
        "Built responsive UI components translating complex business processes into intuitive user interfaces for financial applications",
        "Implemented comprehensive testing strategies conducting browser and mobile device testing to ensure consistent user experience",
        "Collaborated with UX/UI designers to create engaging, accessible interfaces processing millions of user interactions"
      ],
      keyResponsibilities: [
        "Optimizing application performance for high-frequency systems ensuring optimal user experience under heavy load",
        "Working independently on multiple projects writing code from scratch and taking ownership of complete feature development",
        "Developing financial trading platforms with real-time data processing",
        "Implementing security measures for high-stakes financial applications"
      ]
    }
  ];

  const achievements: Achievement[] = [
    {
      title: "Technical Leadership & Architecture",
      description: "Led architecture and delivery of 5+ complex engineering initiatives serving 100,000+ users.",
      icon: "fas fa-building",
      date: "",
      detailedDescription: [
        "Led architecture and delivery of 5+ complex engineering initiatives serving 100,000+ users",
        "Designed fault-tolerant, scalable platforms resilient to infrastructure-level failures",
        "Successfully migrated 3 monolithic systems to microservices using strangulation patterns and anti-corruption layers",
        "Architected centralized Angular component library using NX monorepo structure",
        "Created 50+ reusable UI components with Storybook documentation, reducing development time by 45% across 3 product teams"
      ],
      impact: "Improved system scalability by 300% and reduced development time by 45% across multiple product teams"
    },
    {
      title: "Frontend Excellence & User Experience",
      description: "Implemented responsive UI design using HTML5, CSS3, and JavaScript/jQuery across web and mobile platforms.",
      icon: "fas fa-palette",
      date: "",
      detailedDescription: [
        "Implemented responsive UI design using HTML5, CSS3, and JavaScript/jQuery across web and mobile platforms",
        "Optimized application performance using modern build tools, webpack configurations, and real-time communication resulting in improved load times and seamless user experiences",
        "Created personalized UI analytics dashboards with modern data visualization and interactive components",
        "Designed WCAG 2.1 AA compliant component library with role-based authentication and real-time data visualization",
        "Implemented Storybook documentation with accessibility testing automation"
      ],
      impact: "Achieved 40% improvement in application load times and 100% WCAG 2.1 AA compliance across all platforms"
    },
    {
      title: "High-Performance Financial Systems",
      description: "Developed trading platforms processing 100,000+ transactions per minute with zero downtime.",
      icon: "fas fa-chart-line",
      date: "",
      detailedDescription: [
        "Led migration from monolithic to microservices architecture using strangulation patterns",
        "Developed high-performance React components with Node.js backend processing 100,000+ transactions per minute",
        "Implemented real-time data processing for financial trading platforms",
        "Built fault-tolerant systems with automatic failover and recovery mechanisms",
        "Optimized database queries and caching strategies for high-frequency trading"
      ],
      impact: "Achieved 99.99% uptime for critical financial systems processing millions of dollars in transactions daily"
    },
    {
      title: "Independent Development & Team Collaboration",
      description: "Developed multiple projects from scratch writing code independently without AI assistance.",
      icon: "fas fa-users",
      date: "",
      detailedDescription: [
        "Developed multiple projects from scratch writing code independently without AI assistance",
        "Provided constructive feedback and technical leadership in collaborative team environments",
        "Demonstrated strong ownership taking calculated risks and exploring alternative solutions for complex challenges",
        "Mentored junior developers and led technical discussions on modern development practices",
        "Successfully managed cross-functional teams across multiple time zones"
      ],
      impact: "Successfully delivered 15+ projects on time and under budget while maintaining 95%+ code quality scores"
    }
  ];

  const upcomingProjects: UpcomingProject[] = [
    {
      title: "AI-Powered Medical Billing Platform",
      description: "Building an intelligent medical billing system with AI-driven automation and real-time analytics for healthcare providers.",
      technologies: ["React", "TypeScript", "Python", "TensorFlow", "PostgreSQL", "AWS"],
      status: "In Development"
    },
    {
      title: "Healthcare Analytics Dashboard",
      description: "Creating a comprehensive analytics platform with real-time data visualization and predictive insights for medical practices.",
      technologies: ["Next.js", "D3.js", "Node.js", "GraphQL", "MongoDB"],
      status: "Planning"
    },
    {
      title: "Cybersecurity Compliance Tool",
      description: "Developing a HIPAA compliance monitoring system with automated security assessments and reporting.",
      technologies: ["React", "Python", "Security APIs", "Compliance Frameworks"],
      status: "Design Phase"
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Angular", "Node.js", "Python", 
    "AWS", "GraphQL", "PostgreSQL", "MongoDB", "Docker", "Kubernetes"
  ];

  return (
    <div className="home-container">
      {/* Hero Section with Typing Animation */}
      <section 
        ref={vantaRef}
        className="text-white py-5 position-relative overflow-hidden min-vh-100 d-flex align-items-center"
        style={{ background: '#0a0a0a' }}
      >
        {/* Enhanced overlay for better text readability */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))',
            zIndex: 2,
            pointerEvents: 'none'
          }}
        ></div>
        
        <div className="container position-relative" style={{ zIndex: 3 }}>
          <div className="row justify-content-center text-center">
            <div 
              ref={heroAnimation.elementRef}
              className={`col-lg-10 ${heroAnimation.isVisible ? 'bounce-in-left' : 'opacity-0'}`}
            >
              {/* Main Title with Typing Animation - Only Name */}
              <h1 className="display-2 fw-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                Hi, I'm{' '}
                <TypingAnimation
                  text="Archit Benipal"
                  speed={30}
                  delay={100}
                  className="text-warning pulse-animation"
                />
              </h1>

              {/* Subtitle - No Animation */}
              <h2 className="h2 mb-4 text-light" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
                Software Developer & Full Stack Developer
              </h2>

              {/* Description - No Animation */}
              <p className="lead mb-5 fs-4" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>
                Software developer with 6+ years of experience creating innovative software solutions and managing complete application lifecycles using modern technologies. Expert in frontend development with strong background in cybersecurity and scalable system architecture.
              </p>

              {/* Skills - No Animation */}
              <div className="d-flex flex-wrap gap-2 mb-5 justify-content-center">
                {skills.slice(0, 6).map((skill, index) => (
                  <span key={index} className="badge bg-light text-dark px-4 py-3 fs-6">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Buttons - No Animation */}
              <div className="d-flex gap-3 justify-content-center">
                <button 
                  onClick={() => setActiveSection?.('contact')}
                  className="btn btn-warning btn-lg px-5 py-3 fw-bold button-hover"
                >
                  <i className="fas fa-envelope me-2"></i>
                  Contact Me
                </button>
                <button 
                  onClick={() => setActiveSection?.('about')}
                  className="btn btn-outline-light btn-lg px-5 py-3 fw-bold button-hover"
                >
                  <i className="fas fa-user me-2"></i>
                  About Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">
            <i className="fas fa-briefcase me-2 text-primary"></i>
            Professional Experience
          </h2>
          <div className="row">
            {experiences.map((exp, index) => (
              <div key={index} className="col-lg-12 mb-4">
                <div 
                  className={`card card-hover border-0 shadow-sm bounce-in-up ${getStaggeredDelay(index)}`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedExperience(exp)}
                  data-bs-toggle="modal"
                  data-bs-target="#experienceModal"
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <h5 className="card-title text-primary">{exp.position}</h5>
                        <h6 className="text-muted mb-2">{exp.company}</h6>
                        <p className="card-text">{exp.description}</p>
                      </div>
                      <div className="col-md-4 text-md-end">
                        <span className="badge bg-primary mb-3">{exp.duration}</span>
                        <div className="d-flex flex-wrap gap-1 justify-content-md-end">
                          {exp.technologies.slice(0, 3).map((tech, techIndex) => (
                            <span key={techIndex} className="badge bg-secondary small">
                              {tech}
                            </span>
                          ))}
                          {exp.technologies.length > 3 && (
                            <span className="badge bg-light text-dark small">
                              +{exp.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-end mt-2">
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

      {/* Key Achievements */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">
            <i className="fas fa-trophy me-2 text-warning"></i>
            Key Achievements
          </h2>
          <div className="row">
            {achievements.map((achievement, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div 
                  className={`card text-center card-hover border-0 shadow-sm h-100 bounce-in ${getStaggeredDelay(index)} bounce-hover`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedAchievement(achievement)}
                  data-bs-toggle="modal"
                  data-bs-target="#achievementModal"
                >
                  <div className="card-body">
                    <div className="achievement-icon mb-3 pulse-animation">
                      <i className={`${achievement.icon} fa-3x text-primary`}></i>
                    </div>
                    <h6 className="card-title">{achievement.title}</h6>
                    <p className="card-text text-muted small">{achievement.description}</p>
                    {achievement.date && (
                      <small className="text-primary fw-bold">{achievement.date}</small>
                    )}
                    <div className="mt-2">
                      <small className="text-muted">
                        <i className="fas fa-eye me-1"></i>
                        Click for details
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">
            <i className="fas fa-rocket me-2 text-success"></i>
            Current Projects
          </h2>
          <div className="row">
            {upcomingProjects.map((project, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="card project-card card-hover h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h5 className="card-title text-primary">{project.title}</h5>
                      <span className={`badge ${
                        project.status === 'In Development' ? 'bg-success' :
                        project.status === 'Planning' ? 'bg-warning' : 'bg-info'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="card-text text-muted">{project.description}</p>
                    <div className="d-flex flex-wrap gap-1 mt-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="badge bg-outline-primary small">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Detail Modal */}
      <div className="modal fade" id="experienceModal" tabIndex={-1}>
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            {selectedExperience && (
              <>
                <div className="modal-header">
                  <div>
                    <h4 className="modal-title">{selectedExperience.position}</h4>
                    <h6 className="text-muted">{selectedExperience.company} • {selectedExperience.duration}</h6>
                  </div>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="text-primary mb-3">Key Accomplishments</h5>
                      <ul className="list-unstyled">
                        {selectedExperience.detailedDescription.map((item, index) => (
                          <li key={index} className="mb-2">
                            <i className="fas fa-check-circle text-success me-2"></i>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5 className="text-primary mb-3">Key Responsibilities</h5>
                      <ul className="list-unstyled">
                        {selectedExperience.keyResponsibilities.map((item, index) => (
                          <li key={index} className="mb-2">
                            <i className="fas fa-arrow-right text-primary me-2"></i>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h6 className="fw-bold mb-2">Technologies & Tools:</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {selectedExperience.technologies.map((tech, index) => (
                        <span key={index} className="badge bg-primary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Achievement Detail Modal */}
      <div className="modal fade" id="achievementModal" tabIndex={-1}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {selectedAchievement && (
              <>
                <div className="modal-header">
                  <div className="d-flex align-items-center">
                    <i className={`${selectedAchievement.icon} fa-2x text-primary me-3`}></i>
                    <div>
                      <h4 className="modal-title mb-0">{selectedAchievement.title}</h4>
                      {selectedAchievement.date && (
                        <small className="text-muted">{selectedAchievement.date}</small>
                      )}
                    </div>
                  </div>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                  <div className="mb-4">
                    <h6 className="text-primary fw-bold">Overview</h6>
                    <p className="text-muted">{selectedAchievement.description}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h6 className="text-primary fw-bold">Detailed Accomplishments</h6>
                    <ul className="list-unstyled">
                      {selectedAchievement.detailedDescription.map((item, index) => (
                        <li key={index} className="mb-2">
                          <i className="fas fa-star text-warning me-2"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-light p-3 rounded">
                    <h6 className="text-success fw-bold mb-2">
                      <i className="fas fa-chart-line me-2"></i>
                      Impact & Results
                    </h6>
                    <p className="mb-0 text-dark fw-medium">{selectedAchievement.impact}</p>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* CSS Styles for Typing Animation */}
      <style>{`
        .typing-cursor {
          animation: blink 0.8s infinite;
          color: #ffc107;
          font-weight: bold;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .pulse-animation {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .button-hover {
          transition: all 0.3s ease;
        }

        .button-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
};

export default Home;