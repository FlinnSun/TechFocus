import React from 'react';
import './Clients.css';

const Customers = () => {
  // 客户logo数组 - 15张图片
  const clientLogos = [
    { id: 1, image: "/images/c1.jpg", alt: "Client 1" },
    { id: 2, image: "/images/c2.png", alt: "Client 2" },
    { id: 3, image: "/images/c3.jpg", alt: "Client 3" },
    { id: 4, image: "/images/c4.png", alt: "Client 4" },
    { id: 5, image: "/images/c5.jpg", alt: "Client 5" },
    { id: 6, image: "/images/c6.jpg", alt: "Client 6" },
    { id: 7, image: "/images/c7.jpg", alt: "Client 7" },
    { id: 8, image: "/images/c8.png", alt: "Client 8" },
    { id: 9, image: "/images/c9.jpg", alt: "Client 9" },
    { id: 10, image: "/images/c10.png", alt: "Client 10" },
    { id: 11, image: "/images/c11.jpg", alt: "Client 11" },
    { id: 12, image: "/images/c12.webp", alt: "Client 12" },
    { id: 13, image: "/images/c13.jpg", alt: "Client 13" },
    { id: 14, image: "/images/c14.jpg", alt: "Client 14" },
    { id: 15, image: "/images/c15.jpg", alt: "Client 15" }
  ];

  return (
    <section className="clients section" id="clients">
      <div className="container">
        <h2 className="section-title">Clients</h2>
        <div className="section-line"></div>
        
        {/* 固定的4*2网格显示 */}
        <div className="clients-grid">
          {clientLogos.map((logo) => (
            <div key={logo.id} className="client-logo">
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
    </section>
  );
};

export default Customers; 