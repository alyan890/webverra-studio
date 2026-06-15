import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { t: 'NovaPay Finance', cat: 'FINTECH', grad: 'linear-gradient(135deg, #1e293b, #0f172a)' },
  { t: 'Astra Space Labs', cat: 'AEROSPACE', grad: 'linear-gradient(135deg, #450a0a, #000)' },
  { t: 'MoveMint NFT', cat: 'WEB3', grad: 'linear-gradient(135deg, #064e3b, #022c22)' },
  { t: 'Lumina Health', cat: 'HEALTHCARE', grad: 'linear-gradient(135deg, #1e1b4b, #000)' }
];

const VerticalWork = () => {
  return (
    <section className="vertical-work" style={{ background: 'var(--bg-transparent)', padding: '10rem 5%' }}>
      <div className="container">
        <div style={{ marginBottom: '5rem' }}>
          <span className="accent-label" style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.75rem', display: 'block', marginBottom: '1rem' }}>Selected Work</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Featured Cases</h2>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="glass-box"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '3rem',
                padding: '2rem'
              }}
            >
              <div style={{ 
                width: '400px', 
                height: '300px', 
                background: p.grad, 
                borderRadius: '30px',
                flexShrink: 0
              }} />
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', color: 'var(--accent)', marginBottom: '0.5rem', display: 'block' }}>{p.cat}</span>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{p.t}</h3>
                <a href="/work" className="btn btn-outline" style={{ marginTop: '1rem' }}>View Case Study</a>
              </div>
            </motion.div>
          ))}
          
          <div className="glass-box" style={{ padding: '4rem', textAlign: 'center', marginTop: '3rem' }}>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to push boundaries?</h3>
            <p style={{ fontSize: '1.1rem', opacity: 0.7, marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>We combine engineering precision with design excellence to build the next generation of digital products.</p>
            <a href="/work" className="btn btn-primary">View All Work</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerticalWork;
