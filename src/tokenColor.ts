import { getColors, ColorName } from "./colors";

export function generateTokenColors(base: "vs" | "vs-dark") {
  const basecolors = getColors(base);
  const getColor = (key: ColorName) => basecolors[key];

  return [
    {
      scope: ["comment", "punctuation.definition.comment", "string.comment"],
      settings: {
        foreground: getColor("primary"),
      },
    },
  ];
}
