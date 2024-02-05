import fs from "node:fs/promises";
import path from "node:path";

export const add = async (currentDir, newFilePath) => {
  await fs.writeFile(path.join(currentDir, newFilePath), "", { flag: "wx" });
};
