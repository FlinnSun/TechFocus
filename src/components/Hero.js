import React, { useState, useRef, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  // 视频配置
  const videoPath = '/videos/herovideo(1).mp4'; // 使用herovideo(1).mp4视频
  const useVideo = true; // 设置为 true 使用视频背景
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  // 控制视频播放5秒后重新开始
  useEffect(() => {
    if (videoRef.current && videoLoaded) {
      const video = videoRef.current;
      
      const handleTimeUpdate = () => {
        if (video.currentTime >= 5) {
          video.currentTime = 0; // 重置到开始位置
        }
      };

      video.addEventListener('timeupdate', handleTimeUpdate);
      
      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, [videoLoaded]);

  return (
    <section className="hero">
              {/* 背景层 */}
        <div className="hero-background">
          {useVideo ? (
            <video
              ref={videoRef}
              className="hero-video"
              src={videoPath}
              autoPlay
              muted
              playsInline
              preload="auto"
              loop
              onLoadedData={() => setVideoLoaded(true)}
              onCanPlay={() => {
                // 视频可以播放时立即开始播放
                if (videoRef.current) {
                  videoRef.current.play().catch(() => {
                    // 静默处理播放失败
                  });
                }
              }}
              onError={() => {
                // 视频加载失败，使用默认背景
                setVideoLoaded(false);
              }}
            />
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
            <span className="hero-subtitle">delivers mission-critical technology products<br />and solutions to the federal government</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero; 