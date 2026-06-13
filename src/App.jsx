import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import './index.css';

// --- CUSTOM 3D BACKGROUND ---
const ThreeBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const particlesCount = 3000;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 15;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      size: 0.015,
      color: 0xff6b00,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.z = 5;

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5);
      mouseY = (e.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.0008;
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) containerRef.current.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={containerRef} className="three-canvas-container" />;
};

// --- COMPONENTS ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo">WEBVERRA</a>
        <div className="nav-links">
          {['About', 'Tech', 'Services', 'Work', 'Process'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">{link}</a>
          ))}
        </div>
        <a href="#contact" className="cta-button-nav">START A PROJECT</a>
      </div>
    </nav>
  );
};

// --- MAIN APP ---

export default function App() {
  return (
    <div className="app-root">
      <ThreeBackground />
      <div className="ui-root">
        <Navbar />
        
        <main>
          {/* HERO */}
          <section id="home" className="hero">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="hero-inner"
            >
              <div className="eyebrow-container">
                <span className="hero-eyebrow">PREMIUM DIGITAL CRAFT</span>
              </div>
              <h1>UNLEASH YOUR <br/> <span className="text-orange">DIGITAL POTENTIAL</span></h1>
              <p>We build high-performance 3D websites and immersive digital products for brands that want to lead the future.</p>
              <div className="hero-actions">
                <a href="#work" className="btn-gradient">EXPLORE WORK</a>
                <a href="#contact" className="btn-outline">GET IN TOUCH</a>
              </div>
            </motion.div>
          </section>

          {/* STATS */}
          <section className="section">
            <div className="stats-bar">
              {[
                { n: '50+', l: 'PROJECTS DELIVERED' },
                { n: '98%', l: 'CLIENT SATISFACTION' },
                { n: '12M+', l: 'REVENUE GENERATED' },
                { n: '15+', l: 'GLOBAL AWARDS' }
              ].map((s, i) => (
                <div key={i} className="stat-item">
                  <h3>{s.n}</h3>
                  <p>{s.l}</p>
                </div>
              ))}
            </div>
          </section>

          {/* TECH STACK */}
          <section id="tech" className="section">
            <div className="section-head">
              <span className="accent-label">OUR ENGINE</span>
              <h2>Advanced Tech Stack</h2>
            </div>
            <div className="tech-grid">
              {[
                { i: '⚛️', t: 'React 19', d: 'The foundation for our high-performance, reactive interfaces.', tag: 'CORE' },
                { i: '🌀', t: 'Three.js', d: 'Driving immersive 3D experiences directly in the browser.', tag: '3D' },
                { i: '✨', t: 'Framer Motion', d: 'Smooth, physics-based animations that feel natural.', tag: 'ANIM' },
                { i: '⚡', t: 'Vite', d: 'Ultra-fast build tooling for instant development and deployment.', tag: 'SPEED' },
                { i: '🛠️', t: 'Node.js', d: 'Scalable backend architecture for complex data handling.', tag: 'SERVER' },
                { i: '🎨', t: 'Vanilla CSS', d: 'Custom-crafted styles for unique, non-template identities.', tag: 'STYLE' }
              ].map((tech, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="tech-card"
                >
                  <span className="tech-tag">{tech.tag}</span>
                  <span className="tech-icon">{tech.i}</span>
                  <h4>{tech.t}</h4>
                  <p>{tech.d}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* SERVICES */}
          <section id="services" className="section">
            <div className="section-head">
              <span className="accent-label">SERVICES</span>
              <h2>How We Help</h2>
            </div>
            <div className="card-grid">
              {[
                { t: 'Immersive Web', d: '3D web experiences that engage users and tell a powerful brand story.' },
                { t: 'Product Design', d: 'From concept to MVP, we design intuitive interfaces that users love.' },
                { t: 'Development', d: 'Clean, scalable code using the latest modern frameworks and standards.' }
              ].map((s, i) => (
                <div key={i} className="glass-card">
                  <div className="dot" />
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* WORK */}
          <section id="work" className="section">
            <div className="section-head">
              <span className="accent-label">SELECTED CASES</span>
              <h2>Recent Work</h2>
            </div>
            <div className="work-grid">
              {[
                { t: 'NovaPay Finance', tag: 'FINTECH', grad: 'grad-1' },
                { t: 'Astra Space Labs', tag: 'AEROSPACE', grad: 'grad-2' },
                { t: 'MoveMint NFT', tag: 'WEB3', grad: 'grad-3' }
              ].map((p, i) => (
                <div key={i} className="work-card-large">
                  <div className={`work-preview ${p.grad}`}>
                    <div className="preview-overlay" />
                  </div>
                  <div className="work-meta">
                    <span className="tag">{p.tag}</span>
                    <h3>{p.t}</h3>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </section>

          {/* PROCESS */}
          <section id="process" className="section">
            <div className="section-head">
              <span className="accent-label">STRATEGY</span>
              <h2>Our Process</h2>
            </div>
            <div className="process-steps">
              {[
                { n: '01', t: 'Discovery', d: 'We dive deep into your brand, audience, and goals to build a roadmap.' },
                { n: '02', t: 'Design', d: 'Iterative prototyping and high-fidelity design focused on UX and aesthetics.' },
                { n: '03', t: 'Build', d: 'Precision engineering and 3D integration to bring the vision to life.' }
              ].map((step, i) => (
                <div key={i} className="step">
                  <span className="step-num">{step.n}</span>
                  <div className="step-content">
                    <h3>{step.t}</h3>
                    <p>{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="contact-cta">
            <div className="cta-inner">
              <h2>Ready to build <br/> something iconic?</h2>
              <a href="mailto:hello@webverra.com" className="btn-gradient">START A PROJECT</a>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="footer-wrap">
            <div className="f-main">
              <span className="footer-logo">WEBVERRA</span>
              <p>© {new Date().getFullYear()} STUDIO. ALL RIGHTS RESERVED.</p>
            </div>
            <div className="footer-links">
              <div className="f-column">
                <h4>LINKS</h4>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#work">Work</a></li>
                  <li><a href="#tech">Tech Stack</a></li>
                </ul>
              </div>
              <div className="f-column">
                <h4>SOCIAL</h4>
                <ul>
                  <li><a href="#">X / Twitter</a></li>
                  <li><a href="#">LinkedIn</a></li>
                  <li><a href="#">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
