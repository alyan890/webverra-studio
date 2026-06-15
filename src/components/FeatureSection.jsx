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
      <div className="container">
        <h2 style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>Our Core Strengths</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              style={{ padding: '2rem', background: 'rgba(255, 255, 255, 0.5)', borderRadius: '20px', border: '1px solid var(--line)' }}
            >
              <h3 style={{ marginBottom: '1rem', color: 'var(--accent)' }}>{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
