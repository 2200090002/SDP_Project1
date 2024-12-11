// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>🌟 HappyWeb</h2>
        </div>
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">🌐 Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦 Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">📸 Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} HappyWeb. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
