import { promises as fs } from "fs";
import { join } from "path";
import jsonFromat from "json-format";
import { generateTheme } from "./theme";

const theme = "./themes";
var config = {
  type: "space",
  size: 2,
};

(async function () {
  try {
    await fs.mkdir(theme, { recursive: true });
    fs.writeFile(
      join(theme, "zzhtheme-dark.json"),
      jsonFromat(
        generateTheme({ name: "ZzhTheme Dark", base: "vs-dark" }),
        config
      )
    );
    fs.writeFile(
      join(theme, "zzhtheme-light.json"),
      jsonFromat(generateTheme({ name: "ZzhTheme Light", base: "vs" }), config)
    );
  } catch (err) {
    console.error(err);
    process.exit(0);
  }
})();
