import fs from "node:fs/promises";
import path from "node:path";

export const rm = async (currentDir, pathToFileToDelete) => {
  await fs.unlink(path.join(currentDir, pathToFileToDelete));
};
