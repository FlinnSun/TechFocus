import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Expertise",
      image: "/images/1.jpg",
      subtitle: "TechFocus brings deep technical expertise to every engagement. Our experienced and energetic contract execution team works closely with federal government clients to ensure that every requirement is met — and often exceeded — through efficient, high-standard delivery. \n\nWith hands-on proficiency in IT modernization, artificial intelligence and machine learning, IoT implementation, data science, and software development, we consistently deliver solutions that balance performance, sustainability, and innovation. We are results-driven, with a strong emphasis on the practical application of technology and the seamless delivery of mission-critical outcomes.",
      description: [],
      textStyle: "times-text"
    },
    {
      id: 2,
      title: "Reliable",
      image: "/images/5aa.jpeg",
      subtitle: "TechFocus is a proven and dependable partner for federal agencies. Since 2017, we have consistently delivered tasks on time and with uncompromising quality — whether it's large-scale equipment delivery or the design and deployment of complex IT solutions. \n\nWith over 20 prime contracts executed across 9 states and more than 1,500 products delivered without delay or quality issues, we have built a strong reputation in the industry. Our reliability stems from a rapid-response model, robust customer support, and stringent quality control — not as a promise, but as a standard practice.",
      description: [],
      textStyle: "times-text"
    },
    {
      id: 3,
      title: "Team",
      image: "/images/3.jpg", 
      subtitle: "Our team consists of highly educated and technically adept professionals — 75% of whom hold advanced degrees in computer science, engineering, or related fields, including many with PhDs. In addition to this strong academic foundation, many of our members hold recognized cybersecurity certifications such as CISSP and CEH, equipping them to deliver secure, high-assurance solutions. \n\nFurthermore, around half of our team specializes in cloud computing technologies, enabling us to build agile, scalable, and secure architectures tailored to the unique demands of federal IT environments.",
      description: [],
      textStyle: "times-text"
    },
    {
      id: 4,
      title: "Experience",
      image: "/images/4.jpg",
      subtitle: "TechFocus has demonstrated excellence across both commercial and government sectors. On commercial platforms such as Amazon, we have successfully marketed and sold a wide range of IT hardware products. In the government space, we've built strong relationships with 18 federal agencies, including the Department of Veterans Affairs, the General Services Administration, and the U.S. Air Force. \n\nWe consistently exceed expectations in product quality, delivery, and service, and provide effective, compliant solutions — earning continued trust and repeat contracts.",
      description: [],
      textStyle: "times-text"
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        {/* 服务列表 */}
        <div className="services-list">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-background"></div>
              <div className="service-line"></div>
              
              <div className="service-content">
                <div className="service-image-container">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="service-image-placeholder" style={{display: 'none'}}>
                    <span>{service.title} Image</span>
                  </div>
                </div>
                
                <div className="service-info">
                  <h2 className="service-title">{service.title}</h2>
                  <div className={`service-description ${service.textStyle}`}>
                    <p className="service-subtitle">{service.subtitle}</p>
                    <div className="service-details">
                      {service.description.map((item, index) => (
                        <p key={index} className="service-detail-item">{item}</p>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 