// [light, dark]
const ZZH_THEME = {
  primary: ["#191919", "#F9F9F9"],
  foreground: ["#F4F9F9", "#333333"],
} as const;

export function getColors(base: "vs" | "vs-dark") {
  const colors = {};
  for (const [name, [light, dark]] of Object.entries(ZZH_THEME)) {
    colors[name] = base === "vs" ? light : dark;
  }
  return colors;
}
