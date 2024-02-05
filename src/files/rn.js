import fs from "node:fs/promises";
import path from "node:path";
import { colorizeText } from "../utils/colorizeText.js";

export const rn = async (currentDir, args) => {
  const [pathToFile, newFileName] = args.split(" ");

  await fs.rename(
    path.join(currentDir, pathToFile),
    path.join(currentDir, newFileName),
  );
  console.log(colorizeText("green", "File renamed!"));
};
