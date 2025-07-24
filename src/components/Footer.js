import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-info">
              <p>TechFocus LLC.© 2025</p>
              <p>All rights reserved.English</p>
            </div>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/techfocus-llc/" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="/images/r1.png" alt="LinkedIn - TechFocus LLC" />
              </a>
              <Link to="/contact" className="social-link">
                <img src="/images/r2.png" alt="Contact Us" />
              </Link>
              <Link to="/contact" className="social-link">
                <img src="/images/r3.png" alt="Contact Us" />
              </Link>
            </div>
          </div>
          <div className="footer-logo">
            <img src="/images/WechatIMG46.svg" alt="TechFocus Logo" />
          </div>
        </div>
        
        <div className="footer-divider"></div>
      </div>
    </footer>
  );
};

export default Footer; 