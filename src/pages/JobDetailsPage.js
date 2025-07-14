import React from 'react';
import './JobDetailsPage.css';
import ApplicationForm from '../components/ApplicationForm';

const JobDetailsPage = () => {
  return (
    <div className="job-details-page">
      <div className="job-details-container">
        {/* 职位标题 */}
        <div className="job-header">
          <h1 className="job-title">IT/Cybersecurity Intern</h1>
        </div>

        {/* Job Details 部分 */}
        <div className="job-section">
          <h2 className="section-title">Job Details</h2>
          <div className="section-divider"></div>
          
          <div className="job-details-content">
            <div className="job-details-text">
              <p><strong>Job Location</strong>Salvia St. Arvada CO,80007</p>
              <p><strong>Remote Type</strong>Hybrid</p>
              <p><strong>Position Type</strong>Internship</p>
              <p><strong>Education Level</strong>4 Year Degree</p>
            </div>
            <div className="job-details-form">
              <ApplicationForm />
            </div>
          </div>
        </div>

        {/* Description 部分 */}
        <div className="job-section">
          <h2 className="section-title">Description</h2>
          <div className="section-divider"></div>
          
          <div className="description-content">
            <h3>Responsibility:</h3>
            <ul>
              <li>Learn cybersecurity standards (e.g., FISMA, NIST RMF/CSF, ISO 27001, DoD CMMC).</li>
              <li>Conduct security and privacy risk analysis.</li>
              <li>Provide guidance on cybersecurity best practices (e.g., CDM, IAM, Threat Modeling, DLP, IDS/IPS, VPN, Incident Management).</li>
              <li>Research emerging security topics, tools, and techniques.</li>
              <li>Support IT Helpdesk:</li>
              <ul>
                <li>Troubleshoot hardware/software issues and assist with system configurations.</li>
                <li>Install/maintain systems, networks, and peripherals.</li>
                <li>Manage technology projects (e.g., software deployments, upgrades).</li>
                <li>Resolve helpdesk tickets with excellent customer service.</li>
              </ul>
              <li>Administer Microsoft 365 (Azure/Entra, Intune, SharePoint, Teams).</li>
              <li>Manage user/device accounts in Active Directory and Microsoft Entra.</li>
              <li>Maintain IT documentation and hardware inventory.</li>
              <li>Participate in meetings/training to enhance tech skills.</li>
              <li>Perform additional duties as assigned.</li>
            </ul>
          </div>
        </div>

        {/* Qualification 部分 */}
        <div className="job-section">
          <h2 className="section-title">Qualification</h2>
          <div className="section-divider"></div>
          
          <div className="qualification-content">
            <h3>Requirements:</h3>
            <ul>
              <li>Exposure to Cybersecurity Fundamentals and basic understanding of computer hardware, operating systems, and networking concepts</li>
              <li>Strong problem-solving and critical thinking skills</li>
              <li>Excellent communication and interpersonal skills, with the ability to work effectively in a team environment</li>
              <li>Proficiency with Microsoft Office tools and basic troubleshooting techniques</li>
              <li>Experience with computer hardware assembly, software installation, and system configuration is a plus</li>
              <li>Ability to prioritize tasks and manage time efficiently in a fast-paced environment</li>
              <li>Eagerness to gain hands-on experience and contribute to meaningful projects</li>
              <li>Enthusiasm for IT, Cybersecurity, and a passion for technology-driven solutions</li>
              <li>Must be local to the DMV area</li>
              <li>This internship is primarily remote with occasional on-site duties in Windsor Mill, MD</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage; 