import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  { t: 'NovaPay Finance', cat: 'FINTECH', grad: 'linear-gradient(135deg, #1e293b, #0f172a)' },
  { t: 'Astra Space Labs', cat: 'AEROSPACE', grad: 'linear-gradient(135deg, #450a0a, #000)' },
  { t: 'MoveMint NFT', cat: 'WEB3', grad: 'linear-gradient(135deg, #064e3b, #022c22)' },
  { t: 'Lumina Health', cat: 'HEALTHCARE', grad: 'linear-gradient(135deg, #1e1b4b, #000)' }
];

const HorizontalWork = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} style={{ height: '300vh', position: 'relative', background: 'var(--bg)', padding: '0' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'absolute', top: '10%', left: '5%' }}>
          <span className="accent-label" style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.75rem', display: 'block', marginBottom: '1rem' }}>Selected Work</span>
          <h2 style={{ fontSize: '3.5rem' }}>Featured Cases</h2>
        </div>
        
        <motion.div style={{ x, display: 'flex', gap: '4rem', paddingLeft: '5%' }}>
          {projects.map((p, i) => (
            <motion.div
              key={i}
              style={{
                width: '600px',
                height: '400px',
                background: p.grad,
                borderRadius: '40px',
                flexShrink: 0,
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '3rem'
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div style={{ zIndex: 2 }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '2px', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem', display: 'block' }}>{p.cat}</span>
                <h3 style={{ fontSize: '2rem', color: '#fff', fontWeight: 500 }}>{p.t}</h3>
              </div>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', zIndex: 1 }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalWork;
