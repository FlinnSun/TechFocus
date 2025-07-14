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
          
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#solution">Solution</a></li>
              <li><a href="#contract">Contract vehicels</a></li>
              <li><a href="#careers">Career</a></li>
              <li><a href="#news">News</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Primary Service</h4>
            <ul>
              <li><a href="#">Data Analytics & AI/ML</a></li>
              <li><a href="#">Cloud & Infrastructure Engineering</a></li>
              <li><a href="#">Cybersecurity</a></li>
              <li><a href="#">Agile Software Development</a></li>
              <li><a href="#">IT Support Services</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-divider"></div>
      </div>
    </footer>
  );
};

export default Footer; 