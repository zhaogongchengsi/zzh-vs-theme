import { getColors } from "./colors";
const config = {
  primary: [
    // 编辑区域的背景颜色
    "editor.background",
    // 顶部菜单 item 背景颜色
    "menu.background",
    // 顶部背景颜色
    "titleBar.activeBackground",
    "titleBar.inactiveBackground",
    // 面板显示在编辑器区域下方，包含输出和集成终端等视图的背景颜色
    "panel.background",
    // 活动栏背景颜色
    "activityBar.background",
    // 右侧 文件树
    "sideBar.background",
    // 编辑器区域的 tabs 颜色配置
    "editorGroupHeader.tabsBackground",
    "tab.inactiveBackground",
  ],
  activePrimary: ["tab.activeBackground"],
  black: [
    "statusBar.background", // 编辑区域 活动页激活颜色
  ],
  foreground: [
    "activityBar.foreground",
    "activityBar.activeBorder",
    "sideBar.foreground",
    "sideBarTitle.foreground",
    "sideBarSectionHeader.foreground",
  ],
  activeForeground: ["editorLineNumber.activeForeground"],
  borderLevelOne: ["sideBarSectionHeader.border"],
  borderLevelTwo: ["sideBar.border"],
};

export function generateColor(base: "vs" | "vs-dark") {
  const basecolors = getColors(base);
  const colors = {};

  for (const [colorName, keys] of Object.entries(config)) {
    keys.forEach((key) => {
      colors[key] = basecolors[colorName] || "#FF5D5D"; // If the color is not configured, use red instead.
    });
  }

  return colors;
}
