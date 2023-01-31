// [dark, light]
const ZZH_THEME = {
  primary: ["#191919", "#F9F9F9"],
  activePrimary: ["#363636", "#ffffff"],
  foreground: ["#F4F9F9", "#333333"],

  activeForeground: ["#bfbaaa", "#4e4f47"],
  secondaryForeground: ["#dedcd590", "#393a3490"],
  ignored: ["#dedcd530", "#393a3450"],
  faded: ["#dedcd510", "#393a3410"],
  borderLevelOne: ["#323232", "#f0f0f0"],
  borderLevelTwo: ["#525252", "#f0f0f0"],
  background: ["#171717", "#ffffff"],

  // token colors
  // 注释token
  comment: ["#525252", "#a0ada0"],
  // 字符串 token
  string: ["#FF75A0", "#b56959"],
  // 变量token
  variable: ["#AEC2C1", "#b07d48"],
  // 关键字 token
  keyword: ["#439A97", "#1e754f"],
  // 对象属性
  property: ["#937DC2", "#998418"],

  number: ["#4C9A91", "#2f798a"],
  boolean: ["#4d9375", "#1e754f"],

  // 运算符
  operator: ["#cb7676", "#ab5959"],


  // 函数token 绿色
  function: ["#3D8361", "#59873a"],
  
  constant: ["#c99076", "#a65e2b"],
  class: ["#6893BF", "#5a6aa6"],
  interface: ["#5DA994", "#2e8f82"],
  type: ["#5da9a7", "#2e808f"],
  builtin: ["#cb7676", "#ab5959"],

  namespace: ["#db889a", "#b05a78"],
  punctuation: ["#666666", "#999999"],
  decorator: ["#bd8f8f", "#bd8f8f"],
  
  regex: ["#54BAB9", "#ab5e3f"],
  async: ["#5AA897", "#ab5e3f"],
  // colors
  green: ["#4d9375", "#1e754f"],
  cyan: ["#5eaab5", "#2993a3"],
  blue: ["#6394bf", "#296aa3"],
  red: ["#cb7676", "#ab5959"],
  orange: ["#d4976c", "#a65e2b"],
  yellow: ["#e6cc77", "#bda437"],
  magenta: ["#d9739f", "#a13865"],
  black: ["#151515", "#ffffff"],
} as const;

export type ColorName = keyof typeof ZZH_THEME;
export type Colors = Record<ColorName, string>;

export function getColors(base: "vs" | "vs-dark"): Colors {
  const colors = {};
  for (const [name, [dark, light]] of Object.entries(ZZH_THEME)) {
    colors[name] = base === "vs" ? light : dark;
  }
  return colors as Colors;
}
