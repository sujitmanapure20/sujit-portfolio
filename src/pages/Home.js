import { motion } from 'framer-motion';
import profilePhoto from '../Profile.jpeg';
import '../pages/Home.css';

function Home() {
  return (
    <section id="home" className="section home-section">
      <div className="container">
        <motion.div 
          className="home-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-content">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm <span>Sujit Manapure</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Java Full Stack Developer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Building innovative solutions with Java technologies and modern web frameworks
            </motion.p>
            <motion.div
              className="home-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a href="/projects" className="primary-btn">
                View My Work
              </a>
              <a href="/contact" className="secondary-btn">
                Contact Me
              </a>
            </motion.div>
          </div>
          <motion.div 
            className="profile-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="image-wrapper">
              <img src={profilePhoto} alt="Sujit Manapure" />
              <div className="image-border"></div>
              <div className="tech-icons">
                <div className="icon java">Java</div>
                <div className="icon spring">Spring</div>
                <div className="icon react">React</div>
                <div className="icon mysql">MySQL</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;