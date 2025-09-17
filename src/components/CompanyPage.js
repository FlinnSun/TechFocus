import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-page-container">
        {/* 页面标题 */}
        <div className="about-page-header">
          <h1 className="about-page-title">About us</h1>
        </div>
        
        {/* 概览区域 */}
        <div className="about-overview-section">
          <div className="overview-left">
            <img 
              src="/images/a1.jpeg" 
              alt="Technology Data Visualization"
              className="tech-visual-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="image-placeholder tech-placeholder" style={{display: 'none'}}>
              <span>Technology Visualization Image</span>
            </div>
          </div>
          <div className="overview-right">
            <h2>OVERVIEW</h2>
            <p>
              TechFocus is an SBA 8(a) and Woman-Owned Small Business delivering both end-to-end IT services and high-quality hardware solutions to federal, state, and local government agencies across the United States. With over $20 million in government sales and a GSA MAS contract vehicle, we are a trusted partner for mission-critical technology and procurement.
            </p>
            <p>
              Our IT services span data analytics, AI/ML, cybersecurity, cloud infrastructure, agile development, and help desk support—empowering agencies to modernize systems, strengthen security, and drive digital transformation.
            </p>
            <p>
              In parallel, we supply a comprehensive range of IT hardware and office electronics—from laptops and servers to networking equipment—ensuring full regulatory compliance, fast delivery, and responsive support.
            </p>
            <p>
              At TechFocus, we combine technical excellence with procurement reliability—so our clients can focus on the mission, while we deliver the tools to achieve it.
            </p>
          </div>
        </div>
        
        {/* 使命愿景区域 */}
        <div className="about-mission-section">
          <div className="mission-left">
            <h2>MISSION AND VISION</h2>
            <div className="mission-content">
              <p>
                At TechFocus, our mission is to empower government agencies and industry partners across the nation with innovative, secure, and results-driven technology solutions. We are dedicated to helping our clients achieve operational excellence, modernize critical systems, and deliver on their missions with confidence.
              </p>
              <p>
                Our vision is to be a trusted leader in delivering data-driven insights, intelligent automation, and transformative digital infrastructure—bridging technology with purpose to support public service, national resilience, and long-term impact.
              </p>
            </div>
          </div>
          <div className="mission-right">
            <img 
              src="/images/a2.jpeg" 
              alt="Person on mountain peak representing vision and achievement"
              className="mission-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="image-placeholder mission-placeholder" style={{display: 'none'}}>
              <span>Mission Vision Image</span>
            </div>
          </div>
        </div>

        {/* 新增卡片区域 */}
        <div className="about-new-section">
          <div className="new-left">
            <img 
              src="/images/lj.png" 
              alt="Lijuan Wang - Founder and President of TechFocus LLC"
              className="new-visual-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="image-placeholder new-placeholder" style={{display: 'none'}}>
              <span>Lijuan Wang Image</span>
            </div>
          </div>
          <div className="new-right">
            <h2>FOUNDER</h2>
            <p>
              Lijuan Wang is the founder and President of TechFocus LLC, a certified SBA 8(a) and Woman-Owned Small Business (WOSB) dedicated to delivering high-impact technology solutions and IT hardware to U.S. federal agencies.
            </p>
            <p>
              With a Ph.D. in engineering and over a decade of experience at a National Renewable Energy Laboratory, Dr. Wang brings a rare blend of scientific depth and business acumen to the leadership of TechFocus. She is widely recognized for her work in fuel efficiency modeling, and her innovations have contributed to major industry platforms—including the theoretical foundation behind Google Maps' fuel-efficient routing feature.
            </p>
            <p>
              Under her leadership, TechFocus has grown rapidly, securing multi-million-dollar government contracts in just its second year of operations. Dr. Wang is known for her strategic vision, hands-on problem solving, and deep commitment to integrity and long-term partnerships.
            </p>
            <p>
              Driven by a passion for data, AI, and practical innovation, she is leading TechFocus into its next phase: expanding its footprint in advanced IT solutions while continuing to provide trusted, compliant, and cost-effective procurement to federal clients.
            </p>
          </div>
        </div>

        {/* 团队区域 */}
        <div className="about-teams-section">
          <div className="teams-left">
            <h2>TEAMS</h2>
            <p>
              At TechFocus, our people are our most valuable asset. We bring together a nationwide team of skilled professionals—including IT specialists, hardware engineers, cybersecurity experts, data scientists, project managers, and program managers—who collaborate to deliver integrated, end-to-end solutions.
            </p>
            <p>
              Our team members come from diverse technical backgrounds and are deeply experienced in applying their knowledge within complex, mission-critical environments. Whether developing custom software, deploying secure infrastructure, or managing full program lifecycles, our team adapts quickly, communicates transparently, and executes with precision.
            </p>
            <p>
              This commitment to technical excellence and client responsiveness allows TechFocus to serve as a single-source provider—capable of seamless end-to-end project delivery—no matter the size, scope, or challenge.
            </p>
          </div>
          <div className="teams-right">
            <img 
              src="/images/a3.jpeg" 
              alt="Team collaboration and meeting"
              className="teams-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="image-placeholder teams-placeholder" style={{display: 'none'}}>
              <span>Teams Meeting Image</span>
            </div>
          </div>
        </div>

        {/* 底部美国国会大厦图片 */}
        <div className="about-capitol-section">
          <img 
            src="/images/a4.jpg" 
            alt="United States Capitol Building"
            className="capitol-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="image-placeholder capitol-placeholder" style={{display: 'none'}}>
            <span>US Capitol Building Image</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 