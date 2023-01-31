import { ColorName, getColors } from "./colors";
const config = {
  background: [
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
    "debugToolBar.background",
    "peekViewEditor.background",
    "peekViewResult.background",
    "settings.headerForeground",
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
    "foreground",
    "terminal.foreground",
  ],
  activeForeground: ["editorLineNumber.activeForeground"],
  borderLevelOne: ["sideBarSectionHeader.border"],
  borderLevelTwo: ["sideBar.border"],
  primary: [
    "button.background",
    "button.hoverBackground",
    "settings.modifiedItemIndicator",
  ],
  selectionBackground: ["terminal.selectionBackground"],
  green: [
    "terminal.ansiBrightGreen",
    "terminal.ansiGreen",
    "gitDecoration.addedResourceForeground",
    "editorGutter.addedBackground",
    "editorBracketHighlight.foreground2",
    "editorHint.foreground",
  ],
  secondaryForeground: [
    "gitDecoration.submoduleResourceForeground",
    "editorGutter.foldingControlForeground",
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

  return Object.assign(colors, unique(base));
}

function unique(base: "vs" | "vs-dark") {
  const basecolors = getColors(base);

  const zzhtheme = (name: ColorName) => {
    return basecolors[name];
  };

  const pick = ({ light, dark }: { light: string; dark: string }) => {
    return base === "vs" ? light : dark;
  };

  return {
    "terminal.ansiBrightBlack": pick({ light: "#aaaaaa", dark: "#777777" }),
    "terminal.ansiBrightBlue": zzhtheme("blue"),
    "terminal.ansiBrightCyan": zzhtheme("cyan"),
    "terminal.ansiBrightMagenta": zzhtheme("magenta"),
    "terminal.ansiBrightRed": zzhtheme("red"),
    "terminal.ansiBrightWhite": pick({ light: "#dddddd", dark: "#ffffff" }),
    "terminal.ansiBrightYellow": zzhtheme("yellow"),
    "terminal.ansiBlack": pick({
      light: basecolors.background[0],
      dark: basecolors.foreground[1],
    }),
    "terminal.ansiBlue": zzhtheme("blue"),
    "terminal.ansiCyan": zzhtheme("cyan"),
    "terminal.ansiMagenta": zzhtheme("magenta"),
    "terminal.ansiRed": zzhtheme("red"),
    "terminal.ansiWhite": pick({
      light: basecolors.foreground[0],
      dark: basecolors.foreground[0],
    }),
    "terminal.ansiYellow": zzhtheme("yellow"),

    "gitDecoration.modifiedResourceForeground": zzhtheme("blue"),
    "gitDecoration.deletedResourceForeground": zzhtheme("red"),
    "gitDecoration.untrackedResourceForeground": zzhtheme("cyan"),
    "gitDecoration.ignoredResourceForeground": zzhtheme("ignored"),
    "gitDecoration.conflictingResourceForeground": zzhtheme("orange"),

    "editorGutter.modifiedBackground": zzhtheme("blue"),
    "editorGutter.deletedBackground": zzhtheme("red"),

    "editorBracketHighlight.foreground1": zzhtheme("cyan"),
    "editorBracketHighlight.foreground3": zzhtheme("orange"),
    "editorBracketHighlight.foreground4": zzhtheme("magenta"),
    "editorBracketHighlight.foreground5": zzhtheme("yellow"),
    "editorBracketHighlight.foreground6": zzhtheme("blue"),

    "problemsErrorIcon.foreground": zzhtheme("red"),
    "problemsWarningIcon.foreground": zzhtheme("orange"),
    "problemsInfoIcon.foreground": zzhtheme("blue"),

    "editorError.foreground": zzhtheme("red"),
    "editorWarning.foreground": zzhtheme("orange"),
    "editorInfo.foreground": zzhtheme("blue"),

    "editorGutter.commentRangeForeground": zzhtheme("ignored"),

    "editorInlayHint.foreground": zzhtheme("punctuation"),
    "editorInlayHint.background": "#00000000",
  };
}
