import React from 'react';
import './HardwarePage.css';

const HardwarePage = () => {
  return (
    <div className="hardware-page">
      <div className="hardware-page-container">
        {/* 页面标题 */}
        <div className="hardware-page-header">
          <h1 className="hardware-page-title">HARDWARE</h1>
          <div className="hardware-title-line"></div>
        </div>
        
        {/* 页面内容 */}
        <div className="hardware-content">
          <div className="hardware-main-text">
            <p>
              TechFocus delivers a comprehensive range of office electronics and computing products—including laptops, desktops, workstations, tablets, Chromebooks, servers, monitors, calculators, networking equipment, peripherals, and accessories. We work directly with trusted OEMs to ensure all equipment meets federal quality, compliance, and procurement standards.
            </p>
            
            <p>
              Our hardware is deployed across a wide spectrum of government environments—from DoD facilities and federal health agencies to civilian offices and mission-critical field operations. Whether supporting secure infrastructure at military bases or modernizing workstations for federal offices, we deliver with precision, speed, and accountability.
            </p>
            
            <p>
              Beyond procurement, we offer dedicated program support through experienced project managers and subject matter experts who help agencies streamline operations, modernize infrastructure, and implement technology effectively.
            </p>
            
            <p>
              At TechFocus, integrity is at the core of our delivery. If issues arise, we don't deflect—we resolve. That's why our clients trust us to deliver the right solutions, on time, with full transparency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HardwarePage; 