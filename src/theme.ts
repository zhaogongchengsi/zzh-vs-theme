import { generateColor } from "./baseColor";
import { generateTokenColors } from "./tokenColor";

export interface ThemeOptions {
  name: string;
  base: "vs" | "vs-dark";
}

export function generateTheme({ name, base }: ThemeOptions) {
  return {
    name,
    base,
    colors: generateColor(base),
    tokenColors: generateTokenColors(base)
  };
}
