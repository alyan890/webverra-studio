import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: "Design Strategy", desc: "Crafting unique brand identities that resonate." },
  { title: "Web Development", desc: "High-performance sites with seamless interaction." },
  { title: "3D Animation", desc: "Immersive experiences that push boundaries." }
];

const FeatureSection = () => {
  return (
    <section style={{ padding: '8rem 5%', background: 'transparent' }}>
      <style>
        {`
          @media (max-width: 768px) {
            .features-grid {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
            }
            .feature-title {
              font-size: 2.2rem !important;
              margin-bottom: 2.5rem !important;
            }
          }
        `}
      </style>
      <div className="container">
        <h2 className="feature-title" style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>Our Core Strengths</h2>
        <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              style={{ padding: '2.5rem', background: 'rgba(255, 255, 255, 0.5)', borderRadius: '30px', border: '1px solid var(--line)', backdropFilter: 'blur(10px)' }}
            >
              <h3 style={{ marginBottom: '1rem', color: 'var(--accent)', fontSize: '1.5rem' }}>{f.title}</h3>
              <p style={{ opacity: 0.7 }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
