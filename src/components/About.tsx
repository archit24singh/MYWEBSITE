import React from 'react';

interface Skill {
  category: string;
  skills: { name: string; level: number }[];
}

interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon: string;
}

const About: React.FC = () => {
  const skillCategories: Skill[] = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "GraphQL", level: 80 },
        { name: "REST APIs", level: 92 },
        { name: "Django", level: 75 }
      ]
    },
    {
      category: "Database & Cloud",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 88 },
        { name: "AWS", level: 82 },
        { name: "Docker", level: 80 },
        { name: "Redis", level: 75 },
        { name: "Firebase", level: 85 }
      ]
    },
    {
      category: "AI & Machine Learning",
      skills: [
        { name: "TensorFlow", level: 70 },
        { name: "PyTorch", level: 65 },
        { name: "OpenAI APIs", level: 85 },
        { name: "Langchain", level: 75 },
        { name: "Hugging Face", level: 70 },
        { name: "Scikit-learn", level: 80 }
      ]
    }
  ];

  const education: Education[] = [
    {
      degree: "Master of Science in Cyebersecurity",
      institution: "Southeast Missouri State University",
      year: "2023 - 2024",
      description: "Focused on Computer Security, IoT, and Machine Learning Security."
    },
    {
      degree: "Bachelor In Computer Science & Engineering",
      institution: "NIT",
      year: "2014-2017",
      description: "Focused on software engineering, algorithms, and data structures."
    }
  ];

  const certifications: Certification[] = [
    {
      name: "AWS Certified Developer Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      icon: "fab fa-aws"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      icon: "fab fa-google"
    },
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      date: "2023",
      icon: "fas fa-database"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      icon: "fab fa-react"
    }
  ];


  return (
    <div className="about-container">
      {/* About Hero Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold mb-4">About Me</h1>
              <p className="lead mb-4">
                I'm a passionate full-stack developer with over 6 years of experience creating 
                innovative web solutions. I love working at the intersection of technology and 
                user experience, always striving to build applications that are not only 
                functional but also delightful to use.
              </p>
              <p className="mb-4">
                My journey in tech started with a curiosity about how websites work, and it has 
                evolved into a deep passion for software engineering, web development, and 
                artificial intelligence. I believe in continuous learning and enjoy staying 
                up-to-date with the latest technologies and best practices.
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <div className="about-stats">
                <div className="row text-center">
                  <div className="col-4">
                    <div className="stat-item">
                      <h3 className="display-6 fw-bold text-warning">8+</h3>
                      <p className="mb-0">Years Experience</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-item">
                      <h3 className="display-6 fw-bold text-warning">50+</h3>
                      <p className="mb-0">Projects Completed</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-item">
                      <h3 className="display-6 fw-bold text-warning">15+</h3>
                      <p className="mb-0">Technologies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">
            <i className="fas fa-cogs me-2 text-primary"></i>
            Technical Skills
          </h2>
          <div className="row">
            {skillCategories.map((category, index) => (
              <div key={index} className="col-lg-6 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title text-primary mb-4">
                      <i className="fas fa-code me-2"></i>
                      {category.category}
                    </h5>
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="mb-3">
                        <div className="d-flex justify-content-between mb-1">
                          <span className="fw-medium">{skill.name}</span>
                          <span className="text-muted">{skill.level}%</span>
                        </div>
                        <div className="progress" style={{ height: '8px' }}>
                          <div 
                            className="progress-bar bg-primary" 
                            role="progressbar" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">
            <i className="fas fa-graduation-cap me-2 text-success"></i>
            Education
          </h2>
          <div className="row">
            {education.map((edu, index) => (
              <div key={index} className="col-lg-6 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title text-primary">{edu.degree}</h5>
                    <h6 className="text-muted mb-2">{edu.institution}</h6>
                    <span className="badge bg-success mb-3">{edu.year}</span>
                    <p className="card-text">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">
            <i className="fas fa-certificate me-2 text-warning"></i>
            Certifications
          </h2>
          <div className="row">
            {certifications.map((cert, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="card text-center border-0 shadow-sm card-hover h-100">
                  <div className="card-body">
                    <div className="cert-icon mb-3">
                      <i className={`${cert.icon} fa-3x text-warning`}></i>
                    </div>
                    <h6 className="card-title">{cert.name}</h6>
                    <p className="text-muted small">{cert.issuer}</p>
                    <span className="badge bg-warning text-dark">{cert.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Philosophy */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mb-4">My Philosophy</h2>
              <blockquote className="blockquote">
                <p className="lead mb-4">
                  "Code is poetry written in logic. Every line should serve a purpose, 
                  every function should tell a story, and every application should make 
                  someone's life better."
                </p>
                <footer className="blockquote-footer text-light">
                  <cite title="Source Title">My approach to software development</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;