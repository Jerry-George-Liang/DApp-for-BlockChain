# 区块链专题网站

一个基于Vue 3构建的现代化区块链专题学习平台，提供区块链技术原理、论文聚合、代码教程、行业应用和工具资源等内容。

## ✨ 功能特性

- 🎨 **科技感UI设计**：采用现代化的深色主题设计，搭配动态粒子背景效果
- 📱 **响应式布局**：完美适配桌面端、平板和移动设备
- 📚 **丰富的学习资源**：
  - 区块链技术原理详解
  - 最新区块链论文聚合
  - 实用代码教程
  - 行业应用案例分析
  - 区块链工具资源
- 🎯 **粒子动态背景**：基于Canvas API实现的交互式粒子效果，增强科技感
- 🔗 **社交媒体集成**：链接到主要区块链项目的官方社交媒体
- ⚡ **高性能**：基于Vite构建，加载速度快，运行流畅

## 🛠️ 技术栈

- **前端框架**：Vue 3 (Composition API)
- **构建工具**：Vite
- **CSS框架**：Tailwind CSS
- **图标库**：Font Awesome
- **动画效果**：Canvas API (粒子系统)
- **路由管理**：Vue Router

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装步骤

1. **克隆仓库**
   ```bash
   git clone <仓库地址>
   cd blockchain-website
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **构建生产版本**
   ```bash
   npm run build
   ```

5. **预览生产构建**
   ```bash
   npm run preview
   ```

## 📁 项目结构

```
├── src/
│   ├── assets/           # 静态资源文件
│   ├── components/       # Vue组件
│   │   └── Footer.vue    # 页脚组件
│   ├── views/            # 页面组件
│   │   ├── HomeView.vue          # 首页
│   │   ├── TechPrinciplesView.vue # 技术原理
│   │   ├── PapersView.vue        # 论文聚合
│   │   ├── CodeTutorialsView.vue # 代码教程
│   │   ├── IndustryApplicationsView.vue # 行业应用
│   │   └── ToolsView.vue         # 工具聚合
│   ├── App.vue           # 根组件
│   ├── main.js           # 入口文件
│   └── router.js         # 路由配置
├── public/               # 公共资源
├── index.html            # HTML模板
├── package.json          # 项目配置
├── tailwind.config.js    # Tailwind配置
└── vite.config.js        # Vite配置
```

## 🎨 特色设计

### 粒子动态背景

网站采用基于Canvas API实现的粒子动态背景效果，具有以下特点：

- 粒子随机生成和运动
- 粒子间连线效果
- 鼠标交互响应
- 自适应窗口大小
- 全局应用于所有页面

### 科技感UI元素

- 渐变背景和发光效果
- 网格线条装饰
- 动态光影效果
- 平滑过渡动画
- 悬停交互反馈

## 📖 内容模块

1. **首页**：网站介绍和内容导航
2. **技术原理**：区块链核心概念和技术详解
3. **论文聚合**：最新区块链学术论文和研究成果
4. **代码教程**：实用的区块链开发教程和示例
5. **行业应用**：区块链在各行业的应用案例
6. **工具聚合**：区块链开发和研究工具资源

## 🔧 自定义配置

### 粒子系统配置

在 `src/App.vue` 中可以调整粒子系统的参数：

- `particleCount`：粒子数量
- `particleSpeed`：粒子运动速度
- `particleSize`：粒子大小
- `connectionDistance`：粒子连线距离
- `particleColor`：粒子颜色

### 主题颜色

在 `tailwind.config.js` 中可以自定义主题颜色：

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3b82f6', // 主色调
      secondary: '#8b5cf6', // 辅助色
    },
  },
}
```

## 🤝 贡献指南

欢迎大家参与项目贡献！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系方式

- 项目地址：https://github.com/Jerry-George-Liang/DApp-for-BlockChain/
- 电子邮件：13642533686@163.com

## 🙏 致谢

- 感谢所有为区块链技术发展做出贡献的开发者和研究者
- 感谢Vue.js、Tailwind CSS等开源项目的支持

---

**© 2025 区块链专题网站. 保留所有权利.**

*本网站仅供学习参考，不构成任何投资建议。区块链技术仍处于发展阶段，请谨慎参与。*
