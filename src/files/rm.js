import fs from "node:fs/promises";
import path from "node:path";
import { colorizeText } from "../utils/colorizeText.js";

export const rm = async (currentDir, pathToFileToDelete) => {
  await fs.unlink(path.join(currentDir, pathToFileToDelete));
  console.log(colorizeText("green", "File deleted!"));
};
