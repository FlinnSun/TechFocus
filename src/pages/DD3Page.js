import React, { useState } from 'react';
import './DD3Page.css';

const DD3Page = () => {
  const [activeTab, setActiveTab] = useState('whatWeDo'); // 默认激活 'What We Do'

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
  <div className="dd3-root">
    {/* Banner: Title is now inside the image container */}
    <div className="dd3-img-section1">
    </div>
    
    {/* Main content text */}
    <div className="dd3-main-text">
      <div className="dd3-section1-title">
        Securing Federal Mission Systems in a Dynamic Threat Environment
      </div>
      <div className="dd3-section1-paragraph dd3-paragraph-bold">
        As federal systems face increasingly sophisticated cyber threats—from ransomware and insider attacks to nation-state adversaries—cybersecurity has become a mission-critical pillar of government operations. Agencies are now expected to implement Zero Trust frameworks, modernize legacy architectures, and meet evolving compliance standards without disrupting service delivery.
      </div>
      <div className="dd3-section1-paragraph">
        At TechFocus, we provide comprehensive cybersecurity solutions that help federal and defense clients protect mission systems, detect intrusions early, and recover quickly. Our services are aligned with NIST guidelines, FedRAMP requirements, and DoD cyber strategy, with specialized support for both IT and Operational Technology (OT) environments.
      </div>
    </div>
          {/* OUR SOLUTION section */}
      <div className="dd3-our-solution">
        <div className="dd3-our-solution-text">OUR SOLUTION</div>
        <div className="dd3-our-solution-rect" />
      </div>

      {/* Solution Tabs Navigation */}
      <div className="dd3-solution-tabs-nav">
        <div className={`dd3-solution-tab-item ${activeTab === 'whatWeDo' ? 'active' : ''}`} onClick={() => handleTabClick('whatWeDo')}>
          <svg className="dd3-tab-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.33334C10.8 3.33334 3.33334 10.8 3.33334 20C3.33334 29.2 10.8 36.6667 20 36.6667C29.2 36.6667 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33334 20 3.33334ZM20 6.66667C27.3667 6.66667 33.3333 12.6333 33.3333 20C33.3333 27.3667 27.3667 33.3333 20 33.3333C12.6333 33.3333 6.66667 27.3667 6.66667 20C6.66667 12.6333 12.6333 6.66667 20 6.66667ZM22.5 15H17.5V20H15V22.5H17.5V27.5H20V22.5H25V20H20V15H22.5Z" fill="white"/>
          </svg>
          <span>What We Do</span>
        </div>
        <div className={`dd3-solution-tab-item ${activeTab === 'ourTools' ? 'active' : ''}`} onClick={() => handleTabClick('ourTools')}>
          <svg className="dd3-tab-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.3333 28.3333H11.6667V33.3333H28.3333V28.3333ZM28.3333 6.66667H11.6667V11.6667H28.3333V6.66667ZM11.6667 17.5V22.5H28.3333V17.5H11.6667Z" fill="white"/>
          </svg>
          <span>Our Tools & Platforms</span>
        </div>
        <div className={`dd3-solution-tab-item ${activeTab === 'whyTechFocus' ? 'active' : ''}`} onClick={() => handleTabClick('whyTechFocus')}>
          <svg className="dd3-tab-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20C25.5 20 30 15.5 30 10C30 4.5 25.5 0 20 0C14.5 0 10 4.5 10 10C10 15.5 14.5 20 20 20ZM20 23.3333C13.3333 23.3333 6.66667 26.6667 6.66667 33.3333V40H33.3333V33.3333C33.3333 26.6667 26.6667 23.3333 20 23.3333Z" fill="white"/>
          </svg>
          <span>Why TechFocus</span>
        </div>
      </div>

      {/* Solution Tab Content */}
      <div className="dd3-solution-tab-content">
        {activeTab === 'whatWeDo' && (
          <div className="dd3-solution-tab-pane">
            <ul className="dd3-solution-list">
              <li className="dd3-solution-list-item">Zero Trust Architecture (ZTA)
                <ul>
                  <li>Design and implementation of agency-wide ZTA frameworks</li>
                  <li>Identity and access management (IAM) and continuous validation</li>
                  <li>Micro-segmentation, least-privilege access enforcement</li>
                </ul>
              </li>
              <li className="dd3-solution-list-item">Security Operations & Incident Response
                <ul>
                  <li>SOC-as-a-Service (Cloud or On-Prem)</li>
                  <li>24/7 monitoring, detection, and threat hunting</li>
                  <li>Rapid incident response and forensic analysis</li>
                </ul>
              </li>
              <li className="dd3-solution-list-item">Compliance & Governance
                <ul>
                  <li>NIST SP 800-53, 800-171, and 800-207 implementation</li>
                  <li>FedRAMP readiness and authorization support</li>
                  <li>Risk Management Framework (RMF) and ATO preparation</li>
                  <li>Cybersecurity Maturity Model Certification (CMMC) support</li>
                </ul>
              </li>
              <li className="dd3-solution-list-item">Threat Emulation & Testing
                <ul>
                  <li>Red Team / Blue Team / Purple Team exercises</li>
                  <li>Penetration testing and vulnerability assessments</li>
                  <li>Security gap analysis and roadmap planning</li>
                </ul>
              </li>
              <li className="dd3-solution-list-item">Emerging Technology Security
                <ul>
                  <li>IoT and Cyber-Physical System (CPS) security assessments</li>
                  <li>OT/ICS network defense and segmentation</li>
                  <li>Secure deployment of edge computing and connected devices</li>
                </ul>
              </li>
            </ul>
          </div>
        )}
        {activeTab === 'ourTools' && (
          <div className="dd3-solution-tab-pane">
            <div className="dd3-tools-content">
              <div className="dd3-tools-image">
                <img src="/images/dd3.1.jpg" alt="Cybersecurity Tools" />
              </div>
              <div className="dd3-tools-text">
                <ul className="dd3-tools-list">
                  <li>
                    <span className="tools-title">· SIEM & Detection:</span>
                    <span className="tools-content"> Splunk, Elastic, Azure Sentinel, QRadar</span>
                  </li>
                  <li>
                    <span className="tools-title">· EDR/XDR:</span>
                    <span className="tools-content"> CrowdStrike, SentinelOne, Microsoft Defender</span>
                  </li>
                  <li>
                    <span className="tools-title">· Identity & ZTA:</span>
                    <span className="tools-content"> Okta, ForgeRock, Cisco Duo, AWS IAM</span>
                  </li>
                  <li>
                    <span className="tools-title">· Compliance Tools:</span>
                    <span className="tools-content"> eMASS, Xacta, Nessus, SCAP, OpenRMF</span>
                  </li>
                  <li>
                    <span className="tools-title">· DevSecOps Integration:</span>
                    <span className="tools-content"> GitLab, Jenkins, SonarQube, Aqua, Prisma Cloud</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'whyTechFocus' && (
          <div className="dd3-solution-tab-pane">
            <div className="dd3-tools-content">
              <div className="dd3-tools-image">
                <img src="/images/dd3.2.jpg" alt="Why TechFocus" />
              </div>
              <div className="dd3-tools-text">
                <ul className="dd3-tools-list why-techfocus-list">
                  <li>· Expert in deploying ZTA models tailored for DoD and Civilian agencies</li>
                  <li>· Experienced SOC engineers with Top Secret/SCI eligibility</li>
                  <li>· Proven track record supporting RMF and FedRAMP compliance initiatives</li>
                  <li>· Rapid deployment of mission-tailored cybersecurity solutions</li>
                  <li>· SBA 8(a) and WOSB certified – trusted for high-assurance government contracts</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
  </div>
);
};

export default DD3Page; 