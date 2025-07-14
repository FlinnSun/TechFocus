import React, { useState } from 'react';
import './DD5Page.css';

const DD5Page = () => {
  const [activeTab, setActiveTab] = useState('whatWeDo'); // 默认激活 'What We Do'

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
  <div className="dd5-root">
    {/* Banner: Title is now inside the image container */}
    <div className="dd5-img-section1">
    </div>
    
    {/* Main content text */}
    <div className="dd5-main-text">
      <div className="dd5-section1-title">
        Ensuring Continuity, Responsiveness, and Operational Readiness
      </div>
      <div className="dd5-section1-paragraph dd5-paragraph-bold">
        Government missions rely on uninterrupted IT operations—whether supporting front-line warfighters, managing critical healthcare systems, or enabling secure remote work for federal staff. Reliable and responsive IT support is not just a back-office function—it’s a mission enabler.
      </div>
      <div className="dd5-section1-paragraph">
        At TechFocus, we provide full-spectrum IT support services for civilian and defense agencies, including multi-tier help desk, remote monitoring, field support, and IT service management based on ITIL standards. Our teams operate with efficiency, discretion, and a deep understanding of federal service expectations.
      </div>
    </div>
          {/* OUR SOLUTION section */}
      <div className="dd5-our-solution">
        <div className="dd5-our-solution-text">OUR SOLUTION</div>
        <div className="dd5-our-solution-rect" />
      </div>

      {/* Solution Tabs Navigation */}
      <div className="dd5-solution-tabs-nav">
        <div className={`dd5-solution-tab-item ${activeTab === 'whatWeDo' ? 'active' : ''}`} onClick={() => handleTabClick('whatWeDo')}>
          <svg className="dd5-tab-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.33334C10.8 3.33334 3.33334 10.8 3.33334 20C3.33334 29.2 10.8 36.6667 20 36.6667C29.2 36.6667 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33334 20 3.33334ZM20 6.66667C27.3667 6.66667 33.3333 12.6333 33.3333 20C33.3333 27.3667 27.3667 33.3333 20 33.3333C12.6333 33.3333 6.66667 27.3667 6.66667 20C6.66667 12.6333 12.6333 6.66667 20 6.66667ZM22.5 15H17.5V20H15V22.5H17.5V27.5H20V22.5H25V20H20V15H22.5Z" fill="white"/>
          </svg>
          <span>What We Do</span>
        </div>
        <div className={`dd5-solution-tab-item ${activeTab === 'ourTools' ? 'active' : ''}`} onClick={() => handleTabClick('ourTools')}>
          <svg className="dd5-tab-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.3333 28.3333H11.6667V33.3333H28.3333V28.3333ZM28.3333 6.66667H11.6667V11.6667H28.3333V6.66667ZM11.6667 17.5V22.5H28.3333V17.5H11.6667Z" fill="white"/>
          </svg>
          <span>Our Tools & Platforms</span>
        </div>
        <div className={`dd5-solution-tab-item ${activeTab === 'whyTechFocus' ? 'active' : ''}`} onClick={() => handleTabClick('whyTechFocus')}>
          <svg className="dd5-tab-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20C25.5 20 30 15.5 30 10C30 4.5 25.5 0 20 0C14.5 0 10 4.5 10 10C10 15.5 14.5 20 20 20ZM20 23.3333C13.3333 23.3333 6.66667 26.6667 6.66667 33.3333V40H33.3333V33.3333C33.3333 26.6667 26.6667 23.3333 20 23.3333Z" fill="white"/>
          </svg>
          <span>Why TechFocus</span>
        </div>
      </div>

      {/* Solution Tab Content */}
      <div className="dd5-solution-tab-content">
        {activeTab === 'whatWeDo' && (
          <div className="dd5-solution-tab-pane">
            <ul className="dd5-solution-list">
              <li className="dd5-solution-list-item">Tier 1–3 Help Desk Operations
                <ul>
                  <li>24/7 multi-channel support (phone, chat, email, ticketing)</li>
                  <li>Incident logging, triage, resolution, and escalation</li>
                  <li>End-user support for hardware, software, VPN, and mobile devices</li>
                </ul>
              </li>
              <li className="dd5-solution-list-item">Network Operations Center (NOC)
                <ul>
                  <li>Proactive infrastructure monitoring and event management</li>
                  <li>Performance diagnostics, fault isolation, and incident response</li>
                  <li>Automated alerting and ticketing integration (ServiceNow, BMC)</li>
                </ul>
              </li>
              <li className="dd5-solution-list-item">Field Support & Remote Assistance
                <ul>
                  <li>On-site technical assistance for federal offices and installations</li>
                  <li>Remote access troubleshooting and system restoration</li>
                  <li>Imaging, deployment, and lifecycle support for end-user devices</li>
                </ul>
              </li>
              <li className="dd5-solution-list-item">ITIL / ITSM-Based Service Delivery
                <ul>
                  <li>Service catalog design and SLA tracking</li>
                  <li>Change, configuration, and incident management</li>
                  <li>Knowledge base creation and continuous service improvement</li>
                </ul>
              </li>
              <li className="dd5-solution-list-item">VIP / Executive Support
                <ul>
                  <li>High-touch support for SES, General Officer, and executive users</li>
                  <li>Secure mobile, VTC, and communication support</li>
                  <li>Discreet, proactive service with zero-disruption expectation</li>
                </ul>
              </li>
            </ul>
          </div>
        )}
        {activeTab === 'ourTools' && (
          <div className="dd5-solution-tab-pane">
            <div className="dd5-tools-content">
              <div className="dd5-tools-image">
                <img src="/images/dd5.1.jpg" alt="IT Support Tools" />
              </div>
              <div className="dd5-tools-text">
                <ul className="dd5-tools-list">
                  <li>
                    <span className="tools-title">·Service Management:</span>
                    <span className="tools-content"> ServiceNow, BMC Remedy, Cherwell, Freshservice</span>
                  </li>
                  <li>
                    <span className="tools-title">·Remote Support:</span>
                    <span className="tools-content"> BeyondTrust, TeamViewer, LogMeIn Rescue, SCCM</span>
                  </li>
                  <li>
                    <span className="tools-title">·Monitoring & NOC:</span>
                    <span className="tools-content"> SolarWinds, Zabbix, PRTG, Nagios</span>
                  </li>
                  <li>
                    <span className="tools-title">·Asset Management:</span>
                    <span className="tools-content"> JAMF, Ivanti, Intune, Lansweeper</span>
                  </li>
                  <li>
                    <span className="tools-title">·Knowledge Systems:</span>
                    <span className="tools-content"> Confluence, SharePoint, GitBook</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'whyTechFocus' && (
          <div className="dd5-solution-tab-pane">
            <div className="dd5-tools-content">
              <div className="dd5-tools-image">
                <img src="/images/dd5.2.jpg" alt="Why TechFocus" />
              </div>
              <div className="dd5-tools-text">
                <ul className="dd5-tools-list why-techfocus-list">
                  <li>·Flexible Tier 1–3 support models tailored to federal operations</li>
                  <li>·Experienced in CONUS and OCONUS deployments</li>
                  <li>·ITIL-certified professionals and ITSM process maturity</li>
                  <li>·Rapid deployment capabilities and surge staffing experience</li>
                  <li>·SBA 8(a) and WOSB certified – agile and compliant service delivery partner</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
  </div>
);
};

export default DD5Page; 