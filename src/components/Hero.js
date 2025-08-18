import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  // 图片配置
  const imagePath = '/images/D.jpg'; // 使用D.jpg图片
  const useImage = true; // 设置为 true 使用图片背景
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="hero">
              {/* 背景层 */}
        <div className="hero-background">
          {useImage ? (
            <img
              className="hero-image"
              src={imagePath}
              alt="Hero Background"
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                console.warn('图片加载失败，使用默认背景');
                setImageLoaded(false);
              }}
            />
          ) : null}
          
          {/* 图片覆盖层（可选，用于调整图片亮度） */}
          {useImage && imageLoaded && (
            <div className="hero-image-overlay"></div>
          )}
        </div>

      {/* 内容层 */}
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            TechFocus
            <br />
            Always Advancing
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero; 