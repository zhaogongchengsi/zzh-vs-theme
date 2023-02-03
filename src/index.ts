import { promises as fs } from "fs";
import jsonFromat from "json-format";
import { generateTheme } from "./theme";
import { parse } from "path";

type theme = {
  label: string;
  uiTheme: "vs-dark" | "vs";
  path: string;
};

type Contributes = {
  themes: theme[];
};

(async function () {
  try {
    const { contributes }: { contributes: Contributes } = await readJson("./package.json");
    await Promise.all(
      contributes.themes
        .map(({ label, uiTheme, path }) => {
          return async () => {
            const { dir } = parse(path);
            await fs.mkdir(dir, { recursive: true });
            return fs.writeFile(
              path,
              jsonFromat(generateTheme({ name: label, base: uiTheme }), {
                type: "space",
                size: 2,
              })
            );
          };
        })
        .map((r) => r())
    );
  } catch (err) {
    console.error(err);
    process.exit(0);
  }
})();

async function readJson(path: string) {
  const buf = await fs.readFile(path);
  return JSON.parse(buf.toString());
}
