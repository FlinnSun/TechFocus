import React from 'react';
import { Link } from 'react-router-dom';
import './SolutionPage.css';

const SolutionPage = () => {
  const services = [
    {
      id: 1,
      title: "Data Analytics & AI/ML",
      image: "/images/1.jpg",
      subtitle: "Transforming raw data into actionable intelligence.",
      description: [
        "· Predictive Modeling & Machine Learning (Supervised/Unsupervised)",
        "· Natural Language Processing & Computer Vision", 
        "· Mission-driven AI applications for cyber, logistics, and readiness",
        "· Big Data Engineering (Spark, Hadoop, Kafka)",
        "· Data Visualization & Dashboards (Power BI, Tableau)",
        "· Decision Support for Transportation, Health, and National Security"
      ],
      textStyle: "times-text"
    },
    {
      id: 2,
      title: "Cloud & Infrastructure Engineering", 
      image: "/images/2.jpg",
      subtitle: "Secure cloud adoption and modernized infrastructure.",
      description: [
        "· Cloud Readiness & Migration (AWS, Azure, milCloud)",
        "· Hybrid Network Architecture & Optimization",
        "· Data Center Modernization (DCOI)",
        "· SIPR/NIPR/NSANet Infrastructure Support"
      ],
      textStyle: "times-text"
    },
    {
      id: 3,
      title: "Cybersecurity",
      image: "/images/3.jpg", 
      subtitle: "Securing mission systems against evolving threats.",
      description: [
        "· Zero Trust Architecture Implementation",
        "· SOC-as-a-Service and Incident Response",
        "· RMF, NIST, and FedRAMP Compliance Support", 
        "· Red/Blue/Purple Team Assessments",
        "· IoT & Cyber-Physical System Security"
      ],
      textStyle: "times-text"
    },
    {
      id: 4,
      title: "Agile Software Development",
      image: "/images/4.jpg",
      subtitle: "Rapid, secure, and user-focused system development.",
      description: [
        "· Agile/Scrum/SAFe Transformation Services",
        "· DevSecOps Pipelines & CI/CD",
        "· Enterprise Web and Mobile Application Development",
        "· Legacy System Modernization"
      ],
      textStyle: "times-text"
    }
  ];

  return (
    <div className="solution-page">
      <div className="solution-page-container">
        {/* 页面标题 */}
        <div className="solution-page-header">
          <h1 className="solution-page-title">IT SERVICE</h1>
        </div>
        
        {/* 服务列表 */}
        <div className="solution-services">
          {services.map((service) => (
            <div key={service.id} className="solution-service-card">
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
                  {service.id === 1 ? (
                    <Link to="/data-analytics-details" className="service-button">
                      <span className="button-symbol">→</span>
                      <span className="button-text">Learn more</span>
                    </Link>
                  ) : service.id === 2 ? (
                    <Link to="/dd2" className="service-button">
                      <span className="button-symbol">→</span>
                      <span className="button-text">Learn more</span>
                    </Link>
                  ) : service.id === 3 ? (
                    <Link to="/dd3" className="service-button">
                      <span className="button-symbol">→</span>
                      <span className="button-text">Learn more</span>
                    </Link>
                  ) : (
                    <Link to="/dd4" className="service-button">
                      <span className="button-symbol">→</span>
                      <span className="button-text">Learn more</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionPage; 