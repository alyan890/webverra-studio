import React from 'react';
import { motion } from 'framer-motion';

const Input = ({ label, type = "text", placeholder }) => (
  <div style={{ marginBottom: '2.5rem', width: '100%' }}>
    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, opacity: 0.4, marginBottom: '0.8rem', textTransform: 'uppercase' }}>{label}</label>
    <motion.input
      whileFocus={{ borderColor: 'var(--accent)' }}
      type={type}
      placeholder={placeholder}
      style={{
        width: '100%',
        padding: '1.2rem 0',
        background: 'transparent',
        border: 'none',
        borderBottom: '1px solid var(--line)',
        fontSize: '1.2rem',
        outline: 'none',
        transition: '0.3s'
      }}
    />
  </div>
);

const Contact = () => {
  return (
    <div className="contact-page" style={{ background: 'var(--bg-transparent)' }}>
      <style>
        {`
          @media (max-width: 1024px) {
            .contact-grid {
              gap: 4rem !important;
            }
          }
          @media (max-width: 768px) {
            .contact-grid {
              grid-template-columns: 1fr !important;
              gap: 4rem !important;
              padding-top: 6rem !important;
            }
            .contact-form-box {
              padding: 2.5rem 1.5rem !important;
            }
          }
        `}
      </style>
      <section>
        <div className="container contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '8rem', paddingTop: '4rem' }}>
          <div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', marginBottom: '2rem' }}>Let's build the <span className="text-orange">future</span> together.</h1>
            <p style={{ opacity: 0.6, fontSize: '1.1rem', maxWidth: '500px', marginBottom: '4rem' }}>
              Have a project in mind? We'd love to hear from you. Drop us a line and let's start a conversation.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '0.8rem', opacity: 0.4, marginBottom: '0.5rem' }}>EMAIL US</h4>
                <p style={{ fontSize: '1.2rem' }}>hello@webverra.com</p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.8rem', opacity: 0.4, marginBottom: '0.5rem' }}>VISIT US</h4>
                <p style={{ fontSize: '1.2rem' }}>Washington, D.C. <br/> United States</p>
              </div>
            </div>
          </div>
          
          <motion.div
            className="glass-box contact-form-box"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ padding: '4rem' }}
          >
            <form onSubmit={(e) => e.preventDefault()}>
              <Input label="Your Name" placeholder="John Doe" />
              <Input label="Email Address" type="email" placeholder="john@example.com" />
              <div style={{ marginBottom: '3rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, opacity: 0.4, marginBottom: '0.8rem', textTransform: 'uppercase' }}>Your Message</label>
                <textarea
                  placeholder="Tell us about your project..."
                  style={{
                    width: '100%',
                    padding: '1.2rem 0',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid var(--line)',
                    fontSize: '1.2rem',
                    outline: 'none',
                    minHeight: '150px',
                    resize: 'none',
                    fontFamily: 'inherit'
                  }}
                />
              </div>
              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1.5rem' }}>
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
