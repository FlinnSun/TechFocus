# TechFocus Website 图片资源说明

## 📋 首页图片资源

### Logo 图片
- logo.svg: 网站主Logo，SVG格式，支持无损缩放

### About区域滑动卡片图片 (首页)
这4张图片用于首页About区域的滑动轮播展示：
- card-1.jpg: 第一张轮播图片
- card-2.jpg: 第二张轮播图片  
- card-3.jpg: 第三张轮播图片
- card-4.jpg: 第四张轮播图片

建议规格：
- 格式: JPG, PNG, WebP
- 尺寸: 380x280px 或更大
- 比例: 4:3 横向（推荐）
- 文件大小: 建议小于 2MB

### Contract Vehicles区域图片 (首页)
这4张图片用于首页Contract Vehicles区域的静态展示：
- v.png: V1卡片图片（方形卡片，裁剪适配）
- v2.jpg: V2卡片图片（圆形卡片，完全显示）
- v3.png: V3卡片图片（简洁白卡片，完全显示）
- v4.png: V4卡片图片（简洁白卡片，完全显示）

### Footer社交图标 (首页)
这3张图片用于页脚社交媒体图标：
- r1.png: LinkedIn图标（40px显示，链接到TechFocus LLC官方LinkedIn）
- r2.png: 第二个社交图标（52px显示）
- r3.png: 第三个社交图标（32px显示）

## 📄 About页面图片资源

### OVERVIEW 部分
- a1.jpeg: 科技数据可视化图片
  - 用途: OVERVIEW部分左侧展示
  - 当前状态: 已配置
  - 显示效果: 左侧图片区域

### MISSION AND VISION 部分  
- a2.jpeg: 山峰人物剪影图片
  - 用途: MISSION AND VISION部分右侧展示
  - 当前状态: 已配置
  - 显示效果: 右侧图片区域

### TEAMS 部分
- a3.jpeg: 团队协作会议图片
  - 用途: TEAMS部分左侧展示  
  - 当前状态: 已配置
  - 显示效果: 左侧图片区域

### 底部区域
- a4.jpg: 美国国会大厦图片
  - 用途: About页面底部全宽展示
  - 当前状态: 已配置
  - 显示模式: 完整显示(contain模式)
  - 显示效果: 纯净图片显示，无装饰效果 + 自适应高度

## 📊 Solution页面图片资源

### IT服务展示图片
这5张图片用于Solution页面的IT服务展示：

- solution-data-analytics.jpg: 数据分析与AI/ML
  - 用途: 展示数据科学、机器学习、人工智能相关内容
  - 建议: 数据可视化、算法图表、AI界面等科技感强的图片
  - 尺寸: 628x609px 或更大

- solution-cloud-infrastructure.jpg: 云基础设施工程
  - 用途: 展示云计算、AWS、Azure、基础设施相关内容
  - 建议: 服务器机房、云架构图、网络拓扑等技术图片
  - 尺寸: 628x609px 或更大

- solution-cybersecurity.jpg: 网络安全
  - 用途: 展示网络安全、威胁防护、合规性相关内容
  - 建议: 安全防护界面、加密技术、防火墙等安全主题图片
  - 尺寸: 628x609px 或更大

- solution-agile-development.jpg: 敏捷软件开发
  - 用途: 展示软件开发、敏捷方法、跨平台开发相关内容
  - 建议: 代码编辑器、开发流程、团队协作等开发场景图片
  - 尺寸: 628x609px 或更大

- solution-it-support.jpg: IT支持服务
  - 用途: 展示IT支持、帮助台、技术援助相关内容
  - 建议: 技术支持场景、客服中心、系统维护等服务图片
  - 尺寸: 628x609px 或更大

## 🔧 图片技术要求

### 通用要求
- 格式支持: JPG, PNG, WebP (推荐WebP以获得更好压缩)
- 色彩模式: RGB
- 质量: 高质量，适合网页显示
- 文件大小: 建议单张图片小于 5MB

### 响应式考虑
- 提供高分辨率图片以支持Retina显示
- 考虑不同设备的显示效果
- 确保图片在移动端也能清晰显示

### 无障碍性
- 图片内容应当清晰易懂
- 避免纯文字内容的图片
- 考虑色盲用户的视觉体验

## 📁 文件结构
```
public/images/
├── logo.svg                        # 网站Logo
├── card-1.jpg                      # 首页滑动卡片1
├── card-2.jpg                      # 首页滑动卡片2  
├── card-3.jpg                      # 首页滑动卡片3
├── card-4.jpg                      # 首页滑动卡片4
├── v.png                           # Contract V1图片
├── v2.jpg                          # Contract V2图片
├── v3.png                          # Contract V3图片
├── v4.png                          # Contract V4图片
├── r1.png                          # Footer LinkedIn图标
├── r2.png                          # Footer社交图标2
├── r3.png                          # Footer社交图标3
├── a1.jpeg                         # About页面科技图片
├── a2.jpeg                         # About页面山峰图片
├── a3.jpeg                         # About页面团队图片
├── a4.jpg                          # About页面国会大厦图片
├── solution-data-analytics.jpg     # Solution页面数据分析图片
├── solution-cloud-infrastructure.jpg # Solution页面云基础设施图片
├── solution-cybersecurity.jpg      # Solution页面网络安全图片
├── solution-agile-development.jpg  # Solution页面敏捷开发图片
├── solution-it-support.jpg         # Solution页面IT支持图片
└── README.txt                      # 本说明文件
```

## ⚠️ 注意事项

1. **图片命名**: 请严格按照上述文件名命名，区分大小写
2. **路径位置**: 所有图片必须放在 `public/images/` 目录下
3. **版权问题**: 确保使用的图片具有合法使用权
4. **加载失败**: 网站已配置图片加载失败时的友好占位符
5. **性能优化**: 建议使用WebP格式以获得更好的加载性能

## 🎯 设计建议

- **品牌一致性**: 图片风格应与TechFocus的专业形象保持一致
- **色彩搭配**: 考虑与网站主色调(橙色#FF6A00, 蓝色#0A3161)的和谐搭配
- **视觉质量**: 使用高质量、专业的图片素材
- **内容相关**: 图片内容应与对应区域的文字说明相呼应
