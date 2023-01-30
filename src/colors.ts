// [light, dark]
const ZZH_THEME = {
  primary: ["#4d9375", "#1c6b48"],
  foreground: ["#dbd7caee", "#393a34"],
} as const;

export function getColors(base: "vs" | "vs-dark") {
  const colors = {};
  for (const [name, [light, dark]] of Object.entries(ZZH_THEME)) {
    colors[name] = base === "vs" ? light : dark;
  }
  return colors;
}
