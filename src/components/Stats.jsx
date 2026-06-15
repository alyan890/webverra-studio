import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Counter = ({ value, label }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  return (
    <div ref={ref} className="stat-item" style={{ textAlign: 'center' }}>
      <h3 style={{ fontSize: '4rem', fontWeight: 300, marginBottom: '0.5rem' }}>
        <motion.span>{displayValue}</motion.span>
        {label.includes('+') ? '+' : ''}
        {label.includes('%') ? '%' : ''}
        {label.includes('M') ? 'M+' : ''}
      </h3>
      <p style={{ fontSize: '0.8rem', fontWeight: 600, opacity: 0.4, letterSpacing: '1px' }}>
        {label.replace(/[+%M]/g, '')}
      </p>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { n: 50, l: 'PROJECTS' },
    { n: 98, l: 'SATISFACTION %' },
    { n: 12, l: 'REVENUE M+' },
    { n: 15, l: 'AWARDS +' }
  ];

  return (
    <section className="stats" style={{ background: 'var(--bg-transparent)', padding: '6rem 5%' }}>
      <div className="container glass-box" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '4rem',
        padding: '6rem'
      }}>
        {stats.map((s, i) => (
          <Counter key={i} value={s.n} label={s.l} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
