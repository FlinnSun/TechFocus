import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './AboutPage.css';
import KPISection from './KPISection';

const AboutPage = () => {
  const location = useLocation();

  useEffect(() => {
    // 检查 URL 中是否有锚点
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // 延迟滚动，确保页面已加载
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, [location.hash]);
  return (
    <div className="about-page">
      <div className="about-page-container">
        {/* 页面标题 */}
        <div id="about" className="about-page-header">
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
              TechFocus provides end-to-end IT services and high-quality hardware solutions to federal, state, and local government agencies across the United States. With a proven track record of over $20 million in government sales and a GSA MAS contract (SIN 33411), we are a trusted partner for mission-critical technology and procurement.
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
              src="/images/a3.jpeg" 
              alt="Team collaboration and meeting"
              className="new-visual-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="image-placeholder new-placeholder" style={{display: 'none'}}>
              <span>Team collaboration and meeting</span>
            </div>
          </div>
          <div className="new-right">
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
        </div>

        {/* Leadership标题 */}
        <div id="leadership" className="about-page-header">
          <h1 className="about-page-title">Leadership</h1>
        </div>

        {/* Our Leadership Team - 从careers页面复制 */}
        <div className="leadership-section">
          
          <div className="leadership-content">
            <div className="leader-photo">
              <img src="/images/lj.png" alt="Lijuan Wang" className="leader-image" />
            </div>
            <div className="leader-info">
              <h3 className="leader-name">Lijuan Wang</h3>
              <h4 className="leader-title">Founder & President, TechFocus LLC</h4>
              <p className="leader-description">
                Lijuan Wang is the founder and President of TechFocus LLC, who is dedicated to delivering high-impact technology solutions and IT hardware to U.S. federal agencies.
              </p>
              <p className="leader-description">
                With a Ph.D. in Mechanical Engineering and over a decade of experience at a National Renewable Energy Laboratory, Dr. Wang brings a rare blend of scientific depth and business acumen to the leadership of TechFocus. She is widely recognized for her work in fuel efficiency modeling, and her innovations have contributed to major industry platforms—including the theoretical foundation behind Google Maps' fuel-efficient routing feature.
              </p>
              <p className="leader-description">
                Under her leadership, TechFocus has grown rapidly, securing multi-million-dollar government contracts in just its second year of operations. Dr. Wang is known for her strategic vision, hands-on problem solving, and deep commitment to integrity and long-term partnerships.
              </p>
              <p className="leader-description">
                Driven by a passion for data, AI, and practical innovation, she is leading TechFocus into its next phase: expanding its footprint in advanced IT solutions while continuing to provide trusted, compliant, and cost-effective procurement to federal clients.
              </p>
            </div>
          </div>
        </div>

        {/* Contract标题 */}
        <div id="contract" className="about-page-header">
          <h1 className="about-page-title">Contract</h1>
        </div>

        {/* GSA MAS Schedule 卡片 */}
        <div className="contract-section">
          <div className="contract-content">
            <div className="contract-header">
              <h2 className="contract-title">GAS MAS Schedule</h2>
            </div>
            
                         <div className="contract-info-container">
               <div className="contract-info-section">
                 <div className="contract-info-box">
                   <div className="contract-detail">
                     <strong>Contract Number:</strong> 47QSWA22D0091
                   </div>
                   <div className="contract-detail">
                     <strong>Period of Performance:</strong> September 6, 2022 – September 5, 2027
                   </div>
                   <div className="contract-detail">
                     <strong>We are specializes in:</strong> IT hardware and solutions
                   </div>
                 </div>
               </div>
               

             </div>
            
            
          </div>
        </div>

        {/* KPI Section */}
        <KPISection />


      </div>
    </div>
  );
};

export default AboutPage; 