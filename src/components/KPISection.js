import React from 'react';
import './KPISection.css';

const KPISection = () => {
  return (
    <div className="kpi-section">
      <div className="kpi-container">
        <div className="kpi-card">
          <div className="kpi-value kpi-blue">&gt;50%</div>
          <div className="kpi-line kpi-line-blue"></div>
          <div className="kpi-label">
            <div className="kpi-subtitle">Employees with an advanced degree</div>
          </div>
        </div>
        
                  <div className="kpi-card">
            <div className="kpi-value kpi-blue">8+</div>
            <div className="kpi-line kpi-line-blue"></div>
            <div className="kpi-label">
              <div className="kpi-subtitle">Over 8 agencies served</div>
            </div>
          </div>
        
                  <div className="kpi-card">
            <div className="kpi-value kpi-orange">1,200+</div>
            <div className="kpi-line kpi-line-orange"></div>
            <div className="kpi-label">
              <div className="kpi-subtitle">Average end users benefited per project</div>
            </div>
          </div>
        
        <div className="kpi-card">
          <div className="kpi-value kpi-red">5+</div>
          <div className="kpi-line kpi-line-red"></div>
          <div className="kpi-label">
            <div className="kpi-subtitle">Over 5 U.S. States or Territories served</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KPISection;
