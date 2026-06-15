import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ 
      padding: '8rem 5% 4rem', 
      background: 'var(--white)', 
      borderTop: '1px solid var(--line)' 
    }}>
      <style>
        {`
          @media (max-width: 768px) {
            .footer-grid {
              grid-template-columns: 1fr 1fr !important;
              gap: 3rem 2rem !important;
            }
            .f-info {
              grid-column: span 2;
            }
            .footer-bottom {
              flex-direction: column;
              gap: 1.5rem;
              text-align: center;
              align-items: center;
            }
            .footer-bottom-links {
              gap: 1.5rem !important;
            }
          }
          @media (max-width: 480px) {
            .footer-grid {
              grid-template-columns: 1fr !important;
            }
            .f-info {
              grid-column: span 1;
            }
          }
        `}
      </style>
      <div className="container footer-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '4rem' 
      }}>
        <div className="f-info">
          <h2 style={{ fontWeight: 800, letterSpacing: '2px', marginBottom: '1.5rem' }}>WEBVERRA</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '300px', opacity: 0.6 }}>
            WebVerra Studio crafts high performance websites and digital products for brands that want to lead the future.
          </p>
        </div>
        
        <div className="f-links">
          <h4 style={{ fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.9rem', opacity: 0.4 }}>LINKS</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {['About', 'Services', 'Work', 'Process', 'Contact'].map(item => (
              <li key={item}>
                <Link to={`/${item.toLowerCase()}`} style={{ fontSize: '0.9rem', opacity: 0.7 }}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="f-contact">
          <h4 style={{ fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.9rem', opacity: 0.4 }}>CONTACT</h4>
          <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>hello@webverra.com</p>
          <p style={{ fontSize: '0.9rem' }}>Washington, D.C.</p>
        </div>
        
        <div className="f-social">
          <h4 style={{ fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.9rem', opacity: 0.4 }}>SOCIAL</h4>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Twitter', 'LinkedIn', 'Instagram'].map(item => (
              <a key={item} href="#" style={{ fontSize: '0.9rem', opacity: 0.7 }}>{item}</a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container footer-bottom" style={{ 
        marginTop: '6rem', 
        paddingTop: '2rem', 
        borderTop: '1px solid var(--line)',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.8rem',
        opacity: 0.5
      }}>
        <p>© {new Date().getFullYear()} WEBVERRA STUDIO. ALL RIGHTS RESERVED.</p>
        <div className="footer-bottom-links" style={{ display: 'flex', gap: '2rem' }}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
