import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services section" id="solution">
      <div className="container">
        <h2 className="section-title">Mission areas</h2>
        <div className="section-line"></div>
        <p className="mission-subtext">
          Our mission is to exceed our government customer's expectations while maintaining a level of service that is unparalleled in our professional services industry.
        </p>
        
        <div className="services-grid">
          <div className="service-column">
            <h3 className="service-column-title">IT Service</h3>
            <p className="service-column-desc">
                With our most professional expertise, we provide you with top-tier information technology services.
              </p>
            <ul className="service-column-list">
                <li>Data Analytics & AI/ML</li>
                <li>Cloud & Infrastructure Engineering</li>
                <li>Cybersecurity</li>
                <li>Agile Software Development</li>
              </ul>
          </div>
          
          <div className="service-divider"></div>
          
          <div className="service-column">
            <h3 className="service-column-title">Products</h3>
            <p className="service-column-desc">
                We provide you with the highest performance and most reliable equipment.
              </p>
            <div className="products-grid">
              <ul className="service-column-list">
                  <li>Desktop Computers</li>
                  <li>Laptops and Notebooks</li>
                  <li>Tablets</li>
                  <li>Servers</li>
                  <li>Computer Components</li>
                  <li>Monitors and Displays</li>
                </ul>
              <ul className="service-column-list">
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
      </div>
    </section>
  );
};

export default Services; 