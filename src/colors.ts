// [dark, light]
const ZZH_THEME = {
  primary: ["#191919", "#F9F9F9"],
  foreground: ["#F4F9F9", "#333333"],

  activeForeground: ["#bfbaaa", "#4e4f47"],
  secondaryForeground: ["#dedcd590", "#393a3490"],
  ignored: ["#dedcd530", "#393a3450"],
  faded: ["#dedcd510", "#393a3410"],
  border: ["#191919", "#f0f0f0"],

  // token colors
  comment: ["#758575dd", "#a0ada0"],
  string: ["#c98a7d", "#b56959"],
  variable: ["#bd976a", "#b07d48"],
  keyword: ["#4d9375", "#1e754f"],
  number: ["#4C9A91", "#2f798a"],
  boolean: ["#4d9375", "#1e754f"],
  operator: ["#cb7676", "#ab5959"],
  function: ["#80a665", "#59873a"],
  constant: ["#c99076", "#a65e2b"],
  class: ["#6893BF", "#5a6aa6"],
  interface: ["#5DA994", "#2e8f82"],
  type: ["#5da9a7", "#2e808f"],
  builtin: ["#cb7676", "#ab5959"],
  property: ["#b8a965", "#998418"],
  namespace: ["#db889a", "#b05a78"],
  punctuation: ["#666666", "#999999"],
  decorator: ["#bd8f8f", "#bd8f8f"],
  regex: ["#c4704f", "#ab5e3f"],

  // colors
  green: ["#4d9375", "#1e754f"],
  cyan: ["#5eaab5", "#2993a3"],
  blue: ["#6394bf", "#296aa3"],
  red: ["#cb7676", "#ab5959"],
  orange: ["#d4976c", "#a65e2b"],
  yellow: ["#e6cc77", "#bda437"],
  magenta: ["#d9739f", "#a13865"],
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
