import { ColorName, getColors, getThemeColors } from "./colors";
const config = {
  background: [
    "editor.background",
    "editorGroupHeader.tabsBackground",
    "menu.background",
    "titleBar.activeBackground",
    "titleBar.inactiveBackground",
    "panel.background",
    "activityBar.background",

    "tab.inactiveBackground",
    "debugToolBar.background",
    "peekViewEditor.background",
    "peekViewResult.background",
    "settings.headerForeground",

    "sideBar.background",
    "sideBarSectionHeader.background",
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
  borderLevelTwo: ["sideBar.border", "activityBar.border"],
  primary: ["button.background", "button.hoverBackground", "settings.modifiedItemIndicator"],
  selectionBackground: ["terminal.selectionBackground"],
  green: [
    "terminal.ansiBrightGreen",
    "terminal.ansiGreen",
    "gitDecoration.addedResourceForeground",
    "editorGutter.addedBackground",
    "editorHint.foreground",
  ],
  secondaryForeground: ["gitDecoration.submoduleResourceForeground", "editorGutter.foldingControlForeground"],
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

  const getBaseColor = (name: ColorName) => getThemeColors()[name][base === "vs" ? 0 : 1];

  const getBaseAllColor = (name: ColorName) => getThemeColors()[name];

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
    "terminal.ansiBlack": getBaseColor("black"),
    "terminal.ansiBlue": zzhtheme("blue"),
    "terminal.ansiCyan": zzhtheme("cyan"),
    "terminal.ansiMagenta": zzhtheme("magenta"),
    "terminal.ansiRed": zzhtheme("red"),
    "terminal.ansiWhite": zzhtheme("foreground"),
    "terminal.ansiYellow": zzhtheme("yellow"),

    "gitDecoration.modifiedResourceForeground": zzhtheme("blue"),
    "gitDecoration.deletedResourceForeground": zzhtheme("red"),
    "gitDecoration.untrackedResourceForeground": zzhtheme("cyan"),
    "gitDecoration.ignoredResourceForeground": zzhtheme("ignored"),
    "gitDecoration.conflictingResourceForeground": zzhtheme("orange"),

    "editorGutter.modifiedBackground": zzhtheme("blue"),
    "editorGutter.deletedBackground": zzhtheme("red"),

    "editorBracketHighlight.foreground1": getBaseAllColor("editorBracketHighlight")[0],
    "editorBracketHighlight.foreground2": getBaseAllColor("editorBracketHighlight")[1],
    "editorBracketHighlight.foreground3": getBaseAllColor("editorBracketHighlight")[2],
    "editorBracketHighlight.foreground4": getBaseAllColor("editorBracketHighlight")[3],
    "editorBracketHighlight.foreground5": getBaseAllColor("editorBracketHighlight")[4],
    "editorBracketHighlight.foreground6": getBaseAllColor("editorBracketHighlight")[5],

    "problemsErrorIcon.foreground": zzhtheme("error"),
    "problemsWarningIcon.foreground": zzhtheme("orange"),
    "problemsInfoIcon.foreground": zzhtheme("blue"),

    "editorError.foreground": zzhtheme("error"),
    "editorWarning.foreground": zzhtheme("orange"),
    "editorInfo.foreground": zzhtheme("blue"),

    "editorGutter.commentRangeForeground": zzhtheme("ignored"),

    "editorInlayHint.foreground": zzhtheme("punctuation"),
    "editorInlayHint.background": "#00000000",
  };
}
