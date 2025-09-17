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
              TechFocus has built a strong track record of delivering exceptional service and value to our clients over the years. Our consistent growth reflects our commitment to customer satisfaction and our position as a trusted partner in the IT hardware industry. With a GSA MAS contract vehicle, we demonstrate our ability to meet stringent federal requirements and provide reliable solutions to government agencies.
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