import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

const CTA = () => {
  return (
    <section className="cta" style={{ background: 'var(--bg)', padding: '10rem 5%' }}>
      <div className="container" style={{ 
        background: 'var(--accent)', 
        padding: '8rem 2rem', 
        borderRadius: '60px', 
        textAlign: 'center',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1.5rem', fontWeight: 500 }}>
            Ready to build <br/> something iconic?
          </h2>
          <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Let's collaborate to create digital experiences that set your brand apart from the rest.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <MagneticButton>
              <a href="mailto:hello@webverra.com" className="btn" style={{ background: '#000', color: '#fff' }}>Start a Project</a>
            </MagneticButton>
          </div>
        </motion.div>
        
        {/* Animated Circle Decorations */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', top: '-10%', right: '-10%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}
        />
      </div>
    </section>
  );
};

export default CTA;
