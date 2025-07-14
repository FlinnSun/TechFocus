import React, { useState, useEffect } from 'react';
import './Clients.css';

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // 客户logo数组 - 简化为8张图片
  const clientLogos = [
    { id: 1, image: "/images/c1.jpg", alt: "Client 1" },
    { id: 2, image: "/images/c2.png", alt: "Client 2" },
    { id: 3, image: "/images/c3.jpg", alt: "Client 3" },
    { id: 4, image: "/images/c4.png", alt: "Client 4" },
    { id: 5, image: "/images/c5.jpg", alt: "Client 5" },
    { id: 6, image: "/images/c6.jpg", alt: "Client 6" },
    { id: 7, image: "/images/c7.jpg", alt: "Client 7" },
    { id: 8, image: "/images/c8.png", alt: "Client 8" }
  ];

  // 每页显示4个logo，总共2页（4+4）
  const itemsPerPage = 4;
  const totalPages = Math.ceil(clientLogos.length / itemsPerPage);

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
    return clientLogos.slice(startIndex, startIndex + itemsPerPage);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="clients section" id="clients">
      <div className="container">
        <h2 className="section-title">Clients</h2>
        <div className="section-line"></div>
        
        {/* 简化的轮播区域 */}
        <div className="clients-carousel">
          {/* 显示当前页的logo */}
          <div className="clients-row">
            {getCurrentPageLogos().map((logo) => (
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
          
          {/* 控制按钮 */}
          <button className="carousel-control prev" onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="carousel-control next" onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          {/* 指示器 - 只有3个页面 */}
          <div className="carousel-indicators">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients; 