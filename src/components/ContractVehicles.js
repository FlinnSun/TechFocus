import React from 'react';
import './ContractVehicles.css';

const ContractVehicles = () => {
  // 四个原始图片配置
  const contractImages = [
    {
      id: 1,
      src: '/images/v.png',
      alt: '合同车辆 V1'
    },
    {
      id: 2,
      src: '/images/v2.jpg',
      alt: '合同车辆 V2'
    },
    {
      id: 3,
      src: '/images/v3.png',
      alt: '合同车辆 V3'
    },
    {
      id: 4,
      src: '/images/v4.png',
      alt: '合同车辆 V4'
    }
  ];

  return (
    <section className="contract-vehicles section" id="contract">
      <div className="container">
        <h2 className="section-title">Contract Vehicles</h2>
        <div className="section-line"></div>
        
        <div className="contract-grid">
          {contractImages.map((image) => (
            <div key={image.id} className="contract-card">
              <div className="contract-image-wrapper">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="contract-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="contract-placeholder backup" style={{display: 'none'}}>
                  <span>图片加载失败</span>
            </div>
          </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContractVehicles; 