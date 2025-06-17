import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';  // Make sure to create this file

function PageWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [location.key]);

  return (
    <div className={`page-content ${isLoading ? 'loading' : 'loaded'}`}>
      {!isLoading && children}
    </div>
  );
}

function App() {
  return (
    <div className="portfolio">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          } />
          <Route path="/about" element={
            <PageWrapper>
              <About />
            </PageWrapper>
          } />
          <Route path="/skills" element={
            <PageWrapper>
              <Skills />
            </PageWrapper>
          } />
          <Route path="/projects" element={
            <PageWrapper>
              <Projects />
            </PageWrapper>
          } />
          <Route path="/contact" element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;