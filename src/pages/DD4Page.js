import React, { useState } from 'react';
import './DD4Page.css';

const DD4Page = () => {
  const [activeTab, setActiveTab] = useState('whatWeDo'); // 默认激活 'What We Do'

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
  <div className="dd4-root">
    {/* Banner: Title is now inside the image container */}
    <div className="dd4-img-section1">
    </div>
    
    {/* Main content text */}
    <div className="dd4-main-text">
      <div className="dd4-section1-title">
        Delivering Secure, Scalable Systems—Faster and Aligned with Mission Priorities
      </div>
      <div className="dd4-section1-paragraph dd4-paragraph-bold">
        In the federal landscape, rapid delivery of mission-ready software is no longer optional—it’s essential. Agencies face tight timelines, evolving requirements, and the need to modernize legacy systems without compromising security. Agile methodologies and DevSecOps pipelines offer a proven path to secure, efficient software development and continuous delivery.
      </div>
      <div className="dd4-section1-paragraph">
        At TechFocus, we deliver scalable digital services using Agile frameworks tailored to government missions. From cross-functional collaboration and custom UI/UX design to secure DevSecOps pipelines and test automation, our teams enable faster time to value with security embedded at every stage.
      </div>
    </div>
          {/* OUR SOLUTION section */}
      <div className="dd4-our-solution">
        <div className="dd4-our-solution-text">OUR SOLUTION</div>
        <div className="dd4-our-solution-rect" />
      </div>

      {/* Solution Tabs Navigation */}
      <div className="dd4-solution-tabs-nav">
        <div className={`dd4-solution-tab-item ${activeTab === 'whatWeDo' ? 'active' : ''}`} onClick={() => handleTabClick('whatWeDo')}>
          <svg className="dd4-tab-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.33334C10.8 3.33334 3.33334 10.8 3.33334 20C3.33334 29.2 10.8 36.6667 20 36.6667C29.2 36.6667 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33334 20 3.33334ZM20 6.66667C27.3667 6.66667 33.3333 12.6333 33.3333 20C33.3333 27.3667 27.3667 33.3333 20 33.3333C12.6333 33.3333 6.66667 27.3667 6.66667 20C6.66667 12.6333 12.6333 6.66667 20 6.66667ZM22.5 15H17.5V20H15V22.5H17.5V27.5H20V22.5H25V20H20V15H22.5Z" fill="white"/>
          </svg>
          <span>What We Do</span>
        </div>
        <div className={`dd4-solution-tab-item ${activeTab === 'ourTools' ? 'active' : ''}`} onClick={() => handleTabClick('ourTools')}>
          <svg className="dd4-tab-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.3333 28.3333H11.6667V33.3333H28.3333V28.3333ZM28.3333 6.66667H11.6667V11.6667H28.3333V6.66667ZM11.6667 17.5V22.5H28.3333V17.5H11.6667Z" fill="white"/>
          </svg>
          <span>Our Tools & Platforms</span>
        </div>
        <div className={`dd4-solution-tab-item ${activeTab === 'whyTechFocus' ? 'active' : ''}`} onClick={() => handleTabClick('whyTechFocus')}>
          <svg className="dd4-tab-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20C25.5 20 30 15.5 30 10C30 4.5 25.5 0 20 0C14.5 0 10 4.5 10 10C10 15.5 14.5 20 20 20ZM20 23.3333C13.3333 23.3333 6.66667 26.6667 6.66667 33.3333V40H33.3333V33.3333C33.3333 26.6667 26.6667 23.3333 20 23.3333Z" fill="white"/>
          </svg>
          <span>Why TechFocus</span>
        </div>
      </div>

      {/* Solution Tab Content */}
      <div className="dd4-solution-tab-content">
        {activeTab === 'whatWeDo' && (
          <div className="dd4-solution-tab-pane">
            <ul className="dd4-solution-list">
              <li className="dd4-solution-list-item">Agile Application Development
                <ul>
                  <li>End-to-end Agile delivery using Scrum, SAFe, and Kanban</li>
                  <li>Sprint-based development, backlog grooming, and iterative release</li>
                  <li>Product roadmapping and stakeholder engagement</li>
                </ul>
              </li>
              <li className="dd4-solution-list-item">DevSecOps Engineering
                <ul>
                  <li>Continuous integration/continuous delivery (CI/CD) pipelines</li>
                  <li>Security-first development practices with automated testing</li>
                  <li>Containerized deployments (Docker, Kubernetes, OpenShift)</li>
                  <li>Infrastructure as code (Terraform, CloudFormation)</li>
                </ul>
              </li>
              <li className="dd4-solution-list-item">Custom Software & API Development
                <ul>
                  <li>Web and mobile application development (.NET, Java, Python, React, Angular)</li>
                  <li>API design, microservices architecture, and system integration</li>
                  <li>Mobile application development for iOS and Android</li>
                </ul>
              </li>
              <li className="dd4-solution-list-item">Legacy System Modernization
                <ul>
                  <li>Code refactoring and modularization</li>
                  <li>Migration to cloud-native architecture</li>
                  <li>Data migration and interface compatibility</li>
                </ul>
              </li>
              <li className="dd4-solution-list-item">Testing & Quality Assurance
                <ul>
                  <li>Manual and automated testing (Selenium, JUnit, Postman)</li>
                  <li>Performance/load testing and accessibility testing (508 compliance)</li>
                  <li>Test-driven development and continuous validation</li>
                </ul>
              </li>
            </ul>
          </div>
        )}
        {activeTab === 'ourTools' && (
          <div className="dd4-solution-tab-pane">
            <div className="dd4-tools-content">
              <div className="dd4-tools-image">
                <img src="/images/dd4.1.jpg" alt="Data Science & AI Tools" />
              </div>
              <div className="dd4-tools-text">
                <ul className="dd4-tools-list">
                  <li>
                    <span className="tools-title">DevSecOps Tools:</span>
                    <span className="tools-content"> Jenkins, GitLab CI/CD, SonarQube, Aqua, Twistlock</span>
                  </li>
                  <li>
                    <span className="tools-title">Languages & Frameworks:</span>
                    <span className="tools-content"> Java, .NET, Python, JavaScript, React, Angular, Node.js</span>
                  </li>
                  <li>
                    <span className="tools-title">Testing:</span>
                    <span className="tools-content"> Selenium, JMeter, Postman, Cucumber, SoapUI</span>
                  </li>
                  <li>
                    <span className="tools-title">Cloud Platforms:</span>
                    <span className="tools-content"> AWS, Azure, GCP</span>
                  </li>
                  <li>
                    <span className="tools-title">Project Management:</span>
                    <span className="tools-content"> Jira, Confluence, Trello, Azure DevOps</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'whyTechFocus' && (
          <div className="dd4-solution-tab-pane">
            <div className="dd4-tools-content">
              <div className="dd4-tools-image">
                <img src="/images/dd4.2.jpg" alt="Why TechFocus" />
              </div>
              <div className="dd4-tools-text">
                <ul className="dd4-tools-list why-techfocus-list">
                  <li>·Agile teams trained in SAFe, CMMI, and ISO 12207 best practices</li>
                  <li>·Proven performance on government modernization initiatives</li>
                  <li>·Secure-by-design DevSecOps from day one</li>
                  <li>·Skilled in integrating with government systems and legacy APIs</li>
                  <li>·SBA 8(a) and WOSB certified – small business agility with enterprise delivery</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
  </div>
);
};

export default DD4Page; 