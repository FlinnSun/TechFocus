import React from 'react';
import './KPISection.css';

const KPISection = () => {
  return (
    <div className="kpi-section">
      <div className="kpi-container">
        <div className="kpi-card">
          <div className="kpi-value kpi-white">&gt;75%</div>
          <div className="kpi-line kpi-line-orange"></div>
          <div className="kpi-label">
            <div className="kpi-subtitle">Employees with an advanced degree</div>
          </div>
        </div>
        
                  <div className="kpi-card">
            <div className="kpi-value kpi-white">12+</div>
            <div className="kpi-line kpi-line-orange"></div>
            <div className="kpi-label">
              <div className="kpi-subtitle">Over 12 agencies served</div>
            </div>
          </div>
        
                  <div className="kpi-card">
            <div className="kpi-value kpi-white">1,200+</div>
            <div className="kpi-line kpi-line-orange"></div>
            <div className="kpi-label">
              <div className="kpi-subtitle">Average end users benefited per project</div>
            </div>
          </div>
        
        <div className="kpi-card">
          <div className="kpi-value kpi-white">17+</div>
          <div className="kpi-line kpi-line-orange"></div>
          <div className="kpi-label">
            <div className="kpi-subtitle">Over 17 U.S. States or Territories served</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KPISection;
