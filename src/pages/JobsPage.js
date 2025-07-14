import React from 'react';
import { Link } from 'react-router-dom';
import './JobsPage.css';

const JobsPage = () => {
  return (
    <div className="jobs-page">
      <div className="jobs-container">
        {/* 欢迎信息 */}
        <div className="jobs-welcome">
          <p className="welcome-text">
            Welcome to our Careers Portal! If you do not see an open position that matches your qualifications at this time please create a candidate profile by selecting "Apply Now" on the right-hand side to be considered for future openings.
          </p>
        </div>

        {/* 分隔线 */}
        <div className="jobs-divider"></div>

        {/* 职位列表 */}
        <div className="jobs-listing">
          <div className="job-item">
            <div className="job-content">
              <h3 className="job-title">IT/Cybersecurity Intern</h3>
              <p className="job-details">Internship | 1601 29th St. Suite 1292 Boulder, CO 80301</p>
            </div>
            <div className="job-apply">
              <Link to="/job-details" className="apply-button">Apply Now</Link>
            </div>
          </div>
        </div>

        {/* 底部分隔线 */}
        <div className="jobs-divider"></div>
      </div>
    </div>
  );
};

export default JobsPage; 