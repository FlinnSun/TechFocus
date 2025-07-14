import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  // 视频配置
  const videoPath = '/videos/hero-video.mp4'; // 使用保存的 MP4 视频
  const useVideo = true; // 设置为 true 使用视频背景
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="hero">
      {/* 背景层 */}
      <div className="hero-background">
        {useVideo ? (
          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            onError={(e) => {
              console.warn('视频加载失败，使用默认背景');
              setVideoLoaded(false);
            }}
          >
            {/* 支持多种格式，浏览器会自动选择支持的格式 */}
            <source src={videoPath} type="video/mp4" />
            <source src={videoPath.replace('.mp4', '.webm')} type="video/webm" />
            <source src={videoPath.replace('.mp4', '.mov')} type="video/quicktime" />
            您的浏览器不支持视频播放
          </video>
        ) : null}
        
        {/* 视频覆盖层（可选，用于调整视频亮度） */}
        {useVideo && videoLoaded && (
          <div className="hero-video-overlay"></div>
        )}
      </div>

      {/* 内容层 */}
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            TechFocus
            <br />
            Let's shape the future
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero; 