# Chrome 侧边栏扩展

这是一个使用 React、TypeScript 和 Vite 构建的简单 Chrome 侧边栏扩展示例。

## 功能介绍

- 简洁的侧边栏界面设计
- 简单的点击计数功能演示
- 完整的 Chrome 侧边栏扩展配置

## 技术栈

- React 18
- TypeScript
- Vite
- Chrome Extension API

## 开发指南

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

### 构建扩展

```bash
npm run build
```

构建完成后，`dist` 目录中将包含可安装的 Chrome 扩展文件。

## 安装到 Chrome 浏览器

1. 打开 Chrome 浏览器，访问 `chrome://extensions/`
2. 打开右上角的 "开发者模式"
3. 点击 "加载已解压的扩展程序"
4. 选择项目的 `dist` 目录

## 使用方法

1. 安装扩展后，点击 Chrome 工具栏上的扩展图标
2. 侧边栏将会打开，显示 "Hello Chrome" 界面
3. 你可以点击界面上的按钮来增加计数

## 自定义扩展

- 修改 `src/App.tsx` 来更改界面内容
- 修改 `src/App.css` 来调整样式
- 在 `public/manifest.json` 中更新扩展的元数据

## 许可证

MIT

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
