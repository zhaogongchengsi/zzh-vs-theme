// [dark, light]
const ZZH_THEME = {
  primary: ["#191919", "#F9F9F9"],
  foreground: ["#F4F9F9", "#333333"],
} as const;

export type ColorName =  keyof typeof ZZH_THEME;

export function getColors(base: "vs" | "vs-dark"): Record<ColorName, string> {
  const colors = {};
  for (const [name, [dark, light]] of Object.entries(ZZH_THEME)) {
    colors[name] = base === "vs" ? light : dark;
  }
  return colors as Record<ColorName, string>;
}
