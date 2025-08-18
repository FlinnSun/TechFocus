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
              <p><span className="orange-text">Always</span> Advancing</p>
              <p className="footer-mission">Our mission is to exceed our government customers' expectations while maintaining an unparalleled level of service.</p>
              <div className="footer-vertical-line"></div>
              <div className="footer-nav-links">
                <div className="footer-nav-item">Company</div>
                <div className="footer-nav-item">Capabilities</div>
                <div className="footer-nav-item">Careers</div>
              </div>
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
            <img src="/images/WechatIMG46.jpg" alt="TechFocus Logo" />
          </div>
        </div>
        
        <div className="footer-divider"></div>
      </div>
    </footer>
  );
};

export default Footer; 