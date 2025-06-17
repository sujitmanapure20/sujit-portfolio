import { motion } from 'framer-motion';
import '../pages/Skills.css';

function Skills() {
  const skills = [
    { name: "Java",  icon: "fab fa-java" },
    { name: "Spring Boot", icon: "fas fa-leaf" },
    { name: "Hibernate",  icon: "fas fa-database" },
    { name: "MySQL",  icon: "fas fa-database" },
    { name: "HTML/CSS",  icon: "fab fa-html5" },
    { name: "JavaScript",  icon: "fab fa-js" },
    { name: "Bootstrap",  icon: "fab fa-bootstrap" },
    { name: "Git/GitHub",  icon: "fab fa-git-alt" },
    { name: "REST API",  icon: "fas fa-code-branch" },
    { name: "JSP",  icon: "fas fa-file-code" },
    { name: "JDBC",  icon: "fas fa-plug" },
    { name: "SDLC", icon: "fas fa-project-diagram" }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My <span>Skills</span>
        </motion.h2>
        <motion.div 
          className="skills-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="skill-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="skill-info">
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
              </div>
             
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;