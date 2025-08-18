import React, { useState, useEffect } from 'react';
import './HardwarePage.css';

const HardwarePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Partners logo数组 - 4张图片
  const partnerLogos = [
    { id: 1, image: "/images/par1.png", alt: "Partner 1" },
    { id: 2, image: "/images/par2.png", alt: "Partner 2" },
    { id: 3, image: "/images/par3.png", alt: "Partner 3" },
    { id: 4, image: "/images/par4.png", alt: "Partner 4" }
  ];

  // 每页显示4个logo，总共1页
  const itemsPerPage = 4;
  const totalPages = Math.ceil(partnerLogos.length / itemsPerPage);

  // 自动播放
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 4000); // 每4秒切换

    return () => clearInterval(interval);
  }, [totalPages]);

  // 获取当前页的logo
  const getCurrentPageLogos = () => {
    const startIndex = currentIndex * itemsPerPage;
    return partnerLogos.slice(startIndex, startIndex + itemsPerPage);
  };

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
              TechFocus delivers a comprehensive range of office electronics and computing products—including laptops, desktops, workstations, tablets, Chromebooks, servers, monitors, calculators, networking equipment, peripherals, and accessories. We work directly with trusted OEMs to ensure all equipment meets federal quality, compliance, and procurement standards.
            </p>
            <p>
              Our hardware is deployed across a wide spectrum of government environments—from DoD facilities and federal health agencies to civilian offices and mission-critical field operations. Whether supporting secure infrastructure at military bases or modernizing workstations for federal offices, we deliver with precision, speed, and accountability.
            </p>
            <p>
              At TechFocus, integrity is at the core of our delivery. If issues arise, we don&apos;t deflect—we resolve. That&apos;s why our clients trust us to deliver the right solutions, on time, with full transparency.
            </p>
          </div>

          {/* Partners 部分 */}
          <div className="hardware-partners">
            <h2 className="section-title">Partners</h2>
            <div className="section-line"></div>
            
            {/* Partners logo展示框 */}
            <div className="partners-carousel">
              {/* 显示当前页的logo */}
              <div className="partners-row">
                {getCurrentPageLogos().map((logo) => (
                  <div key={logo.id} className="partner-logo">
                    <img
                      src={logo.image}
                      alt={logo.alt}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.style.backgroundColor = '#ffffff';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HardwarePage; 