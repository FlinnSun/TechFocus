#!/bin/bash

echo "🚀 开始推送到GitHub..."

# 检查网络连接
echo "📡 检查网络连接..."
if ping -c 1 github.com &> /dev/null; then
    echo "✅ 网络连接正常"
else
    echo "❌ 网络连接失败，请检查网络设置"
    exit 1
fi

# 设置HTTPS连接
echo "🔧 设置HTTPS连接..."
git remote set-url origin https://github.com/FlinnSun/TechFocus.git

# 分批推送
echo "📤 开始分批推送..."

echo "📦 推送第一批（主要功能更新）..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ 推送成功！"
else
    echo "❌ 推送失败，尝试SSH连接..."
    git remote set-url origin git@github.com:FlinnSun/TechFocus.git
    git push origin main
fi

echo "🎉 推送完成！" 