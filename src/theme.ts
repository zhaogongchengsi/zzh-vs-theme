import { Colors } from "./colors";

export interface ThemeOptions {
  name: string;
  base: "vs" | "vs-dark";
}

export function generateTheme({ name, base }: ThemeOptions) {

  return {
    name,
    base,
  };
}
