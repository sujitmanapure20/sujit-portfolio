import { motion } from 'framer-motion';
import '../pages/Projects.css';

function Projects() {
  const projects = [
    {
      name: "Agrochain Management",
      tech: ["Java", "AWT", "Swing", "MySQL", "JDBC"],
      desc: "Inventory system for agriculture shops with automated reporting.",
      impact: ["Reduced manual errors by 80%", "Improved sales analysis by 50%"],
      image: `${process.env.PUBLIC_URL}/agrochain.png`,
      demoLink: "#",
      codeLink: "#"
    },
    {
      name: "Online Voting System",
      tech: ["HTML", "CSS", "JavaScript", "JSP", "MySQL"],
      desc: "Secure voting platform with live camera authentication.",
      impact: ["Prevented 90% fraud attempts", "Reduced verification time by 40%"],
      image: `${process.env.PUBLIC_URL}/onlinevotting.jpg`,
      demoLink: "#",
      codeLink: "#"
    },
    {
      name: "Lovely Glaze Beauty Studio",
      tech: ["Spring MVC", "Hibernate", "JSP", "Bootstrap"],
      desc: "Multi-module web platform for beauty services with real-time booking.",
      impact: ["Scalable backend architecture", "Responsive UI across devices"],
      image: `${process.env.PUBLIC_URL}/lovely.png`,
      demoLink: "#",
      codeLink: "#"
    },
    {
      name: "Library Management System",
      tech: ["HTML", "CSS", "JavaScript", "MySQL"],
      desc: "System with real-time book requests and optimized search.",
      impact: ["Reduced processing time by 60%", "35% faster searches"],
      image: `${process.env.PUBLIC_URL}/library.jpg`,
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My <span>Projects</span>
        </motion.h2>
        
        <motion.div 
          className="projects-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.name} />
                <div className="overlay">
                  <div className="tech-tags">
                    {project.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
                
                <div className="project-impact">
                  <h4>Impact:</h4>
                  <ul>
                    {project.impact.map((item, i) => (
                      <li key={i}>
                        <i className="fas fa-check-circle"></i> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-links">
                  <a href={project.demoLink} className="demo-btn" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-eye"></i> Demo
                  </a>
                  <a href={project.codeLink} className="code-btn" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;