import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Logo.css';

const Logo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // 配置选项
  const logoImagePath = '/images/logo.svg'; // SVG 图片路径
  const useImageLogo = true; // 设置为 true 使用图片文件
  const useCustomSVG = false; // 设置为 true 使用自定义 SVG 代码

  // 点击logo处理函数
  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // 在首页时，滚动到顶部
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // 在其他页面时，导航到首页
      navigate('/');
    }
  };

  // 自定义 SVG Logo（将你的 SVG 代码粘贴在这里）
  const CustomSVGLogo = () => (
    <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 将你的 SVG 内容粘贴在这里 */}
      {/* 例如: <path d="..." fill="#..."/> */}
      
      {/* 临时占位 - 替换为你的 logo SVG 代码 */}
      <rect width="200" height="60" rx="8" fill="#0A3161"/>
      <text x="100" y="35" textAnchor="middle" fill="white" fontSize="16" fontFamily="Inter" fontWeight="600">
        Your Logo SVG Here
      </text>
    </svg>
  );

  return (
    <div className="logo" onClick={handleLogoClick}>
      {useCustomSVG ? (
        // 使用自定义 SVG 代码
        <CustomSVGLogo />
      ) : useImageLogo ? (
        // 使用 SVG 图片文件
        <img 
          src={logoImagePath} 
          alt="Company Logo" 
          className="logo-image"
          onError={(e) => {
            console.warn('Logo 图片加载失败，请检查图片路径:', logoImagePath);
            // 如果图片加载失败，显示备用文本
            e.target.style.display = 'none';
            const fallback = document.createElement('div');
            fallback.className = 'logo-fallback-temp';
            fallback.style.cssText = 'padding: 16px 24px; background: #0A3161; color: white; border-radius: 8px; font-family: Inter; font-weight: 600;';
            fallback.textContent = '请将 logo.svg 放入 public/images/ 目录';
            e.target.parentNode.appendChild(fallback);
          }}
        />
      ) : (
        // 备用文本
        <div className="logo-fallback-main">
          请配置你的 Logo
        </div>
      )}
    </div>
  );
};

export default Logo; 