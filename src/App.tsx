import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="sidebar-container">
      <header className="sidebar-header">
        <h1>Hello Extension</h1>
        <p className="subtitle">侧边栏扩展示例</p>
      </header>
      
      <div className="sidebar-content">
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            点击计数: {count}
          </button>
          <p>
            这是一个使用 React + TypeScript + Vite 构建的 Chrome 侧边栏扩展示例
          </p>
        </div>
        
        <div className="info-section">
          <h2>使用说明</h2>
          <ul>
            <li>点击浏览器工具栏上的扩展图标打开侧边栏</li>
            <li>通过上面的按钮增加计数</li>
            <li>尝试修改 <code>src/App.tsx</code> 文件来自定义此页面</li>
          </ul>
        </div>
      </div>
      
      <footer className="sidebar-footer">
        <p>© {new Date().getFullYear()} Chrome 侧边栏扩展演示</p>
      </footer>
    </div>
  )
}

export default App
