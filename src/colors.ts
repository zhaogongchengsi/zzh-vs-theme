const colors = {
  cyan: ["#04ECF8", "#04E4F0", "#03DCE7", "#03D4DF", "#03D0DB", "#02CCD6", "#02C4CE", "#01BCC5", "#01B4BC", "#00ABB3"],
  white: ["#FFFFFF", "#FBFBFB", "#F7F7F7", "#EEEEEE", "#E5E5E5", "#DCDCDC", "#CACACA", "#C6C6C6", "#C1C1C1", "#B8B8B8"],
  black: ["#161616", "#222222", "#242424", "#262626", "#282828", "#2A2A2A", "#2F2F2F", "#333333", "#373737", "#3B3B3B"],
  magenta: ["#EC2C64", "#D5285A", "#BD2450", "#B1224B", "#A52046", "#8D1C3C", "#751832", "#5D1428", "#45101E", "#2D0C13"],
  gray: ["#fafbfc", "#f6f8fa", "#e1e4e8", "#d1d5da", "#959da5", "#6a737d", "#586069", "#444d56", "#2f363d", "#24292e"],
  blue: ["#f1f8ff", "#dbedff", "#c8e1ff", "#79b8ff", "#2188ff", "#0366d6", "#005cc5", "#044289", "#032f62", "#05264c"],
  green: ["#f0fff4", "#dcffe4", "#bef5cb", "#85e89d", "#34d058", "#28a745", "#22863a", "#176f2c", "#165c26", "#144620"],
  yellow: ["#fffdef", "#fffbdd", "#fff5b1", "#ffea7f", "#ffdf5d", "#ffd33d", "#f9c513", "#dbab09", "#b08800", "#735c0f"],
  orange: ["#fff8f2", "#ffebda", "#ffd1ac", "#ffab70", "#fb8532", "#f66a0a", "#e36209", "#d15704", "#c24e00", "#a04100"],
  red: ["#ffeef0", "#ffdce0", "#fdaeb7", "#f97583", "#ea4a5a", "#d73a49", "#cb2431", "#b31d28", "#9e1c23", "#86181d"],
  purple: ["#f5f0ff", "#e6dcfd", "#d1bcf9", "#b392f0", "#8a63d2", "#6f42c1", "#5a32a3", "#4c2889", "#3a1d6e", "#29134e"],
  pink: ["#ffeef8", "#fedbf0", "#f9b3dd", "#f692ce", "#ec6cb9", "#ea4aaa", "#d03592", "#b93a86", "#99306f", "#6d224f"],
  editorBracketHighlight: ["#FFE15D", "#8FBDD3", "#EA5C2B", "#FF8DC7", "#B2A4FF", "#ea4aaa"],
};

// [dark, light]
const ZZH_THEME = {
  primary: ["#14C38E", "#b07d48"],

  activePrimary: ["#363636", "#ffffff"],
  foreground: ["#F4F9F9", "#333333"],

  activeForeground: ["#bfbaaa", "#4e4f47"],
  secondaryForeground: ["#dedcd590", "#393a3490"],
  ignored: ["#dedcd530", "#393a3450"],
  faded: ["#dedcd510", "#393a3410"],
  borderLevelOne: ["#323232", "#f0f0f0"],
  borderLevelTwo: ["#525252", "#f0f0f0"],
  background: ["#191919", "#F9F9F9"],
  backgroundActive: ["#171717", "#ffffff"],

  // token colors
  // 注释token
  comment: ["#525252", "#a0ada0"],

  // 关键字 token
  keyword: ["#F56EB3", "#1e754f"],
  // 对象属性
  property: ["#579BB1", "#998418"],
  // 字符串 token
  string: ["#BA94D1", "#b56959"],
  // 变量token
  variable: ["#14C38E", "#b07d48"],
  // 函数token
  function: ["#A3C7D6", "#59873a"],

  number: ["#0CECDD", "#2f798a"],
  boolean: ["#1EAE98", "#1e754f"],

  // 运算符
  operator: ["#cb7676", "#ab5959"],

  constant: ["#c99076", "#a65e2b"],
  class: ["#6893BF", "#5a6aa6"],
  interface: ["#5DA994", "#2e8f82"],
  type: ["#5da9a7", "#2e808f"],
  builtin: ["#cb7676", "#ab5959"],

  namespace: ["#db889a", "#b05a78"],
  punctuation: ["#666666", "#999999"],
  decorator: ["#bd8f8f", "#bd8f8f"],

  error: ["#ee2746", "#E80F88"],
  regex: ["#54BAB9", "#ab5e3f"],
  async: ["#5AA897", "#ab5e3f"],
  selectionBackground: ["#0366d6", "#373737"],
  ...colors,
} as const;

export type ColorName = keyof typeof ZZH_THEME;
export type Colors = Record<ColorName, string[]>;

export function getColors(base: "vs" | "vs-dark"): Colors {
  const colors = {};
  for (const [name, [dark, light]] of Object.entries(ZZH_THEME)) {
    colors[name] = base === "vs" ? light : dark;
  }
  return colors as Colors;
}

export function getThemeColors() {
  return colors;
}
