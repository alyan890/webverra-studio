import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { t: 'Immersive Web Development', d: 'We build high-performance websites that push the boundaries of the browser. Using advanced animations and interactive 3D elements, we create digital experiences that captivate users and tell your brand story in an unforgettable way.', long: 'Our development process focuses on silky-smooth 60fps performance, ensuring that even the most complex animations feel natural and responsive.' },
  { t: 'Product Design', d: 'Our design philosophy is rooted in minimal elegance and intuitive usability. We don\'t just make things look pretty; we solve complex business problems through thoughtful user experience design and beautiful interfaces.', long: 'We work closely with your team to define user journeys, build high-fidelity prototypes, and deliver a design system that scales with your growth.' },
  { t: '3D Experiences', d: 'Step into the future with immersive virtual environments. We specialize in creating custom 3D experiences that run directly in the browser, from interactive product showcases to entire virtual showrooms.', long: 'Our expertise in Three.js and WebGL allows us to bring depth and immersion to the web without the need for external plugins or high-end hardware.' }
];

const ServiceSection = ({ s, i }) => {
  const isEven = i % 2 === 0;

  return (
    <section style={{ background: isEven ? 'var(--bg-transparent)' : '#fff' }}>
      <div className="container service-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '6rem',
        alignItems: 'center'
      }}>
        <motion.div 
          className="service-text"
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{ order: isEven ? 1 : 2 }}
        >
          <span style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.8rem', marginBottom: '1.5rem', display: 'block' }}>0{i+1}</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '2rem' }}>{s.t}</h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.7, marginBottom: '1.5rem', lineHeight: '1.8' }}>{s.d}</p>
          <p style={{ fontSize: '0.95rem', opacity: 0.5 }}>{s.long}</p>
        </motion.div>
        
        <motion.div 
          className="service-img"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{ 
            order: isEven ? 2 : 1,
            height: '500px',
            background: 'var(--secondary)',
            borderRadius: '40px',
            overflow: 'hidden'
          }}
        />
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <div className="services-page">
      <style>
        {`
          @media (max-width: 768px) {
            .service-grid {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
            }
            .service-text {
              order: 2 !important;
            }
            .service-img {
              order: 1 !important;
              height: 300px !important;
            }
          }
        `}
      </style>
      <section style={{ paddingBottom: '2rem', paddingTop: '8rem' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '1rem' }}>Our Services</h1>
          <p style={{ opacity: 0.6, fontSize: '1.2rem', maxWidth: '600px' }}>
            Tailored digital solutions for brands that demand excellence and refuse to look ordinary.
          </p>
        </div>
      </section>
      
      {services.map((s, i) => (
        <ServiceSection key={i} s={s} i={i} />
      ))}
    </div>
  );
};

export default Services;
