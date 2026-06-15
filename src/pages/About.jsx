import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="about-page" style={{ background: 'var(--bg-transparent)' }}>
      <style>
        {`
          @media (max-width: 768px) {
            .about-hero {
              height: auto !important;
              padding-top: 8rem !important;
              padding-bottom: 4rem !important;
            }
            .story-grid {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
            }
            .story-img {
              height: 300px !important;
            }
            .values-grid {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
            }
            .value-box {
              padding: 2rem !important;
            }
          }
        `}
      </style>
      {/* Hero Section */}
      <section className="about-hero" style={{ height: '70vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.5, y: 0 }}
            style={{ fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem', display: 'block', marginBottom: '2rem' }}
          >
            About WebVerra
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', maxWidth: '900px' }}
          >
            We define the <span className="text-orange">future</span> of digital storytelling.
          </motion.h1>
        </div>
      </section>

      {/* Story Section */}
      <section style={{ background: '#fff' }}>
        <div className="container story-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Our Story</h2>
            <p style={{ opacity: 0.7, fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Founded in 2026, WebVerra Studio was born out of a desire to merge high-end aesthetics with complex engineering. We believe every brand has a story that deserves to be told through immersive digital experiences.
            </p>
            <p style={{ opacity: 0.7, fontSize: '1.1rem' }}>
              Our team of multidisciplinary designers and developers works at the intersection of creativity and technology, pushing the boundaries of what's possible in the browser.
            </p>
          </div>
          <div className="story-img" style={{ height: '500px', background: 'var(--secondary)', borderRadius: '40px' }} />
        </div>
      </section>

      {/* Mission & Values */}
      <section>
        <div className="container">
          <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
            {[
              { t: 'Innovation', d: 'We never settle for the ordinary. We constantly explore new technologies.' },
              { t: 'Elegance', d: 'Design is not just how it looks, but how it feels. We prioritize refined aesthetics.' },
              { t: 'Performance', d: 'Beauty without speed is useless. Our experiences are built for 60fps performance.' },
              { t: 'Partnership', d: 'We don\'t just work for you, we work with you as a strategic partner.' }
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{ padding: '3rem' }}
                className="glass-box value-box"
              >
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 500 }}>{v.t}</h3>
                <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
