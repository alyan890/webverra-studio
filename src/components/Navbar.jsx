import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false); 
      } else {
        setIsVisible(true); 
      }
      
      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false); 
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollY, isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const navLinks = ['About', 'Services', 'Work', 'Process', 'Contact'];

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`navbar ${isScrolled ? 'is-scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          padding: isScrolled ? '1rem 5%' : '2rem 5%',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: '0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          background: isScrolled ? 'var(--glass)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(15px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--line)' : 'none'
        }}
      >
        <Link to="/" className="logo" style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '2px', position: 'relative', zIndex: 1001 }}>
          WEBVERRA
        </Link>

        {!isMobile && (
          <div className="nav-links" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            {navLinks.map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="nav-link"
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  opacity: location.pathname === `/${item.toLowerCase()}` ? 1 : 0.6,
                  color: 'var(--text)'
                }}
              >
                {item}
              </Link>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {!isMobile && (
            <Link to="/contact" className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '0.7rem 1.5rem' }}>
              Start a Project
            </Link>
          )}

          {isMobile && (
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer', 
                color: 'var(--text)',
                position: 'relative',
                zIndex: 1001,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Menu size={28} /> 
            </button>
          )}
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && isMobile && ( 
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              background: 'var(--bg)',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem'
            }}
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text)',
                zIndex: 1002 
              }}
            >
              <X size={28} />
            </button>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
              {navLinks.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    to={`/${item.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)} 
                    style={{
                      fontSize: '2.5rem',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 300,
                      color: location.pathname === `/${item.toLowerCase()}` ? 'var(--accent)' : 'var(--text)'
                    }}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.1 }}
                style={{ marginTop: '2rem' }}
              >
                <Link to="/contact" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: '1.2rem 2.5rem', fontSize: '1rem' }}>
                  Start a Project
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
