import React, { useState } from 'react';
import './DataAnalyticsDetailsPage.css';

const DataAnalyticsDetailsPage = () => {
  const [activeTab, setActiveTab] = useState('whatWeDo'); // 默认激活 'What We Do'

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
  <div className="data-analytics-details-root">
    {/* Banner: Title is now inside the image container */}
    <div className="data-analytics-details-img-section1">
    </div>
    
    {/* <div className="data-analytics-details-return">
      <span>RETUREN TO SERVICE</span>
      <svg className="data-analytics-details-return-icon" width="47" height="55" viewBox="0 0 47 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.625 41.25L5.875 27.5L17.625 13.75L20.3667 16.9583L13.3167 25.2083H37.2083V16.0417H41.125V29.7917H13.3167L20.3667 38.0417L17.625 41.25Z" fill="white"/>
      </svg>
    </div> */}
    {/* Main content text */}
    <div className="data-analytics-details-main-text">
      <div className="data-analytics-details-section1-title">
        Transforming Federal Data into Actionable Intelligence
      </div>
      <div className="data-analytics-details-section1-paragraph">
        In today’s mission-critical environment, federal agencies are under pressure to turn vast amounts of raw data into strategic insights—faster, more securely, and with greater accuracy. Whether it’s forecasting logistics, monitoring infrastructure health, or enhancing cyber readiness, artificial intelligence and data science are no longer optional—they are essential.
      </div>
      <div className="data-analytics-details-section1-paragraph">
        At TechFocus, we specialize in developing and deploying data analytics and AI/ML solutions tailored to the evolving needs of defense and civilian agencies. Our team combines scientific rigor with practical implementation, helping government clients extract maximum value from their data—securely, efficiently, and at scale.
      </div>
    </div>
          {/* OUR SOLUTION section */}
      <div className="data-analytics-details-our-solution">
        <div className="data-analytics-details-our-solution-text">OUR SOLUTION</div>
        <div className="data-analytics-details-our-solution-rect" />
      </div>

      {/* Solution Tabs Navigation */}
      <div className="data-analytics-details-solution-tabs-nav">
        <div className={`data-analytics-details-solution-tab-item ${activeTab === 'whatWeDo' ? 'active' : ''}`} onClick={() => handleTabClick('whatWeDo')}>
          <svg className="data-analytics-details-tab-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.33334C10.8 3.33334 3.33334 10.8 3.33334 20C3.33334 29.2 10.8 36.6667 20 36.6667C29.2 36.6667 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33334 20 3.33334ZM20 6.66667C27.3667 6.66667 33.3333 12.6333 33.3333 20C33.3333 27.3667 27.3667 33.3333 20 33.3333C12.6333 33.3333 6.66667 27.3667 6.66667 20C6.66667 12.6333 12.6333 6.66667 20 6.66667ZM22.5 15H17.5V20H15V22.5H17.5V27.5H20V22.5H25V20H20V15H22.5Z" fill="white"/>
          </svg>
          <span>What We Do</span>
        </div>
        <div className={`data-analytics-details-solution-tab-item ${activeTab === 'ourTools' ? 'active' : ''}`} onClick={() => handleTabClick('ourTools')}>
          <svg className="data-analytics-details-tab-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.3333 28.3333H11.6667V33.3333H28.3333V28.3333ZM28.3333 6.66667H11.6667V11.6667H28.3333V6.66667ZM11.6667 17.5V22.5H28.3333V17.5H11.6667Z" fill="white"/>
          </svg>
          <span>Our Tools & Platforms</span>
        </div>
        <div className={`data-analytics-details-solution-tab-item ${activeTab === 'whyTechFocus' ? 'active' : ''}`} onClick={() => handleTabClick('whyTechFocus')}>
          <svg className="data-analytics-details-tab-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20C25.5 20 30 15.5 30 10C30 4.5 25.5 0 20 0C14.5 0 10 4.5 10 10C10 15.5 14.5 20 20 20ZM20 23.3333C13.3333 23.3333 6.66667 26.6667 6.66667 33.3333V40H33.3333V33.3333C33.3333 26.6667 26.6667 23.3333 20 23.3333Z" fill="white"/>
          </svg>
          <span>Why TechFocus</span>
        </div>
      </div>

      {/* Solution Tab Content */}
      <div className="data-analytics-details-solution-tab-content">
        {activeTab === 'whatWeDo' && (
          <div className="data-analytics-details-solution-tab-pane">
            <ul className="data-analytics-details-solution-list">
              <li className="data-analytics-details-solution-list-item">AI / Machine Learning Engineering
                <ul>
                  <li>Supervised & Unsupervised Learning Models</li>
                  <li>Deep Learning (CNN, RNN, Transformers)</li>
                  <li>Predictive & Prescriptive Analytics</li>
                  <li>Natural Language Processing (NLP)</li>
                  <li>Computer Vision for Mission Systems</li>
                </ul>
              </li>
              <li className="data-analytics-details-solution-list-item">Data Science & Analytics
                <ul>
                  <li>Big Data Engineering (Hadoop, Spark, Kafka)</li>
                  <li>Data Integration & ETL from structured/unstructured sources</li>
                  <li>Data Warehousing & Management (Snowflake, Redshift)</li>
                  <li>Statistical Modeling, Clustering, and Pattern Recognition</li>
                </ul>
              </li>
              <li className="data-analytics-details-solution-list-item">Visualization & Decision Support
                <ul>
                  <li>Interactive Dashboards (Power BI, Tableau, Qlik)</li>
                  <li>GIS Mapping for Infrastructure and Readiness</li>
                  <li>Real-time Data Visualization for Executive Decision-Making</li>
                </ul>
              </li>
              <li className="data-analytics-details-solution-list-item">Mission-Focused Applications
                <ul>
                  <li>AI for Predictive Maintenance in Aviation/Defense</li>
                  <li>Transportation Optimization Models</li>
                  <li>Cyber Threat Pattern Detection</li>
                  <li>Health & Human Services Data Automation</li>
                </ul>
              </li>
            </ul>
          </div>
        )}
        {activeTab === 'ourTools' && (
          <div className="data-analytics-details-solution-tab-pane">
            <div className="data-analytics-details-tools-content">
              <div className="data-analytics-details-tools-image">
                <img src="/images/dd1.jpeg" alt="Data Analytics Tools" />
              </div>
              <div className="data-analytics-details-tools-text">
                <ul className="data-analytics-details-tools-list">
                  <li>
                    <span className="tools-title">· Languages & Libraries:</span>
                    <span className="tools-content"> Python, R, SQL, TensorFlow, PyTorch, Scikit-learn</span>
                  </li>
                  <li>
                    <span className="tools-title">· Data Platforms:</span>
                    <span className="tools-content"> AWS GovCloud, Azure Government, Databricks, Cloudera</span>
                  </li>
                  <li>
                    <span className="tools-title">· Visualization Tools:</span>
                    <span className="tools-content"> Power BI, Tableau, Grafana</span>
                  </li>
                  <li>
                    <span className="tools-title">· Big Data Stack:</span>
                    <span className="tools-content"> Hadoop, Spark, Hive, Kafka</span>
                  </li>
                  <li>
                    <span className="tools-title">· Compliance:</span>
                    <span className="tools-content"> FedRAMP, NIST 800-53, FISMA, HIPAA (as applicable)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'whyTechFocus' && (
          <div className="data-analytics-details-solution-tab-pane">
            <div className="data-analytics-details-tools-content">
              <div className="data-analytics-details-tools-image">
                <img src="/images/dd2.jpg" alt="Why TechFocus" />
              </div>
              <div className="data-analytics-details-tools-text">
                <ul className="data-analytics-details-tools-list why-techfocus-list">
                  <li>· SBA 8(a) and WOSB certified with strong federal past performance</li>
                  <li>· AI/ML solutions aligned with DoD AI Ethical Principles and CDAO priorities</li>
                  <li>· Agile, secure, and cloud-native implementations</li>
                  <li>· Proven ability to integrate with existing systems and government platforms</li>
                  <li>· Transparent, mission-driven, and results-focused delivery</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    {/* Icons and Lines - Moved or removed as per new design */}
    {/*
    <svg className="data-analytics-details-list-fill-icon1" width="24" height="46" viewBox="0 0 24 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.8125 34.5L6.25 23L18.8125 11.5L21.575 14.125L14.375 23L21.575 31.875L18.8125 34.5Z" fill="white"/>
    </svg>
    <svg className="data-analytics-details-people-fill-icon" width="45" height="51" viewBox="0 0 45 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.5 25.5C28.2937 25.5 33.0937 20.925 33.0937 15.1875C33.0937 9.45 28.2937 4.875 22.5 4.875C16.7063 4.875 11.9063 9.45 11.9063 15.1875C11.9063 20.925 16.7063 25.5 22.5 25.5ZM22.5 30.375C14.7188 30.375 8.34375 36.3375 8.34375 43.875H36.6563C36.6563 36.3375 30.2813 30.375 22.5 30.375Z" fill="white"/>
    </svg>
    <svg className="data-analytics-details-view-list-fill-icon" width="40" height="46" viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.66667 38.3333V43.3333H38.3333V38.3333H1.66667ZM1.66667 2.66667V7.66667H38.3333V2.66667H1.66667ZM1.66667 20.5V25.5H38.3333V20.5H1.66667Z" fill="white"/>
    </svg>
    <div className="data-analytics-details-line7" />
    <div className="data-analytics-details-line11" />
    <div className="data-analytics-details-line9" />
    <div className="data-analytics-details-line8" />
    <div className="data-analytics-details-line10" />
    */}
    {/* Old AI/ML and Data Science list sections - Replaced by new tab content */}
    {/*
    <div className="data-analytics-details-ai-data-list">
      · AI / Machine Learning Engineering<br />
      &nbsp;&nbsp;o Supervised & Unsupervised Learning Models<br />
      &nbsp;&nbsp;o Deep Learning (CNN, RNN, Transformers)<br />
      &nbsp;&nbsp;o Predictive & Prescriptive Analytics<br />
      &nbsp;&nbsp;o Natural Language Processing (NLP)<br />
      &nbsp;&nbsp;o Computer Vision for Mission Systems<br /><br />
      · Data Science & Analytics<br />
      &nbsp;&nbsp;o Big Data Engineering (Hadoop, Spark, Kafka)<br />
      &nbsp;&nbsp;o Data Integration & ETL from structured/unstructured sources<br />
      &nbsp;&nbsp;o Data Warehousing & Management (Snowflake, Redshift)<br />
      &nbsp;&nbsp;o Statistical Modeling, Clustering, and Pattern Recognition
    </div>
    */}
    {/* Rectangles and Languages/SBA lists - Removed/Replaced for now, can be re-added as part of content if needed */}
    {/*
    <div className="data-analytics-details-rect11" />
    <div className="data-analytics-details-rect13" />
    <div className="data-analytics-details-rect12" />
    <div className="data-analytics-details-rect14" />
    <div className="data-analytics-details-languages-list">
      · Languages & Libraries: Python, R, SQL, TensorFlow, PyTorch, Scikit-learn<br />
      · Data Platforms: AWS GovCloud, Azure Government, Databricks, Cloudera<br />
      · Visualization Tools: Power BI, Tableau, Grafana<br />
      · Big Data Stack: Hadoop, Spark, Hive, Kafka<br />
      · Compliance: FedRAMP, NIST 800-53, FISMA, HIPAA (as applicable)
    </div>
    <div className="data-analytics-details-img-section2" />
    <div className="data-analytics-details-rect16" />
    <div className="data-analytics-details-rect17" />
    <div className="data-analytics-details-rect18" />
    <div className="data-analytics-details-rect19" />
    <div className="data-analytics-details-sba-list">
      · SBA 8(a) and WOSB certified with strong federal past performance<br />
      · AI/ML solutions aligned with DoD AI Ethical Principles and CDAO priorities<br />
      · Agile, secure, and cloud-native implementations<br />
      · Proven ability to integrate with existing systems and government platforms<br />
      · Transparent, mission-driven, and results-focused delivery
    </div>
    */}
    {/* Footer component will be added here */}
  </div>
);
};

export default DataAnalyticsDetailsPage; 