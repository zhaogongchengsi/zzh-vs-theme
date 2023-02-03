
const wb = ["#FFFFFF", "#F0F0F0", "#E0E0E0", "#B0B0B0", "#A0A0A0", "#808080", "#606060", "#404040", "#202020", "#000000"];

const colorDark = {
  white: wb,
  black: wb.reverse(),
  cyan: ["#005F64", "#00838F", "#0097A7", "#01ACC1", "#02BCD4", "#25C6DA", "#4DD0E1", "#7FDEEA", "#B3EBF2", "#E0F7FA"],
  magenta: ["#FF0091", "#FF1A9C", "#FF33A7", "#FF4DB2", "#FF66BD", "#FF80C8", "#FF99D3", "#FFB3DE", "#FFCCE9", "#FFE6F4"],
  gray: ["#212121", "#424242", "#616161", "#757575", "#9E9E9E", "#BDBDBD", "#E0E0E0", "#EEEEEE", "#F5F5F5", "#FAFAFA"],
  blue: ["#053170", "#0A4694", "#135CB8", "#1D75DB", "#2990FF", "#54A9FF", "#7FC1FF", "#A9D7FF", "#D4ECFF", "#EFF8FF"],
  green: ["#123C19", "#1C5A25", "#277731", "#32953D", "#3EB349", "#5DC264", "#7FD184", "#A6E1A8", "#D0F0D1", "#ECF7EC"],
  orange: ["#551F03", "#803506", "#AA500A", "#D56F0F", "#FF9214", "#FFAE43", "#FFC772", "#FFDDA1", "#FFEFD0", "#FFF9ED"],
  yellow: ["#544903", "#7E6C06", "#A88E0A", "#D2AF0F", "#FCCE14", "#FDDE43", "#FDEB71", "#FEF5A0", "#FEFBD0", "#FFFEEC"],
  red: ["#6C090B", "#901110", "#B42019", "#D73324", "#FB4932", "#FC725A", "#FD9983", "#FD9983", "#FDBEAC", "#FEE0D5"],
  pink: ["#5C0730", "#800E41", "#A41751", "#C72261", "#EB2F71", "#EF5686", "#F37E9F", "#F7A8BC", "#FBD3DC", "#FDEEF1"],
  purple: ["#4A1061", "#5E1776", "#731F8A", "#89289F", "#A033B3", "#B553C2", "#CA78D1", "#DDA0E1", "#EFCEF0", "#F7EBF7"],
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
  ...colorDark,
} as const;

export type ColorName = keyof typeof ZZH_THEME;
export type Colors = Record<ColorName, string[]>;
export type Base = "vs" | "vs-dark";

export function getColors(base: Base): Colors {
  const colors = {};
  for (const [name, [dark, light]] of Object.entries(ZZH_THEME)) {
    colors[name] = base === "vs" ? light : dark;
  }
  return colors as Colors;
}

export function getThemeColors() {
  return colorDark;
}
