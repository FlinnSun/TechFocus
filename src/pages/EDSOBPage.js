import React from 'react';
import './EDSOBPage.css';

const EDSOBPage = () => {
  return (
    <div className="edsob-page">
      <div className="edsob-container">
        {/* 页面标题 */}
        <div className="edsob-header">
          <h1 className="edsob-title">SBA WOSB and EDWOSB</h1>
        </div>
        
        {/* 介绍标题 */}
        <div className="introduction-title-section">
          <h2 className="introduction-title">Introduction</h2>
          <div className="introduction-title-line"></div>
        </div>
        
        {/* 介绍内容 */}
        <div className="introduction-content-section">
          <p className="introduction-content-text">
            The federal government's goal is to award at least 5% of all federal contracting dollars to women-owned small businesses each year.
          </p>
          <br/>
          <p className="introduction-content-text">
            The SBA provides a level playing field for women business owners via this set-aside within where women-owned small businesses (WOSB) are underrepresented. Some contracts are restricted further to economically disadvantaged women-owned small businesses (EDWOSB).
          </p>
          <br/>
          <p className="introduction-content-text">
            Chainbridge Solutions is both a WOSB and EDWOSB.
          </p>
          <div className="introduction-content-line"></div>
        </div>
      </div>
    </div>
  );
};

export default EDSOBPage; 