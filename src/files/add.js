import fs from "node:fs/promises";
import path from "node:path";
import { colorizeText } from "../utils/colorizeText.js";

export const add = async (currentDir, newFilePath) => {
  await fs.writeFile(path.join(currentDir, newFilePath), "", { flag: "wx" });
  console.log(colorizeText("green", "File created!"));
};
