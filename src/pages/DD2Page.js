import React, { useState } from 'react';
import './DD2Page.css';

const DD2Page = () => {
  const [activeTab, setActiveTab] = useState('whatWeDo'); // 默认激活 'What We Do'

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
  <div className="dd2-root">
    {/* Banner: Title is now inside the image container */}
    <div className="dd2-img-section1">
    </div>
    
    {/* Main content text */}
    <div className="dd2-main-text">
      <div className="dd2-section1-title">
        Enabling Secure, Scalable, and Mission-Ready IT Environments
      </div>
      <div className="dd2-section1-paragraph dd2-paragraph-bold">
        As agencies modernize to meet the demands of digital government, secure and efficient cloud infrastructure is foundational. Whether migrating legacy systems, building hybrid networks, or operating in classified environments, agencies need partners who understand the complexities of federal mandates, security requirements, and multi-cloud operations.
      </div>
      <div className="dd2-section1-paragraph">
        At TechFocus, we help defense and civilian agencies plan, migrate, and manage robust cloud and infrastructure environments—from AWS GovCloud to SIPRNet. We deliver end-to-end engineering support to ensure mission resilience, performance, and compliance at every stage.
      </div>
    </div>
          {/* OUR SOLUTION section */}
      <div className="dd2-our-solution">
        <div className="dd2-our-solution-text">OUR SOLUTION</div>
        <div className="dd2-our-solution-rect" />
      </div>

      {/* Solution Tabs Navigation */}
      <div className="dd2-solution-tabs-nav">
        <div className={`dd2-solution-tab-item ${activeTab === 'whatWeDo' ? 'active' : ''}`} onClick={() => handleTabClick('whatWeDo')}>
          <svg className="dd2-tab-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.33334C10.8 3.33334 3.33334 10.8 3.33334 20C3.33334 29.2 10.8 36.6667 20 36.6667C29.2 36.6667 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33334 20 3.33334ZM20 6.66667C27.3667 6.66667 33.3333 12.6333 33.3333 20C33.3333 27.3667 27.3667 33.3333 20 33.3333C12.6333 33.3333 6.66667 27.3667 6.66667 20C6.66667 12.6333 12.6333 6.66667 20 6.66667ZM22.5 15H17.5V20H15V22.5H17.5V27.5H20V22.5H25V20H20V15H22.5Z" fill="white"/>
          </svg>
          <span>What We Do</span>
        </div>
        <div className={`dd2-solution-tab-item ${activeTab === 'ourTools' ? 'active' : ''}`} onClick={() => handleTabClick('ourTools')}>
          <svg className="dd2-tab-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.3333 28.3333H11.6667V33.3333H28.3333V28.3333ZM28.3333 6.66667H11.6667V11.6667H28.3333V6.66667ZM11.6667 17.5V22.5H28.3333V17.5H11.6667Z" fill="white"/>
          </svg>
          <span>Our Tools & Platforms</span>
        </div>
        <div className={`dd2-solution-tab-item ${activeTab === 'whyTechFocus' ? 'active' : ''}`} onClick={() => handleTabClick('whyTechFocus')}>
          <svg className="dd2-tab-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20C25.5 20 30 15.5 30 10C30 4.5 25.5 0 20 0C14.5 0 10 4.5 10 10C10 15.5 14.5 20 20 20ZM20 23.3333C13.3333 23.3333 6.66667 26.6667 6.66667 33.3333V40H33.3333V33.3333C33.3333 26.6667 26.6667 23.3333 20 23.3333Z" fill="white"/>
          </svg>
          <span>Why TechFocus</span>
        </div>
      </div>

      {/* Solution Tab Content */}
      <div className="dd2-solution-tab-content">
        {activeTab === 'whatWeDo' && (
          <div className="dd2-solution-tab-pane">
            <ul className="dd2-solution-list">
              <li className="dd2-solution-list-item">Cloud Readiness & Migration
                <ul>
                  <li>Cloud adoption strategies tailored to mission needs</li>
                  <li>Migration planning and execution (AWS GovCloud, Azure Government, milCloud)</li>
                  <li>Workload assessment, prioritization, and optimization</li>
                  <li>FedRAMP-Ready architectures and secure configurations</li>
                </ul>
              </li>
              <li className="dd2-solution-list-item">Hybrid Infrastructure Design
                <ul>
                  <li>Integrated on-prem/cloud hybrid network architectures</li>
                  <li>VPN, SD-WAN, and identity federation solutions</li>
                  <li>High availability, fault tolerance, and disaster recovery design</li>
                  <li>Network segmentation and zero trust integration</li>
                </ul>
              </li>
              <li className="dd2-solution-list-item">Data Center Modernization
                <ul>
                  <li>Rationalization and consolidation of physical infrastructure</li>
                  <li>Support for Data Center Optimization Initiative (DCOI)</li>
                  <li>Containerization and virtualization (Docker, Kubernetes, VMware)</li>
                  <li>Storage modernization and backup/restore services</li>
                </ul>
              </li>
              <li className="dd2-solution-list-item">Classified Network Support
                <ul>
                  <li>SIPRNet / NIPRNet / JWICS / NSANet integration support</li>
                  <li>COMSEC, DISN boundary, and enclave support</li>
                  <li>Cross-domain solution (CDS) design and validation</li>
                  <li>Secure transport and facilities support for air-gapped environments</li>
                </ul>
              </li>
            </ul>
          </div>
        )}
        {activeTab === 'ourTools' && (
          <div className="dd2-solution-tab-pane">
            <div className="dd2-tools-content">
              <div className="dd2-tools-image">
                <img src="/images/dd2.1.jpg" alt="Cloud Infrastructure Tools" />
              </div>
              <div className="dd2-tools-text">
                <ul className="dd2-tools-list">
                  <li>
                    <span className="tools-title">· Cloud Platforms:</span>
                    <span className="tools-content"> AWS GovCloud, Azure Government, Google Cloud for Fed</span>
                  </li>
                  <li>
                    <span className="tools-title">· Infrastructure Tools:</span>
                    <span className="tools-content"> Terraform, Ansible, CloudFormation, Chef</span>
                  </li>
                  <li>
                    <span className="tools-title">· Networking & Security:</span>
                    <span className="tools-content"> Cisco, Juniper, Palo Alto, Fortinet, F5</span>
                  </li>
                  <li>
                    <span className="tools-title">· Virtualization/Containers:</span>
                    <span className="tools-content"> VMware, Docker, Kubernetes, OpenShift</span>
                  </li>
                  <li>
                    <span className="tools-title">· Monitoring & Mgmt:</span>
                    <span className="tools-content"> SolarWinds, Splunk, Prometheus, Zabbix, ELK Stack</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'whyTechFocus' && (
          <div className="dd2-solution-tab-pane">
            <div className="dd2-tools-content">
              <div className="dd2-tools-image">
                <img src="/images/dd2.2.jpg" alt="Why TechFocus" />
              </div>
              <div className="dd2-tools-text">
                <ul className="dd2-tools-list why-techfocus-list">
                  <li>· Deep understanding of federal cloud and hybrid infrastructure policies</li>
                  <li>· Proven success supporting classified and unclassified environments</li>
                  <li>· Agile delivery with infrastructure-as-code automation</li>
                  <li>· Strong OEM relationships and integration experience</li>
                  <li>· SBA 8(a) and WOSB certified – trusted for critical infrastructure delivery</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
  </div>
);
};

export default DD2Page; 