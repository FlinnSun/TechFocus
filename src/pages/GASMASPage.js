import React from 'react';
import './GASMASPage.css';

const GASMASPage = () => {
  return (
    <div className="gasmas-page">
      <div className="gasmas-container">
        {/* 页面标题 */}
        <div className="gasmas-header">
          <h1 className="gasmas-title">GAS MAS Schedule</h1>
        </div>
        
        {/* 合同信息和图片布局 */}
        <div className="contract-info-layout">
          {/* 左侧合同信息 */}
          <div className="contract-info-left">
            <div className="contract-info-section">
              <h2 className="contract-info-title">Contract Information</h2>
              <div className="contract-info-line"></div>
            </div>
            
            <div className="contract-details-section">
              <p className="contract-details-text">
                Contract Number: 47QSWAA22D0091<br/>
                Period of Performance: September 6, 2022 – September 5, 2027<br/>
                We are specialized in: IT hardware and solutions
              </p>
              <div className="contract-details-line"></div>
            </div>
          </div>
          
          {/* 右侧图片 */}
          <div className="contract-info-right">
            <img src="/images/gsa.jpg" alt="GSA Logo" className="gasmas-image" />
          </div>
        </div>
        
        {/* 介绍内容 */}
        <div className="introduction-section">
          <p className="introduction-text">
            Introduction – The GSA Multiple Award Schedule (MAS) streamlines the procurement process for government agencies and is a long-term governmentwide contract program with commercial companies that provide access to millions of commercial products and services at fair and reasonable prices to the government.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GASMASPage; 