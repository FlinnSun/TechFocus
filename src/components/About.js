import React from 'react';
import './About.css';

const About = () => {
  // 图片数组
  const images = [
    '/images/card-1.jpg',
    '/images/card-2.jpg', 
    '/images/card-3.jpg',
    '/images/card-4.jpg'
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">Meet TechFocus</h2>
        <div className="section-line"></div>
        
        {/* 灰色容器中网格显示四张图片 */}
        <div className="about-hero-area">
          <div className="image-container">
            <div className="grid-mode">
              {images.map((image, index) => (
                <div key={index} className="image-item">
                  <img 
                    src={image} 
                    alt={`Image ${index + 1}`}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="about-content">
          {/* 文字内容 */}
          <div className="about-text">
            <p className="about-description">
              TechFocus, a SBA 8(a) and WOSB certified IT hardware provider, has built a strong track record of delivering exceptional service and value to our clients over the years. With over $25 million in sales, we demonstrate our commitment to customer satisfaction and solidify our position as a trusted partner in the IT hardware industry. Holding a GSA MAS contract with SIN 33411, we showcase our ability to meet stringent federal requirements and supply products to government agencies.
            </p>
            <p className="about-description">
              As a leading provider of technology products, TechFocus has become a trusted source for IT hardware products and solutions. We offer a comprehensive range of electronic and hardware items, such as computers, monitors, peripheral products, and networking equipment, making it easy for customers to acquire the technology they need.
            </p>
            <p className="about-mission">
              Our mission is to exceed our government customers' expectations while maintaining an unparalleled level of service in the professional services industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 