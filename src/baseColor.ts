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

    "sideBar.background",
    "sideBarSectionHeader.background",
  ],
  activePrimary: ["tab.activeBackground"],
  black: [
    "statusBar.background", // 编辑区域 活动页激活颜色
    // "breadcrumb.background",
    "input.background",
  ],
  foreground: [
    "activityBar.foreground",
    "activityBar.activeBorder",
    "sideBar.foreground",
    "sideBarTitle.foreground",
    "sideBarSectionHeader.foreground",
    "foreground",
    "terminal.foreground",
    "settings.headerForeground",
  ],
  activeForeground: ["editorLineNumber.activeForeground"],
  borderLevelOne: ["sideBarSectionHeader.border"],
  borderLevelTwo: ["sideBar.border", "activityBar.border"],
  primary: [
    "button.background",
    "button.hoverBackground",
    "settings.modifiedItemIndicator",
    "settings.checkboxForeground",
    "settings.checkboxBorder",
    "breadcrumb.activeSelectionForeground",
  ],
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

  const resColor: any = Object.assign(colors, unique(base));

  return formatColorJson(resColor);
}

function unique(base: "vs" | "vs-dark") {
  const basecolors = getColors(base);

  const zzhtheme = (name: ColorName) => {
    return basecolors[name];
  };

  const getBaseAllColor = (name: ColorName, grade: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 = 0) => getThemeColors()[name][grade];

  return {
    "terminal.ansiBrightBlack": getBaseAllColor("black", 3),
    "terminal.ansiBrightBlue": getBaseAllColor("blue", 3),
    "terminal.ansiBrightCyan": getBaseAllColor("cyan", 3),
    "terminal.ansiBrightMagenta": getBaseAllColor("magenta", 3),
    "terminal.ansiBrightRed": getBaseAllColor("red", 3),
    "terminal.ansiBrightYellow": getBaseAllColor("yellow", 3),
    "terminal.ansiBrightWhite": getBaseAllColor("white", 3),
    "terminal.ansiBlack": getBaseAllColor("black", 5),
    "terminal.ansiBlue": getBaseAllColor("blue", 5),
    "terminal.ansiCyan": getBaseAllColor("cyan", 5),
    "terminal.ansiMagenta": getBaseAllColor("magenta", 5),
    "terminal.ansiRed": getBaseAllColor("red", 5),
    "terminal.ansiWhite": getBaseAllColor("white", 5),
    "terminal.ansiYellow": getBaseAllColor("yellow", 5),

    "editorBracketHighlight.foreground1": getBaseAllColor("editorBracketHighlight", 0),
    "editorBracketHighlight.foreground2": getBaseAllColor("editorBracketHighlight", 1),
    "editorBracketHighlight.foreground3": getBaseAllColor("editorBracketHighlight", 2),
    "editorBracketHighlight.foreground4": getBaseAllColor("editorBracketHighlight", 3),
    "editorBracketHighlight.foreground5": getBaseAllColor("editorBracketHighlight", 4),
    "editorBracketHighlight.foreground6": getBaseAllColor("editorBracketHighlight", 5),

    "gitDecoration.modifiedResourceForeground": zzhtheme("blue"),
    "gitDecoration.deletedResourceForeground": zzhtheme("red"),
    "gitDecoration.untrackedResourceForeground": zzhtheme("cyan"),
    "gitDecoration.ignoredResourceForeground": zzhtheme("ignored"),
    "gitDecoration.conflictingResourceForeground": zzhtheme("orange"),
    "editorGutter.modifiedBackground": zzhtheme("blue"),
    "editorGutter.deletedBackground": zzhtheme("red"),

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

type ColorJsonKey = Record<`${string}.${string}`, string>;
type ColorJsonValue = {
  name: string;
  value: string;
};
function formatColorJson(obj: ColorJsonKey) {
  const newMap = new Map<string, ColorJsonValue[]>();
  const newObj = {};
  Object.entries(obj).forEach(([key, value]) => {
    const [name, title] = key.split(".");
    const similar = newMap.get(name);
    const mapValue = {
      name: title,
      value,
    };
    if (similar) {
      similar.push(mapValue);
    } else {
      newMap.set(name, [mapValue]);
    }
  });

  newMap.forEach((item, key) => {
    item.forEach(({ name, value }) => {
      newObj[`${key}.${name}`] = value;
    });
  });

  return newObj;
}
