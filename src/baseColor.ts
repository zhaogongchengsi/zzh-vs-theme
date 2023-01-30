import { getColors } from "./colors";
const config = {
  primary: ['editor.background', "editorCursor.background"],
  foreground: ['editor.background', "editorCursor.background"],
};

export function generateColor(base: "vs" | "vs-dark") {
  const basecolors = getColors(base);
  const colors = {}

  for (const [colorName, keys] of Object.entries(config)) {
    keys.forEach(key => {
        colors[key] = basecolors[colorName]
    })
  }

  return colors;
}
