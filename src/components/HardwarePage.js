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
          <h1 className="hardware-page-title">PRODUCTS</h1>
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
              At TechFocus, integrity is at the core of our delivery. If issues arise, we don&apos;t deflect—we resolve. That&apos;s why our clients trust us to deliver the right solutions, on time, with full transparency.
            </p>
          </div>

          {/* 产品分类卡片 */}
          <div className="hardware-categories">
            <div className="category-card">
              <div className="category-content">
                <h3>Computing Devices</h3>
                <ul>
                  <li><strong>Desktop computers:</strong> Personal computers designed for regular use at a single location, often including a system unit, monitor, keyboard, and mouse.</li>
                  <li><strong>Laptops and notebooks:</strong> Portable personal computers with a built-in keyboard, touchpad, and display, designed for mobile computing.</li>
                  <li><strong>Tablets:</strong> Portable touchscreen devices that typically run on mobile operating systems and offer many of the same functions as a computer.</li>
                  <li><strong>Texas Instruments - TI-84+ CE Graphing Calculator:</strong> A scientific graphing calculator, used primarily for mathematical and engineering purposes.</li>
                </ul>
              </div>
              <div className="category-image">
                <img src="/images/p1.png" alt="Computing Devices" />
              </div>
            </div>

            <div className="category-card">
              <div className="category-image">
                <img src="/images/p2.png" alt="Peripherals and I/O Device" />
              </div>
              <div className="category-content">
                <h3>Peripherals and I/O Device</h3>
                <ul>
                  <li><strong>Monitors and displays:</strong> Output devices that display visual content from a computer, including LED, LCD, and OLED screens.</li>
                  <li><strong>Keyboards and mice:</strong> Input devices that allow users to interact with a computer by entering data and commands.</li>
                  <li><strong>Printers and scanners:</strong> Devices that allow users to produce physical copies of digital documents (printers) or convert physical documents into digital formats (scanners).</li>
                  <li><strong>Audio and video peripherals:</strong> Devices like speakers, headphones, microphones, webcams, and projectors, which provide audio or video functionality to a computer.</li>
                </ul>
              </div>
            </div>

            <div className="category-card">
              <div className="category-content">
                <h3>Networking and Storage Devices</h3>
                <ul>
                  <li><strong>Networking devices:</strong> Equipment such as routers, switches, modems, and wireless access points that enable data communication and connectivity between computers and other devices.</li>
                  <li><strong>Storage devices:</strong> External hard drives, USB flash drives, and memory cards used for storing and transferring data.</li>
                </ul>
              </div>
              <div className="category-image">
                <img src="/images/p3.png" alt="Networking and Storage Devices" />
              </div>
            </div>

            <div className="category-card">
              <div className="category-image">
                <img src="/images/p4.png" alt="Additional Hardware & Accessories" />
              </div>
              <div className="category-content">
                <h3>Additional Hardware & Accessories</h3>
                <ul>
                  <li><strong>Computer components:</strong> Internal hardware such as processors, memory modules, motherboards, hard drives, solid-state drives, power supplies, and graphic cards.</li>
                  <li><strong>Accessories and cables:</strong> Various cables, adapters, and accessories needed for connecting and powering computer devices, such as HDMI, USB, VGA, and power cords.</li>
                </ul>
              </div>
            </div>
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