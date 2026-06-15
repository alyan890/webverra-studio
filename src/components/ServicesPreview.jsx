import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Layers, Monitor, Smartphone, Search, Code, Cpu } from 'lucide-react';

const services = [
  { t: 'Immersive Web Development', d: 'High-performance websites with cutting-edge 3D and interactive features.', i: <Layers /> },
  { t: 'Product Design', d: 'Intuitive user experiences and beautiful interfaces designed to convert.', i: <Monitor /> },
  { t: 'Mobile Apps', d: 'Seamless iOS and Android applications built for high growth.', i: <Smartphone /> },
  { t: 'SEO Optimization', d: 'Organic search strategies to put your brand at the top of search results.', i: <Search /> },
  { t: 'Full Stack Development', d: 'Robust backend architecture and high-scale technical systems.', i: <Code /> },
  { t: '3D Experiences', d: 'Immersive virtual environments and digital twins for modern brands.', i: <Cpu /> }
];

const Card = ({ s, i }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="service-card glass-box"
      style={{
        padding: '3.5rem 2.5rem',
        transition: '0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
    >
      <div style={{ color: 'var(--accent)', marginBottom: '2rem' }}>
        {s.i}
      </div>
      <h3 style={{ fontSize: '1.4rem', fontWeight: 500, marginBottom: '1rem' }}>{s.t}</h3>
      <p style={{ opacity: 0.6, fontSize: '0.95rem' }}>{s.d}</p>
    </motion.div>
  );
};

const ServicesPreview = () => {
  return (
    <section id="services" style={{ background: 'var(--bg-transparent)' }}>
      <div className="container">
        <div className="section-head" style={{ marginBottom: '5rem' }}>
          <span className="accent-label" style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.75rem', display: 'block', marginBottom: '1rem' }}>Services</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Our Expertise</h2>
        </div>
        
        <div className="services-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem' 
        }}>
          {services.map((s, i) => (
            <Card key={i} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
