import React, { useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
}

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of React: What's Coming in 2025",
      excerpt: "Exploring the latest React features, Server Components, and the ecosystem evolution that's shaping modern web development.",
      content: `React continues to evolve at an incredible pace, and 2025 promises to bring some exciting developments to the ecosystem. In this post, we'll explore the major trends and features that are shaping the future of React development.

**Server Components Revolution**
React Server Components are fundamentally changing how we think about client-server boundaries. They allow us to run components on the server, reducing bundle sizes and improving performance. This shift enables better SEO, faster initial page loads, and more efficient data fetching patterns.

**Concurrent Features Maturation**
Features like Suspense, useTransition, and useDeferredValue are becoming more mainstream. These tools help create smoother user experiences by allowing React to prioritize updates and handle loading states more gracefully.

**The Rise of React Server Actions**
Server Actions provide a seamless way to handle server-side logic directly from client components, eliminating the need for separate API endpoints for many use cases.

**Improved Developer Experience**
The React DevTools continue to improve, and new linting rules help catch common mistakes early in development. The ecosystem is becoming more mature and developer-friendly.

The future of React looks bright, with a focus on performance, developer experience, and seamless full-stack development capabilities.`,
      category: "Web Development",
      tags: ["React", "JavaScript", "Frontend", "Server Components"],
      author: "Your Name",
      date: "2025-06-15",
      readTime: "8 min read",
      image: "https://via.placeholder.com/600x300/61dafb/000000?text=React+2025",
      featured: true
    },
    {
      id: 2,
      title: "Building Scalable APIs with Node.js and TypeScript",
      excerpt: "Best practices for creating robust, type-safe backend services that can handle production workloads.",
      content: `Building scalable APIs is crucial for modern applications. In this comprehensive guide, we'll explore how to create robust, maintainable APIs using Node.js and TypeScript.

**Why TypeScript for Backend Development?**
TypeScript brings static typing to JavaScript, catching errors at compile time and improving code maintainability. For backend development, this means fewer runtime errors and better documentation through types.

**Project Structure and Architecture**
A well-organized project structure is essential for scalability. We recommend a layered architecture with clear separation of concerns:
- Controllers for handling HTTP requests
- Services for business logic
- Repositories for data access
- Models for data structures

**Error Handling and Validation**
Proper error handling is crucial for production APIs. We'll cover:
- Global error handling middleware
- Request validation using libraries like Joi or Zod
- Custom error classes and HTTP status codes

**Database Integration and ORM**
Using an ORM like Prisma or TypeORM can significantly improve development productivity while maintaining type safety across your data layer.

**Testing Strategies**
Comprehensive testing ensures your API remains reliable as it grows. We'll discuss unit testing, integration testing, and API testing strategies.

**Performance Optimization**
Learn about caching strategies, database optimization, and monitoring tools that help maintain performance at scale.`,
      category: "Software Engineering",
      tags: ["Node.js", "TypeScript", "API", "Backend"],
      author: "Your Name",
      date: "2025-06-10",
      readTime: "12 min read",
      image: "https://via.placeholder.com/600x300/339933/ffffff?text=Node.js+API",
      featured: true
    },
    {
      id: 3,
      title: "AI Integration in Modern Web Applications",
      excerpt: "How to seamlessly integrate AI capabilities into your web apps using modern APIs and frameworks.",
      content: `Artificial Intelligence is no longer confined to specialized applications. Modern web developers can now easily integrate AI capabilities into their applications, creating more intelligent and user-friendly experiences.

**The AI Integration Landscape**
The current AI ecosystem offers numerous APIs and services that make integration straightforward:
- OpenAI's GPT models for text generation and analysis
- Computer vision APIs for image processing
- Speech-to-text and text-to-speech services
- Machine learning models for predictions and recommendations

**Practical Implementation Strategies**
When integrating AI into web applications, consider these approaches:

1. **API-First Integration**: Use cloud-based AI services through APIs
2. **Edge AI**: Run smaller models directly in the browser
3. **Hybrid Approaches**: Combine multiple AI services for complex workflows

**User Experience Considerations**
AI features should enhance, not complicate, the user experience:
- Provide clear feedback during AI processing
- Implement fallback mechanisms for when AI services fail
- Allow users to understand and control AI-driven features

**Privacy and Ethics**
When working with AI, consider:
- Data privacy and user consent
- Bias in AI models and how to mitigate it
- Transparency about AI usage in your application

**Real-World Examples**
We'll explore practical examples of AI integration:
- Chatbots for customer service
- Content generation tools
- Smart search and recommendation systems
- Automated content moderation

The future of web development increasingly involves AI integration, and developers who master these skills will be well-positioned for success.`,
      category: "AI",
      tags: ["AI", "Machine Learning", "OpenAI", "Web Development"],
      author: "Your Name",
      date: "2025-06-05",
      readTime: "10 min read",
      image: "https://via.placeholder.com/600x300/ff6b6b/ffffff?text=AI+Integration",
      featured: true
    },
    {
      id: 4,
      title: "Modern CSS: Grid, Flexbox, and Beyond",
      excerpt: "Mastering modern CSS layout techniques for creating responsive and maintainable user interfaces.",
      content: `CSS has evolved significantly over the past few years, introducing powerful layout systems and new features that make creating responsive designs easier than ever.

**CSS Grid: The Ultimate Layout System**
CSS Grid revolutionized how we think about web layouts. Unlike flexbox, which is one-dimensional, Grid allows for two-dimensional layouts with precise control over both rows and columns.

**Flexbox: Perfect for Component-Level Layouts**
Flexbox excels at distributing space and aligning items within a container. It's perfect for navigation bars, card layouts, and centering content.

**Container Queries: The Future of Responsive Design**
Container queries allow components to adapt based on their container's size rather than the viewport size, enabling truly modular responsive design.

**CSS Custom Properties (Variables)**
CSS variables provide dynamic styling capabilities and make maintaining design systems much easier.

**Modern CSS Features**
- Aspect ratio property for maintaining proportions
- Logical properties for internationalization
- New color functions and gradients
- Scroll-snap for smooth scrolling experiences

**Best Practices**
- Use semantic HTML as the foundation
- Implement a mobile-first approach
- Leverage CSS Grid for page layouts and Flexbox for components
- Organize CSS with methodologies like BEM or utility-first approaches

Modern CSS provides all the tools needed to create beautiful, responsive, and maintainable user interfaces without relying heavily on frameworks.`,
      category: "Web Development",
      tags: ["CSS", "Grid", "Flexbox", "Responsive Design"],
      author: "Your Name",
      date: "2025-05-28",
      readTime: "7 min read",
      image: "https://via.placeholder.com/600x300/1572b6/ffffff?text=Modern+CSS",
      featured: false
    },
    {
      id: 5,
      title: "Microservices Architecture: Lessons Learned",
      excerpt: "Real-world insights from implementing microservices, including challenges and solutions.",
      content: `Microservices architecture has become increasingly popular, but implementing it successfully requires careful planning and consideration of trade-offs.

**When to Choose Microservices**
Microservices aren't always the right choice. Consider them when:
- Your team is large enough to manage multiple services
- You need independent deployment and scaling
- Different parts of your system have different technology requirements

**Key Challenges and Solutions**
1. **Service Communication**: Choose appropriate patterns (REST, gRPC, message queues)
2. **Data Consistency**: Implement saga patterns for distributed transactions
3. **Service Discovery**: Use tools like Consul or Kubernetes service discovery
4. **Monitoring**: Implement distributed tracing and centralized logging

**Development and Deployment**
- Use containerization for consistent environments
- Implement CI/CD pipelines for each service
- Consider API gateways for external communication
- Plan for service versioning and backward compatibility

**Team Organization**
The Conway's Law suggests that organizations design systems that mirror their communication structure. Align team boundaries with service boundaries for better outcomes.

**Lessons Learned**
- Start with a monolith and extract services gradually
- Invest heavily in monitoring and observability
- Automate everything to manage complexity
- Design for failure from the beginning

Microservices can provide significant benefits but require a mature development organization and robust tooling to implement successfully.`,
      category: "Software Engineering",
      tags: ["Microservices", "Architecture", "DevOps", "Scalability"],
      author: "Your Name",
      date: "2025-05-20",
      readTime: "15 min read",
      image: "https://via.placeholder.com/600x300/8b5cf6/ffffff?text=Microservices",
      featured: false
    },
    {
      id: 6,
      title: "The Rise of Edge Computing in Web Development",
      excerpt: "How edge computing is changing the way we build and deploy web applications for better performance.",
      content: `Edge computing is transforming web development by bringing computation closer to users, resulting in faster, more responsive applications.

**What is Edge Computing?**
Edge computing involves processing data closer to where it's generated, rather than in centralized data centers. For web applications, this means running code at edge locations distributed globally.

**Benefits for Web Applications**
- Reduced latency through geographic proximity
- Improved performance for dynamic content
- Better user experience across global audiences
- Reduced bandwidth costs

**Edge Computing Platforms**
- Cloudflare Workers: JavaScript runtime at the edge
- Vercel Edge Functions: Serverless functions with edge deployment
- AWS Lambda@Edge: Functions that run at CloudFront edge locations
- Fastly Compute@Edge: WebAssembly-based edge computing

**Use Cases**
1. **A/B Testing**: Run experiments without impacting origin servers
2. **Authentication**: Handle auth logic at the edge for faster responses
3. **Personalization**: Customize content based on user location or preferences
4. **API Aggregation**: Combine multiple API calls at the edge

**Implementation Considerations**
- Limited runtime environments compared to traditional servers
- Cold start considerations for serverless edge functions
- Debugging and monitoring distributed edge deployments
- Data consistency across edge locations

**The Future**
Edge computing will continue to evolve, with more sophisticated runtimes and better developer tools making it easier to build edge-native applications.

As users expect faster, more responsive web experiences, edge computing provides the infrastructure to meet these demands.`,
      category: "Web Development",
      tags: ["Edge Computing", "Performance", "CDN", "Serverless"],
      author: "Your Name",
      date: "2025-05-15",
      readTime: "9 min read",
      image: "https://via.placeholder.com/600x300/10b981/ffffff?text=Edge+Computing",
      featured: false
    }
  ];

  const categories = ["all", "Web Development", "Software Engineering", "AI"];
  
  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const openPostModal = (post: BlogPost) => {
    setSelectedPost(post);
  };

  return (
    <div className="blog-container">
      {/* Blog Hero Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="text-center">
            <h1 className="display-5 fw-bold mb-4">Tech Blog</h1>
            <p className="lead mb-4">
              Insights and experiences from the world of software engineering, web development, and AI
            </p>
            <div className="row text-center">
              <div className="col-md-4">
                <h3 className="display-6 fw-bold text-warning">{blogPosts.length}</h3>
                <p>Total Posts</p>
              </div>
              <div className="col-md-4">
                <h3 className="display-6 fw-bold text-warning">{categories.length - 1}</h3>
                <p>Categories</p>
              </div>
              <div className="col-md-4">
                <h3 className="display-6 fw-bold text-warning">10K+</h3>
                <p>Readers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">
            <i className="fas fa-star me-2 text-warning"></i>
            Featured Posts
          </h2>
          <div className="row">
            {featuredPosts.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6 mb-4">
                <article className="card border-0 shadow-lg card-hover h-100">
                  <img 
                    src={post.image} 
                    className="card-img-top" 
                    alt={post.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="badge bg-primary">{post.category}</span>
                      <small className="text-muted">{post.readTime}</small>
                    </div>
                    <h5 className="card-title">
                      <a 
                        href="#" 
                        className="text-decoration-none text-dark"
                        onClick={(e) => {
                          e.preventDefault();
                          openPostModal(post);
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#blogModal"
                      >
                        {post.title}
                      </a>
                    </h5>
                    <p className="card-text text-muted flex-grow-1">{post.excerpt}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div className="d-flex align-items-center">
                        <img 
                          src="https://via.placeholder.com/40x40/6c757d/ffffff?text=YN" 
                          className="rounded-circle me-2" 
                          alt="Author"
                          style={{ width: '30px', height: '30px' }}
                        />
                        <small className="text-muted">{post.author}</small>
                      </div>
                      <small className="text-muted">{formatDate(post.date)}</small>
                    </div>
                    <div className="d-flex flex-wrap gap-1 mt-2">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="badge bg-light text-dark small">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Blog Posts */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">
            <i className="fas fa-blog me-2 text-primary"></i>
            All Posts
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
                  {category === 'all' ? 'All Posts' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="row">
            {filteredPosts.map((post) => (
              <div key={post.id} className="col-lg-6 col-md-12 mb-4">
                <article className="card border-0 shadow-sm card-hover h-100">
                  <div className="row g-0 h-100">
                    <div className="col-md-4">
                      <img 
                        src={post.image} 
                        className="img-fluid rounded-start h-100" 
                        alt={post.title}
                        style={{ objectFit: 'cover', minHeight: '200px' }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body d-flex flex-column h-100">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="badge bg-secondary">{post.category}</span>
                          <small className="text-muted">{post.readTime}</small>
                        </div>
                        <h6 className="card-title">
                          <a 
                            href="#" 
                            className="text-decoration-none text-dark"
                            onClick={(e) => {
                              e.preventDefault();
                              openPostModal(post);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#blogModal"
                          >
                            {post.title}
                          </a>
                        </h6>
                        <p className="card-text text-muted small flex-grow-1">
                          {post.excerpt.substring(0, 100)}...
                        </p>
                        <div className="d-flex justify-content-between align-items-center mt-auto">
                          <small className="text-muted">{formatDate(post.date)}</small>
                          <button 
                            className="btn btn-outline-primary btn-sm"
                            onClick={() => openPostModal(post)}
                            data-bs-toggle="modal"
                            data-bs-target="#blogModal"
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h3 className="mb-4">Stay Updated</h3>
              <p className="mb-4">
                Subscribe to my newsletter for the latest insights on web development, 
                software engineering, and AI.
              </p>
              <form className="d-flex gap-2">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Enter your email"
                  required
                />
                <button type="submit" className="btn btn-warning px-4">
                  Subscribe
                </button>
              </form>
              <small className="text-light mt-2 d-block">
                No spam, unsubscribe at any time.
              </small>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Post Modal */}
      <div className="modal fade" id="blogModal" tabIndex={-1}>
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            {selectedPost && (
              <>
                <div className="modal-header">
                  <div>
                    <h4 className="modal-title">{selectedPost.title}</h4>
                    <div className="d-flex align-items-center gap-3 mt-2">
                      <span className="badge bg-primary">{selectedPost.category}</span>
                      <small className="text-muted">
                        By {selectedPost.author} • {formatDate(selectedPost.date)} • {selectedPost.readTime}
                      </small>
                    </div>
                  </div>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                  <img 
                    src={selectedPost.image} 
                    className="img-fluid mb-4 rounded" 
                    alt={selectedPost.title}
                  />
                  <div className="blog-content">
                    {selectedPost.content.split('\n\n').map((paragraph, index) => {
                      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                        return (
                          <h5 key={index} className="fw-bold text-primary mt-4 mb-3">
                            {paragraph.slice(2, -2)}
                          </h5>
                        );
                      }
                      return (
                        <p key={index} className="mb-3" style={{ lineHeight: '1.7' }}>
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                  <div className="d-flex flex-wrap gap-2 mt-4">
                    {selectedPost.tags.map((tag, index) => (
                      <span key={index} className="badge bg-light text-dark">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="modal-footer">
                  <div className="d-flex justify-content-between w-100">
                    <div className="d-flex gap-2">
                      <button className="btn btn-outline-primary">
                        <i className="fas fa-heart me-1"></i>
                        Like
                      </button>
                      <button className="btn btn-outline-primary">
                        <i className="fas fa-share me-1"></i>
                        Share
                      </button>
                    </div>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                      Close
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;