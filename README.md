# 轻练 V1.2.2 — iPhone 独立 Web App 修复版

本版基于 V1.2.1，**不修改现有训练数据库、打卡规则或备份内容**。

## GitHub Pages 上传

将此文件夹中的以下文件**全部上传到 GitHub 仓库根目录**（与 index.html 同级）：

- index.html
- manifest.webmanifest
- service-worker.js
- icon.svg
- icon-192.png
- icon-512.png
- apple-touch-icon.png

README.md 可选。不要只上传 index.html，否则缺少 PWA 配置。

## iPhone iOS 18 安装

1. GitHub Pages 部署完成后，在 Safari 中打开 `https://你的用户名.github.io/qinglian/`。
2. 确保页面显示新的轻练，再点击 Safari 分享 → 添加到主屏幕。
3. 从新图标打开；成功时应没有 Chrome 地址栏，并作为独立应用显示。
4. 旧 Chrome 快捷方式和原打卡记录先不要删除。Safari/桌面 Web App 可能有独立的数据空间；需要先从旧应用导出记录并在新应用恢复。
5. 新版有基础离线页面缓存；本地视频及存储仍受 iOS 容量限制，GitHub 公开视频不保证离线。

如果点击图标仍然去 Chrome：确认新 GitHub Pages 中能访问 `/qinglian/manifest.webmanifest`，并确认添加图标操作发生在 Safari 打开的已更新页面，而不是旧书签。
