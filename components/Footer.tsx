import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../types';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <img src="/logo.jpg" alt="Logo" className="footer-logo" />
          <h3>Fruits Heaven</h3>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to={Page.HOME}>Home</Link>
          <Link to={Page.MENU}>Menu</Link>
          <Link to={Page.WHY_US}>Why Us</Link>
        </div>
        <div className="footer-address">
          <h4>Visit Us</h4>
          <p style={{ color: '#adb5bd', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            📍 123, Rajahmundry
          </p>
          <p style={{ color: '#adb5bd', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            📞 +123 456 7890<br />
            ✉️ hello@fruitsheaven.com
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="#" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L22 2l-2.1 4.7a8.38 8.38 0 0 1 .9 3.8z" /></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom center">
        <p>&copy; 2026 Fruits Heaven. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;