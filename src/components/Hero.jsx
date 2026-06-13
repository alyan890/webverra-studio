import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

const Hero = () => {
  const sentence = "We Build Digital Experiences That Move People".split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="hero" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--bg)' }}>
      <div className="container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: '900px' }}
        >
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 0.5 }} 
            transition={{ delay: 0.5 }}
            style={{ fontSize: '0.9rem', fontWeight: 600, letterSpacing: '2px', display: 'block', marginBottom: '1.5rem', textTransform: 'uppercase' }}
          >
            WebVerra Studio — 2026
          </motion.span>
          
          <h1 style={{ fontSize: 'clamp(3.5rem, 10vw, 7.5rem)', marginBottom: '2.5rem' }}>
            {sentence.map((word, index) => (
              <motion.span
                variants={child}
                style={{ display: 'inline-block', marginRight: '0.25em' }}
                key={index}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '3.5rem', opacity: 0.7 }}
          >
            WebVerra Studio crafts high performance websites, immersive 3D experiences and digital products for brands that want to lead the future.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
            style={{ display: 'flex', gap: '1.5rem' }}
          >
            <MagneticButton>
              <a href="#work" className="btn btn-primary">Our Portfolio</a>
            </MagneticButton>
            <MagneticButton>
              <a href="#contact" className="btn btn-outline">Let's Talk</a>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background Gradient Glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '40vw',
        height: '40vw',
        background: 'radial-gradient(circle, rgba(255, 107, 0, 0.15) 0%, transparent 70%)',
        zIndex: -1,
        filter: 'blur(100px)'
      }} />
    </section>
  );
};

export default Hero;
