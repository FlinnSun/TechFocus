import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">Meet TechFocus</h2>
        <div className="section-line"></div>
        
        <div className="about-content">
          {/* 文字内容 */}
          <div className="about-text">
            <p className="about-description">
              TechFocus has built a strong track record of delivering exceptional service and value to our clients over the years. With over $25 million in sales, we demonstrate our commitment to customer satisfaction and solidify our position as a trusted partner in the IT hardware industry. Holding a GSA MAS contract with SIN 33411, we showcase our ability to meet stringent federal requirements and supply products to government agencies.
            </p>
            <p className="about-description">
              As a leading provider of technology products, TechFocus has become a trusted source for IT hardware products and solutions. We offer a comprehensive range of electronic and hardware items, such as computers, monitors, peripheral products, and networking equipment, making it easy for customers to acquire the technology they need.
            </p>
            <p className="about-mission">
              Our mission is to exceed our government customers&apos; expectations while maintaining an unparalleled level of service in the professional services industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 