import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  { n: '01', t: 'Discovery', d: 'We dive deep into your brand, audience, and goals to build a roadmap.' },
  { n: '02', t: 'Strategy', d: 'Defining the technical architecture and creative direction for the project.' },
  { n: '03', t: 'Design', d: 'Iterative prototyping and high-fidelity design focused on UX and aesthetics.' },
  { n: '04', t: 'Development', d: 'Precision engineering and immersive integration to bring the vision to life.' },
  { n: '05', t: 'Launch', d: 'Thorough testing and deployment to ensure a flawless first impression.' },
  { n: '06', t: 'Growth', d: 'Continuous optimization and support to help your brand lead the future.' }
];

const Process = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.5", "end 0.5"]
  });

  return (
    <div className="process-page" style={{ background: 'var(--bg-transparent)' }}>
      <section>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '1rem' }}>Our Process</h1>
          <p style={{ opacity: 0.6, fontSize: '1.2rem', maxWidth: '600px', marginBottom: '8rem' }}>
            A disciplined approach to creativity. We follow a proven methodology to deliver world-class digital products.
          </p>
          
          <div ref={containerRef} style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            {/* Animated Line */}
            <motion.div 
              style={{ 
                position: 'absolute', 
                left: '20px', 
                top: 0, 
                width: '2px', 
                height: '100%', 
                background: 'var(--line)',
                zIndex: 0
              }} 
            />
            <motion.div 
              style={{ 
                position: 'absolute', 
                left: '20px', 
                top: 0, 
                width: '2px', 
                height: '100%', 
                background: 'var(--accent)',
                scaleY: scrollYProgress,
                transformOrigin: 'top',
                zIndex: 1
              }} 
            />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  style={{ display: 'flex', gap: '4rem', position: 'relative', zIndex: 2 }}
                >
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    background: 'var(--white)', 
                    border: '1px solid var(--line)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)' }} />
                  </div>
                  
                  <div>
                    <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.8rem', marginBottom: '1rem', display: 'block' }}>{s.n}</span>
                    <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 500 }}>{s.t}</h3>
                    <p style={{ fontSize: '1.1rem', opacity: 0.6, lineHeight: '1.7' }}>{s.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
