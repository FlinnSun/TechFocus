# 📋 Logo 设置指南

## 🎯 如何更换为你的本地 Logo 图片

### 🌟 SVG 格式（强烈推荐！）

**SVG 是最佳选择**，具有以下优势：
- ✅ **矢量图形**: 无损缩放，任何尺寸都清晰
- ✅ **文件体积小**: 比 PNG/JPG 更小
- ✅ **高清支持**: 在 4K/Retina 屏幕上完美显示
- ✅ **透明背景**: 天然支持透明效果
- ✅ **加载更快**: 文件小，性能更好

### 第一步：准备你的 Logo 图片

**推荐格式优先级**：
1. **SVG** (最佳) - 矢量图形，完美缩放
2. **PNG** (很好) - 支持透明背景
3. **JPG** (可用) - 文件较小但不支持透明

**推荐尺寸**: 
- 宽度: 200-400px
- 高度: 60-120px
- SVG 格式可以任意尺寸

### 第二步：放置图片文件

将你的 logo 图片放入以下目录：

**SVG 格式**：
```
public/images/logo.svg  ← 推荐
```

**其他格式**：
```
public/images/logo.png
public/images/logo.jpg
```

### 第三步：配置使用方式

打开 `src/components/Logo.js`，你有三种使用方式：

#### 方式一：SVG 图片文件（推荐）
```javascript
const logoImagePath = '/images/logo.svg'; // 你的 SVG 文件
const useImageLogo = true;                 // 启用图片模式
const useCustomSVG = false;                // 关闭自定义 SVG
```

#### 方式二：直接嵌入 SVG 代码（最佳性能）
如果你有 SVG 代码，可以直接嵌入：
```javascript
const useImageLogo = false;   // 关闭图片模式
const useCustomSVG = true;    // 启用自定义 SVG
```

然后在 `CustomSVGLogo` 函数中粘贴你的 SVG 代码：
```javascript
const CustomSVGLogo = () => (
  <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
    {/* 将你的 SVG 路径和元素粘贴在这里 */}
    <path d="your-svg-path" fill="#your-color"/>
  </svg>
);
```

#### 方式三：PNG/JPG 图片
```javascript
const logoImagePath = '/images/logo.png'; // 或 .jpg
const useImageLogo = true;
const useCustomSVG = false;
```

### 第四步：查看效果

保存文件后，网站会自动重新加载，你就能看到新的 logo 了！

## 🔧 高级配置

### 调整 SVG Logo 尺寸

修改 `src/components/Logo.css` 文件：

```css
.logo-image {
  width: 150px;        /* 调整宽度 */
  height: auto;        /* 保持比例 */
  max-height: 70px;    /* 最大高度 */
  object-fit: contain; /* 保持图片比例 */
}

/* 对于直接嵌入的 SVG */
.logo svg {
  width: 150px;        /* 调整宽度 */
  height: auto;        /* 保持比例 */
}
```

### 响应式调整

```css
@media (max-width: 768px) {
  .logo-image,
  .logo svg {
    width: 100px;      /* 平板设备尺寸 */
    max-height: 50px;
  }
}

@media (max-width: 480px) {
  .logo-image,
  .logo svg {
    width: 80px;       /* 手机设备尺寸 */
    max-height: 40px;
  }
}
```

## 🚨 故障排除

### SVG 图片不显示？
1. **检查文件路径**: 确保 SVG 在 `public/images/` 目录下
2. **检查文件名**: 确保 `logoImagePath` 中的文件名正确 (`.svg`)
3. **检查 SVG 格式**: 确保 SVG 文件格式正确
4. **检查控制台**: 打开浏览器开发者工具查看错误信息

### SVG 显示但颜色不对？
- SVG 文件中的颜色可能需要调整
- 可以用文本编辑器打开 SVG 文件，修改 `fill` 属性的颜色值

### SVG 太大或太小？
- SVG 的 `width` 和 `height` 属性会影响显示尺寸
- 可以在 CSS 中覆盖尺寸设置

## 📝 快速操作步骤总结

### 使用 SVG 文件：
1. 将 SVG 文件放入 `public/images/logo.svg`
2. 打开 `src/components/Logo.js`
3. 修改：`const logoImagePath = '/images/logo.svg';`
4. 修改：`const useImageLogo = true;`
5. 保存文件，查看效果

### 使用 SVG 代码：
1. 复制你的 SVG 代码
2. 打开 `src/components/Logo.js`
3. 在 `CustomSVGLogo` 函数中粘贴 SVG 代码
4. 修改：`const useCustomSVG = true;`
5. 保存文件，查看效果

**SVG 格式完全没有问题，甚至是最好的选择！** 🎉 