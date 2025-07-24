import React from 'react';
import './ContractVehicles.css';

const ContractVehicles = () => {
  return (
    <section className="contract-vehicles section" id="contract">
      <div className="container">
        <h2 className="section-title">Contract Vehicles</h2>
        <div className="section-line"></div>
        
        {/* 只保留v3.png图片 */}
        <div className="contract-image-container">
          <img src="/images/v3.png" alt="Contract Vehicle V3" className="contract-single-image" />
        </div>
      </div>
    </section>
  );
};

export default ContractVehicles; 