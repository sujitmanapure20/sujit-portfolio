import '../components/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>© {new Date().getFullYear()} Sujit Manapure. All rights reserved.</p>
        <div className="social-links">
          <a href="https://linkedin.com/in/sujitmanapure" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:sujitmanpure2002@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="tel:+919284389450">
            <i className="fas fa-phone"></i>
          </a>
          <a href="https://github.com/sujitmanapure20" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;