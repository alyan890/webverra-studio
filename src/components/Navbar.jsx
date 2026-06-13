import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
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
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
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
      <Link to="/" className="logo" style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '2px' }}>
        WEBVERRA
      </Link>

      <div className="nav-links" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        {['About', 'Services', 'Work', 'Process', 'Contact'].map((item) => (
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

      <Link to="/contact" className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '0.7rem 1.5rem' }}>
        Start a Project
      </Link>
    </motion.nav>
  );
};

export default Navbar;
