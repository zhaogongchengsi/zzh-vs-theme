import { getColors } from "./colors";
const config = {
  primary: [
    "editor.background",
    "menu.background",
    "titleBar.activeBackground",
    "titleBar.inactiveBackground",
    "panel.background",
    "activityBar.background",
    "sideBar.background",
    "editorGroupHeader.tabsBackground",
    "tab.inactiveBackground",
  ],
  foreground: [
    "activityBar.foreground",
    "activityBar.activeBorder",
    "sideBar.foreground",
    "sideBarTitle.foreground",
    "sideBarSectionHeader.foreground",
  ],
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
