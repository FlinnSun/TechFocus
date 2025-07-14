import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services section" id="solution">
      <div className="container">
        <h2 className="section-title">Mission areas</h2>
        <div className="section-line"></div>
        
        {/* IT Service 部分 - 左图右文 */}
        <div className="service-section">
          <div className="service-image-left">
            <img 
              src="/images/software.jpg" 
              alt="IT Service"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.style.backgroundColor = '#1a1a2e';
                e.target.parentElement.innerHTML = '<div class="icon-placeholder">⚙️</div>';
              }}
            />
          </div>
          <div className="service-content-right">
              <h3 className="service-title">IT Service</h3>
            <div className="service-content-box">
              <p className="service-description">
                With our most professional expertise, we provide you with top-tier information technology services.
              </p>
              <ul className="service-list">
                <li>Data Analytics & AI/ML</li>
                <li>Cloud & Infrastructure Engineering</li>
                <li>Cybersecurity</li>
                <li>Agile Software Development</li>
                <li>IT Support Services</li>
              </ul>
            </div>
            </div>
          </div>
          
        {/* Hardware 部分 - 左文右图 */}
        <div className="service-section">
          <div className="service-content-left">
              <h3 className="service-title">Hardware</h3>
            <div className="service-content-box">
              <p className="service-description">
                We provide you with the highest performance and most reliable equipment.
              </p>
              <div className="hardware-lists">
                <ul className="service-list">
                  <li>Desktop Computers</li>
                  <li>Laptops and Notebooks</li>
                  <li>Tablets</li>
                  <li>Servers</li>
                  <li>Computer Components</li>
                  <li>Monitors and Displays</li>
                </ul>
                <ul className="service-list">
                  <li>Keyboards and Mice</li>
                  <li>Printers and Scanners</li>
                  <li>Networking Devices</li>
                  <li>Audio and Video Peripherals</li>
                  <li>Storage Devices</li>
                  <li>Accessories and Cables</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="service-image-right">
            <img 
              src="/images/hardware.jpg" 
              alt="Hardware Service"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.style.backgroundColor = '#0a4d68';
                e.target.parentElement.innerHTML = '<div class="icon-placeholder">🤖</div>';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 