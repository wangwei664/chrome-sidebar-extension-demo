// 当扩展安装或更新时调用
chrome.runtime.onInstalled.addListener(() => {
  // 设置侧边栏的初始状态
  console.log('Hello Chrome Sidebar 扩展已安装');
});

// 监听扩展图标点击事件
chrome.action.onClicked.addListener((tab) => {
  // 切换侧边栏的显示状态
  chrome.sidePanel.open({ tabId: tab.id });
}); 