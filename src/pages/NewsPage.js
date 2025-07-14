import React from 'react';
import './NewsPage.css';

const NewsPage = () => {
  return (
    <div className="news-page">
      <div className="news-container">
        {/* 页面标题 - 居中 */}
        <div className="news-header">
          <h1 className="news-title">Past Performance</h1>
          <div className="news-title-line"></div>
        </div>



        {/* Corporate Experience */}
        <div className="news-updates-section">
          <h2 className="section-title">Corporate Experience</h2>
          <div className="section-line"></div>
          
          <div className="news-updates-content">
            <div className="news-updates-left">
              <p className="news-updates-text">
                TechFocus has successfully won and executed multiple federal contracts through our GSA Schedule and competitive procurement channels. We specialize in delivering compliant, high-quality IT hardware and technology solutions that meet the demands of mission-critical environments.
              </p>
              <p className="news-updates-text">
                Our clients include a wide range of federal agencies, such as the Department of the Air Force, Navy, Army, Department of Veterans Affairs (VA), U.S. Department of Agriculture (USDA), and the Department of State (DOS), among others.
              </p>
              <p className="news-updates-text">
                Now in our third year of federal contracting, TechFocus has exceeded $10 million in cumulative government sales, demonstrating our ability to perform reliably, scale effectively, and support diverse federal needs.
              </p>
              <p className="news-updates-text">
                Our team brings deep knowledge of the federal acquisition process, and we are committed to consistent, responsive, and accountable contract performance.
              </p>
            </div>
            <div className="news-updates-right">
              <img 
                src="/images/hardware.jpg" 
                alt="Corporate Experience"
                className="news-updates-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="image-placeholder news-updates-placeholder" style={{display: 'none'}}>
                <span>Corporate Experience Image</span>
              </div>
            </div>
          </div>
        </div>

        {/* Founder's Experience */}
        <div className="news-insights-section">
          <h2 className="section-title">Founder's Experience</h2>
          <div className="section-line"></div>
          
          <div className="news-insights-content">
            <div className="news-insights-left">
              <img 
                src="/images/dd2.1.jpg" 
                alt="Founder's Experience"
                className="news-insights-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="image-placeholder news-insights-placeholder" style={{display: 'none'}}>
                <span>Founder's Experience Image</span>
              </div>
            </div>
            <div className="news-insights-right">
              <p className="news-insights-text">
                Before founding TechFocus, Dr. Lijuan Wang spent nearly 10 years as a researcher at NREL, where she led multiple high-impact DOE-funded initiatives focused on energy efficiency, advanced transportation systems, and smart city infrastructure.
              </p>
              <p className="news-insights-text">
                Key accomplishments include:
              </p>
              <ul className="news-insights-list">
                <li>Awarded a $1.75M DOE FOA contract to develop data-driven planning and operation tools for electric bus deployment in U.S. transit systems</li>
                <li>Sole author of a DOE-authorized fuel economy prediction model, later adopted by Google to power the "most energy-efficient route" feature in Google Maps</li>
                <li>Developed an intelligent freight optimization platform to improve energy efficiency in multimodal urban logistics systems</li>
              </ul>
              <p className="news-insights-text">
                Dr. Wang's background in federally funded R&D, combined with her technical leadership, underpins TechFocus's deep alignment with government priorities and its ability to deliver innovative, practical, and scalable solutions.
              </p>
            </div>
          </div>
        </div>




      </div>
    </div>
  );
};

export default NewsPage; 