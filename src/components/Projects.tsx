import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  category: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
  featured: boolean;
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
      fullDescription: "A comprehensive e-commerce platform built with React and Node.js. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and a complete admin dashboard for inventory and order management.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "JWT", "Tailwind CSS"],
      category: "Full Stack",
      image: "https://via.placeholder.com/400x250/4f46e5/ffffff?text=E-Commerce+Platform",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://your-ecommerce-demo.com",
      status: "completed",
      featured: true
    },
    {
      id: 2,
      title: "AI Chat Assistant",
      description: "Intelligent chatbot using OpenAI API with context awareness and memory.",
      fullDescription: "An advanced AI-powered chat assistant that maintains conversation context and provides intelligent responses. Built with React frontend and Python backend, integrating OpenAI's GPT models with custom training data and memory management.",
      technologies: ["React", "Python", "FastAPI", "OpenAI API", "PostgreSQL", "Redis", "WebSocket"],
      category: "AI/ML",
      image: "https://via.placeholder.com/400x250/059669/ffffff?text=AI+Chat+Assistant",
      githubUrl: "https://github.com/yourusername/ai-chat-assistant",
      liveUrl: "https://your-ai-chat-demo.com",
      status: "completed",
      featured: true
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      description: "Collaborative project management tool with real-time updates and team features.",
      fullDescription: "A comprehensive project management dashboard that allows teams to collaborate effectively. Features include task assignment, progress tracking, real-time notifications, file sharing, and team communication tools.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io", "Tailwind CSS"],
      category: "Full Stack",
      image: "https://via.placeholder.com/400x250/dc2626/ffffff?text=Task+Management",
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://your-task-manager-demo.com",
      status: "completed",
      featured: true
    },
    {
      id: 4,
      title: "Weather Analytics App",
      description: "Weather data visualization with predictive analytics and historical trends.",
      fullDescription: "A comprehensive weather analytics application that provides detailed weather insights, predictive forecasting, and historical trend analysis. Features interactive charts, location-based forecasts, and weather alerts.",
      technologies: ["Vue.js", "D3.js", "Python", "Django", "PostgreSQL", "Weather API"],
      category: "Frontend",
      image: "https://via.placeholder.com/400x250/0ea5e9/ffffff?text=Weather+Analytics",
      githubUrl: "https://github.com/yourusername/weather-analytics",
      liveUrl: "https://your-weather-demo.com",
      status: "completed",
      featured: false
    },
    {
      id: 5,
      title: "Blockchain Voting System",
      description: "Secure voting platform using blockchain technology for transparency.",
      fullDescription: "A decentralized voting system built on blockchain technology to ensure transparency, security, and immutability of votes. Features include voter authentication, real-time vote counting, and audit trails.",
      technologies: ["React", "Solidity", "Web3.js", "Ethereum", "Node.js", "MongoDB"],
      category: "Blockchain",
      image: "https://via.placeholder.com/400x250/7c3aed/ffffff?text=Blockchain+Voting",
      githubUrl: "https://github.com/yourusername/blockchain-voting",
      status: "in-progress",
      featured: false
    },
    {
      id: 6,
      title: "Social Media Analytics",
      description: "AI-powered social media analytics dashboard with sentiment analysis.",
      fullDescription: "An advanced analytics platform that provides insights into social media performance, audience engagement, and sentiment analysis using machine learning algorithms.",
      technologies: ["React", "Python", "TensorFlow", "FastAPI", "MongoDB", "Chart.js"],
      category: "AI/ML",
      image: "https://via.placeholder.com/400x250/ea580c/ffffff?text=Social+Analytics",
      githubUrl: "https://github.com/yourusername/social-analytics",
      status: "planned",
      featured: false
    },
    {
      id: 7,
      title: "Real-time Code Editor",
      description: "Collaborative code editor with live sharing and syntax highlighting.",
      fullDescription: "A real-time collaborative code editor that allows multiple developers to work together simultaneously. Features include syntax highlighting, live cursors, chat functionality, and version control integration.",
      technologies: ["React", "Monaco Editor", "Socket.io", "Node.js", "Redis", "Docker"],
      category: "Full Stack",
      image: "https://via.placeholder.com/400x250/16a34a/ffffff?text=Code+Editor",
      githubUrl: "https://github.com/yourusername/code-editor",
      liveUrl: "https://your-code-editor-demo.com",
      status: "completed",
      featured: false
    },
    {
      id: 8,
      title: "Mobile Fitness Tracker",
      description: "React Native app for fitness tracking with health analytics.",
      fullDescription: "A comprehensive fitness tracking mobile application that monitors workouts, nutrition, and health metrics. Includes goal setting, progress tracking, and integration with wearable devices.",
      technologies: ["React Native", "Firebase", "Redux", "Health APIs", "Chart.js"],
      category: "Mobile",
      image: "https://via.placeholder.com/400x250/be185d/ffffff?text=Fitness+Tracker",
      githubUrl: "https://github.com/yourusername/fitness-tracker",
      status: "in-progress",
      featured: false
    }
  ];

  const categories = ["all", "Full Stack", "Frontend", "AI/ML", "Mobile", "Blockchain"];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-success';
      case 'in-progress':
        return 'bg-warning';
      case 'planned':
        return 'bg-info';
      default:
        return 'bg-secondary';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'planned':
        return 'Planned';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="projects-container">
      {/* Projects Hero Section */}
      <section className="py-5 bg-gradient-primary text-white">
        <div className="container">
          <div className="text-center">
            <h1 className="display-5 fw-bold mb-4">My Projects</h1>
            <p className="lead mb-4">
              A showcase of my technical skills and creativity through various projects
            </p>
            <div className="row text-center">
              <div className="col-md-4">
                <h3 className="display-6 fw-bold text-warning">{projects.length}+</h3>
                <p>Total Projects</p>
              </div>
              <div className="col-md-4">
                <h3 className="display-6 fw-bold text-warning">{projects.filter(p => p.status === 'completed').length}</h3>
                <p>Completed</p>
              </div>
              <div className="col-md-4">
                <h3 className="display-6 fw-bold text-warning">{categories.length - 1}</h3>
                <p>Categories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">
            <i className="fas fa-star me-2 text-warning"></i>
            Featured Projects
          </h2>
          <div className="row">
            {featuredProjects.map((project) => (
              <div key={project.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card border-0 shadow-lg card-hover h-100">
                  <img 
                    src={project.image} 
                    className="card-img-top" 
                    alt={project.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h5 className="card-title text-primary">{project.title}</h5>
                      <span className={`badge ${getStatusBadge(project.status)}`}>
                        {getStatusText(project.status)}
                      </span>
                    </div>
                    <p className="card-text text-muted flex-grow-1">{project.description}</p>
                    <div className="d-flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="badge bg-outline-secondary small">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="badge bg-light text-dark small">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="d-flex gap-2">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline-dark btn-sm flex-fill"
                      >
                        <i className="fab fa-github me-1"></i>
                        Code
                      </a>
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm flex-fill"
                        >
                          <i className="fas fa-external-link-alt me-1"></i>
                          Live Demo
                        </a>
                      )}
                      <button 
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => setSelectedProject(project)}
                        data-bs-toggle="modal"
                        data-bs-target="#projectModal"
                      >
                        <i className="fas fa-info-circle"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">
            <i className="fas fa-folder-open me-2 text-primary"></i>
            All Projects
          </h2>
          
          {/* Category Filter */}
          <div className="text-center mb-5">
            <div className="btn-group" role="group">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' ? 'All Projects' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="row">
            {filteredProjects.map((project) => (
              <div key={project.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card border-0 shadow-sm card-hover h-100">
                  <img 
                    src={project.image} 
                    className="card-img-top" 
                    alt={project.title}
                    style={{ height: '180px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h6 className="card-title text-primary">{project.title}</h6>
                      <span className={`badge ${getStatusBadge(project.status)} small`}>
                        {getStatusText(project.status)}
                      </span>
                    </div>
                    <span className="badge bg-light text-dark mb-2 align-self-start">
                      {project.category}
                    </span>
                    <p className="card-text text-muted small flex-grow-1">{project.description}</p>
                    <div className="d-flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 2).map((tech, index) => (
                        <span key={index} className="badge bg-secondary small">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="badge bg-light text-dark small">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                    <div className="d-flex gap-2">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline-dark btn-sm flex-fill"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm flex-fill"
                        >
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      )}
                      <button 
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => setSelectedProject(project)}
                        data-bs-toggle="modal"
                        data-bs-target="#projectModal"
                      >
                        <i className="fas fa-info-circle"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <div className="modal fade" id="projectModal" tabIndex={-1}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {selectedProject && (
              <>
                <div className="modal-header">
                  <h5 className="modal-title">{selectedProject.title}</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                  <img 
                    src={selectedProject.image} 
                    className="img-fluid mb-3 rounded" 
                    alt={selectedProject.title}
                  />
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-primary">{selectedProject.category}</span>
                    <span className={`badge ${getStatusBadge(selectedProject.status)}`}>
                      {getStatusText(selectedProject.status)}
                    </span>
                  </div>
                  <p className="text-muted">{selectedProject.fullDescription}</p>
                  <h6 className="fw-bold mb-2">Technologies Used:</h6>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="badge bg-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="modal-footer">
                  <a 
                    href={selectedProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark"
                  >
                    <i className="fab fa-github me-2"></i>
                    View Code
                  </a>
                  {selectedProject.liveUrl && (
                    <a 
                      href={selectedProject.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <i className="fas fa-external-link-alt me-2"></i>
                      Live Demo
                    </a>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;