import React from 'react';
import './KPISection.css';

const KPISection = () => {
  return (
    <div className="kpi-section">
      <div className="kpi-container">
        <div className="kpi-card">
          <div className="kpi-value kpi-blue">50%</div>
          <div className="kpi-line kpi-line-blue"></div>
          <div className="kpi-label">
            <div className="kpi-title"><strong>Staff</strong>: Master's+</div>
          </div>
        </div>
        
                  <div className="kpi-card">
            <div className="kpi-value kpi-orange">1,200+</div>
            <div className="kpi-line kpi-line-orange"></div>
            <div className="kpi-label">
              <div className="kpi-subtitle">Average number of users affected per project</div>
            </div>
          </div>
        
                  <div className="kpi-card">
            <div className="kpi-value kpi-blue">80%</div>
            <div className="kpi-line kpi-line-blue"></div>
            <div className="kpi-label">
              <div className="kpi-title">staff: serving ≥3 govt agencies.</div>
            </div>
          </div>
        
        <div className="kpi-card">
          <div className="kpi-value kpi-red">8.5</div>
          <div className="kpi-line kpi-line-red"></div>
          <div className="kpi-label">
            <div className="kpi-subtitle">Average number of locations covered per project</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KPISection;
