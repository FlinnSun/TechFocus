import React from 'react';
import './HardwarePage.css';

const HardwarePage = () => {

  return (
    <div className="hardware-page">
      <div className="hardware-page-container">
        {/* 页面标题 */}
        <div className="hardware-page-header">
          <h1 className="hardware-page-title">IT Products & Hardware</h1>
          <div className="hardware-title-line"></div>
        </div>
        
        {/* 页面内容 */}
        <div className="hardware-content">
          {/* 卡片画廊（替换原文字说明） */}
          <div className="hardware-gallery">
            {[1,2,3,4,5,6].map((idx) => (
              <div className="hardware-gallery-card" key={idx}>
                <img
                  src={`/images/h${idx}.jpg`}
                  alt={`Hardware ${idx}`}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                {idx === 1 && <div className="card-label">CAC keyboards/readers</div>}
                {idx === 2 && <div className="card-label">Privacy screens</div>}
                {idx === 3 && <div className="card-label">Webcams/headsets</div>}
                {idx === 4 && <div className="card-label">Speakerphones/VC</div>}
                {idx === 5 && <div className="card-label">Cisco Catalyst</div>}
                {idx === 6 && <div className="card-label">Optics/cabling</div>}
              </div>
            ))}
          </div>

          {/* 第二组卡片画廊（复制粘贴） */}
          <div className="hardware-gallery">
            {[1,2,3,4,5,6].map((idx) => (
              <div className="hardware-gallery-card" key={`second-${idx}`}>
                <img
                  src={`/images/pro${idx}.jpg`}
                  alt={`Product ${idx}`}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                {idx === 1 && <div className="card-label">UPS & spares</div>}
                {idx === 2 && <div className="card-label">Mobile/compact print & scan</div>}
                {idx === 3 && <div className="card-label">FIPS 140-2 encrypted drives</div>}
                {idx === 4 && <div className="card-label">NIAP/EAL secure KVMs — Belki</div>}
                {idx === 5 && <div className="card-label">Cisco IP Phones</div>}
                {idx === 6 && <div className="card-label">4K signage& mounts</div>}
              </div>
            ))}
          </div>

          {/* 描述文字 */}
          <div className="hardware-description">
            <p>
              TechFocus delivers a comprehensive range of office electronics and computing products—including laptops, desktops, workstations, tablets, Chromebooks, servers, monitors, calculators, networking equipment, peripherals, and accessories—working directly with trusted OEMs to ensure all equipment meets federal quality, compliance, and procurement standards. We have proven experience delivering solutions from leading brands such as Cisco, Dell, and HP across federal agencies.
            </p>
            <p>
              Our hardware is deployed across a wide spectrum of government environments—from DoD facilities and federal health agencies to civilian offices and mission-critical field operations. Whether supporting secure infrastructure at military bases or modernizing workstations for federal offices, we deliver with precision, speed, and accountability.
            </p>
            <p>
              At TechFocus, integrity is at the core of our delivery. If issues arise, we don&apos;t deflect—we resolve. That&apos;s why our clients trust us to deliver the right solutions, on time, with full transparency.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HardwarePage; 