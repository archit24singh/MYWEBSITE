import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import ProfileCard from './ProfileCard';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'architbenipal77@gmail.com',
      link: 'mailto:architbenipal77@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      value: 'archit-b-155681310',
      link: 'https://www.linkedin.com/in/archit-singh-b-155681310/',
      description: 'Connect with me professionally'
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      value: 'archit24singh',
      link: 'https://github.com/archit24singh',
      description: 'Check out my latest projects'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      // Check if all required environment variables are present
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }
      
      // Template parameters that match your EmailJS template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'architbenipal77@gmail.com'
      };
      
      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactClick = () => {
    // Scroll to contact form or show contact modal
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="contact-container">
      {/* Contact Hero Section with ProfileCard - PURE BLACK BACKGROUND */}
      <section className="py-5 text-white" style={{ backgroundColor: '#000000' }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left side - ProfileCard */}
            <div className="col-lg-6 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
              <div className="profile-card-container" style={{ 
                maxWidth: '400px', 
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <ProfileCard
                name="Archit Singh"
                title="Software Developer"
                handle="archit24singh"
                status="Available for Projects"
                contactText="Contact Me"
                avatarUrl="/profile.jpg"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={handleContactClick}
                />
              </div>
            </div>
            
            {/* Right side - Hero Content */}
            <div className="col-lg-6">
              <div className="text-center text-lg-start">
                <h1 className="display-5 fw-bold mb-4">Get In Touch</h1>
                <p className="lead mb-4">
                  Ready to start your next project? Let's discuss how I can help bring your ideas to life.
                </p>
                <div className="row text-center">
                  <div className="col-md-4 mb-3">
                    <h3 className="display-6 fw-bold text-warning">24hrs</h3>
                    <p className="mb-0">Response Time</p>
                  </div>
                  <div className="col-md-4 mb-3">
                    <h3 className="display-6 fw-bold text-warning">100%</h3>
                    <p className="mb-0">Client Satisfaction</p>
                  </div>
                  <div className="col-md-4 mb-3">
                    <h3 className="display-6 fw-bold text-warning">6+</h3>
                    <p className="mb-0">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-5" id="contact-form">
        <div className="container">
          <div className="row justify-content-center">
            {/* Contact Form */}
            <div className="col-lg-8 mb-5">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-5">
                  <h3 className="card-title text-primary mb-4 text-center">
                    <i className="fas fa-paper-plane me-2"></i>
                    Send Me a Message
                  </h3>
                  
                  {submitStatus === 'success' && (
                    <div className="alert alert-success">
                      <i className="fas fa-check-circle me-2"></i>
                      Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="alert alert-danger">
                      <i className="fas fa-exclamation-circle me-2"></i>
                      There was an error sending your message. Please try again or email me directly at architbenipal77@gmail.com
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label fw-bold">Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label fw-bold">Email *</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label fw-bold">Subject *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Brief description of your inquiry"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="message" className="form-label fw-bold">Message *</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, requirements, timeline, and any specific questions you have..."
                        required
                      ></textarea>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg px-5"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <i className="fas fa-spinner fa-spin me-2"></i>
                            Preparing...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-paper-plane me-2"></i>
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="text-center mb-5">
            <i className="fas fa-address-card me-2 text-primary"></i>
            Contact Information
          </h3>
          
          <div className="row justify-content-center">
            {contactInfo.map((info, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="card border-0 shadow-sm text-center h-100">
                  <div className="card-body p-4">
                    <div className="contact-icon mb-3">
                      <i className={`${info.icon} fa-3x text-primary`}></i>
                    </div>
                    <h5 className="fw-bold mb-2">{info.title}</h5>
                    <a 
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-dark fw-medium d-block mb-2"
                    >
                      {info.value}
                    </a>
                    <p className="text-muted small mb-0">{info.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <h5 className="fw-bold text-primary mb-3">
                    <i className="fas fa-clock me-2"></i>
                    Availability
                  </h5>
                  <div className="row">
                    <div className="col-md-4 mb-2">
                      <i className="fas fa-clock text-success me-2"></i>
                      <small>24hr Response</small>
                    </div>
                    <div className="col-md-4 mb-2">
                      <i className="fas fa-calendar text-success me-2"></i>
                      <small>Open for Projects</small>
                    </div>
                    <div className="col-md-4 mb-2">
                      <i className="fas fa-globe text-success me-2"></i>
                      <small>Remote & On-site</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;