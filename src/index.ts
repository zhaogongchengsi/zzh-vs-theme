import { promises as fs } from "fs";
import { join } from "path";
import { generateTheme } from "./theme";

const theme = "./dist";

(async function () {
  try {
    await fs.mkdir(theme, { recursive: true });
    fs.writeFile(
      join(theme, "zzhtheme-dark.json"),
      JSON.stringify(
        generateTheme({ name: "ZzhTheme Dark", base: "vs-dark" })
      )
    );
    fs.writeFile(
        join(theme, "zzhtheme-light.json"),
        JSON.stringify(
          generateTheme({ name: "ZzhTheme Light", base: "vs" })
        )
      );
  } catch {
    process.exit(0);
  }
})();
