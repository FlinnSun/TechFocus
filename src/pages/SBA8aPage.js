import React from 'react';
import './SBA8aPage.css';

const SBA8aPage = () => {
  return (
    <div className="sba8a-page">
      <div className="sba8a-container">
        {/* 页面标题 */}
        <div className="sba8a-header">
          <h1 className="sba8a-title">Small Business Administration (SBA)8(a)</h1>
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
                SBA 8(a) Case Number: 307275<br/>
                Contract Ceiling: $4 million for goods and services<br/>
                8(a) Member Duration: December 2, 2016 – November 2, 2025
              </p>
              <div className="contract-details-line"></div>
            </div>
          </div>
          
          {/* 右侧图片 */}
          <div className="contract-info-right">
            <img src="/images/SBA .jpg" alt="SBA Logo" className="sba-image" />
          </div>
        </div>
        
        {/* 介绍内容 */}
        <div className="introduction-section">
          <p className="introduction-text">
            Introduction – The Small Business Administration (SBA) has developed a Business Development Program called the 8(a) program. It has been essential for helping socially and economically disadvantaged entrepreneurs gain access to opportunities they may have been unable to compete for.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SBA8aPage; 