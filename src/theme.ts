import { generateColor } from "./baseColor";
import { ColorName, getColors } from "./colors";
import { generateTokenColors } from "./tokenColor";

export interface ThemeOptions {
  name: string;
  base: "vs" | "vs-dark";
}

export function generateTheme({ name, base }: ThemeOptions) {

  const basecolors = getColors(base);
  const getColor = (key: ColorName, op: string = "") => {
    return basecolors[key] + op;
  };

  return {
    name,
    base,
    semanticHighlighting: true,
    semanticTokenColors: {
      namespace: getColor('namespace'),
      property: getColor('property'),
      interface: getColor('interface'),
      type: getColor('interface'),
      class: getColor('class'),
    },
    colors: generateColor(base),
    tokenColors: generateTokenColors(base)
  };
}
