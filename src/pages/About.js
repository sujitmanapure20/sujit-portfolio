import { motion } from 'framer-motion';
import styles from './about.module.css';

function About() {
  return (
    <motion.section
      id="about"
      className={`section ${styles.aboutSection}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className={styles.container}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About <span>Me</span>
        </motion.h2>
        <div className={styles.aboutContent}>
          <motion.div 
            className={styles.aboutText}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Who am I?</h3>
            <p>
              I'm a passionate Full Stack Developer specializing in Java technologies with a B.Tech in Computer Science from Guru Nanak Institute of Technology, Nagpur. I love building efficient, scalable applications that solve real-world problems.
            </p>
            <p>
              With expertise in Spring Boot, Hibernate, and modern frontend technologies, I create seamless full-stack solutions. My projects demonstrate measurable impact, like reducing manual errors by 80% in inventory systems.
            </p>
            <div className={styles.personalInfo}>
              <div>
                <span>Name:</span>
                <p>Sujit Manapure</p>
              </div>
              <div>
                <span>Email:</span>
                <p>sujitmanpure2002@gmail.com</p>
              </div>
              <div>
                <span>Education:</span>
                <p>B.Tech (CSE), CGPA: 8.14</p>
              </div>
              <div>
                <span>From:</span>
                <p>Nagpur, Maharashtra</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
  className={styles.achievements}
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  viewport={{ once: true }}
>
  <div className={styles.achievementCard}>
    <h3>Certifications</h3>
    <ul>
      <li>
        <i className="fas fa-certificate"></i>
        <div>
          <span>Java Full Stack Development</span>
          <p>H.S. Group Institute (2024–25)</p>
        </div>
      </li>
    </ul>
  </div>

  <div className={styles.achievementCard}>
    <h3>Achievements</h3>
    <ul>
      <li>
        <i className="fas fa-trophy"></i>
        <div>
          <span>2nd Place</span>
          <p>in College Project Competition</p>
        </div>
      </li>
      <li>
        <i className="fas fa-code"></i>
        <div>
          <span>Solved 100+</span>
          <p>DSA Problems</p>
        </div>
      </li>
      <li>
        <i className="fas fa-project-diagram"></i>
        <div>
          <span>Developed 4+</span>
          <p>Impactful Projects</p>
        </div>
      </li>
    </ul>
  </div>
</motion.div>

        </div>
      </div>
    </motion.section>
  );
}

export default About;