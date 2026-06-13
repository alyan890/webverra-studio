import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { t: 'NovaPay Finance', cat: 'FINTECH', grad: 'linear-gradient(135deg, #1e293b, #0f172a)' },
  { t: 'Astra Space Labs', cat: 'AEROSPACE', grad: 'linear-gradient(135deg, #450a0a, #000)' },
  { t: 'MoveMint NFT', cat: 'WEB3', grad: 'linear-gradient(135deg, #064e3b, #022c22)' },
  { t: 'Lumina Health', cat: 'HEALTHCARE', grad: 'linear-gradient(135deg, #1e1b4b, #000)' },
  { t: 'Velocity Racing', cat: 'E-COMMERCE', grad: 'linear-gradient(135deg, #334155, #0f172a)' },
  { t: 'Zenith Architecture', cat: 'REAL ESTATE', grad: 'linear-gradient(135deg, #57534e, #1c1917)' }
];

const Work = () => {
  return (
    <div className="work-page" style={{ background: 'var(--bg)' }}>
      <section>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '1rem' }}>Our Work</h1>
          <p style={{ opacity: 0.6, fontSize: '1.2rem', maxWidth: '600px', marginBottom: '5rem' }}>
            A showcase of digital products and immersive experiences we've crafted for forward-thinking brands.
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', 
            gap: '3rem' 
          }}>
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                style={{ 
                  borderRadius: '40px', 
                  overflow: 'hidden', 
                  background: '#fff', 
                  border: '1px solid var(--line)',
                  cursor: 'pointer'
                }}
              >
                <div style={{ 
                  height: '450px', 
                  background: p.grad, 
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ width: '100%', height: '100%' }}
                  />
                  <div style={{ position: 'absolute', top: '2rem', right: '2rem' }}>
                    <span style={{ 
                      padding: '0.5rem 1rem', 
                      background: 'rgba(255,255,255,0.1)', 
                      backdropFilter: 'blur(10px)', 
                      borderRadius: '100px', 
                      color: '#fff', 
                      fontSize: '0.7rem', 
                      fontWeight: 700, 
                      letterSpacing: '1px' 
                    }}>
                      {p.cat}
                    </span>
                  </div>
                </div>
                <div style={{ padding: '2.5rem' }}>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 500 }}>{p.t}</h3>
                  <p style={{ opacity: 0.4, marginTop: '0.5rem', fontSize: '0.9rem' }}>View Case Study</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
