import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContractVehiclesPage.css';

const ContractVehiclesPage = () => {
  const navigate = useNavigate();

  const handleSBA8aClick = () => {
    navigate('/sba8a');
  };

  const handleEDSOBClick = () => {
    navigate('/edsob');
  };

  const handleGASMASClick = () => {
    navigate('/gasmas');
  };

  return (
    <div className="contract-vehicles-page">
      <div className="contract-vehicles-page-container">
        {/* 页面标题 */}
        <div className="contract-vehicles-page-header">
          <h1 className="contract-vehicles-page-title">Contract vehicels</h1>
          <div className="contract-vehicles-title-line"></div>
        </div>
        
        {/* 合同卡片 */}
        <div className="contract-cards">
          <div className="contract-card blue-card" onClick={handleSBA8aClick}>
            <h2>Small Business<br/>Administration<br/>(SBA)8(a)</h2>
          </div>
          
          <div className="contract-card orange-card" onClick={handleEDSOBClick}>
            <h2>SBA WOSB and<br/>EDWOSB</h2>
          </div>
          
          <div className="contract-card blue-card" onClick={handleGASMASClick}>
            <h2>GAS MAS Schedule</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractVehiclesPage; 