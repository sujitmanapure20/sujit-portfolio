import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import '../components/Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // NEW STATE
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <motion.div
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
         
        </motion.div>

        {/* Hamburger Toggle Button */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        </div>

        <div className={`nav-content ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            {[
              { path: '/', name: 'Home' },
              { path: '/about', name: 'About' },
              { path: '/skills', name: 'Skills' },
              { path: '/projects', name: 'Projects' },
              { path: '/contact', name: 'Contact' }
            ].map((item) => (
              <li key={item.path} onClick={() => setMenuOpen(false)}>
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div className="underline" layoutId="underline" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="resume-container">
            <a
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              className="resume-btn"
              download="Sujit_Manapure_Resume.pdf"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
