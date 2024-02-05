import { access, constants, stat } from "node:fs/promises";
import path from "node:path";

export const cd = async (currentDir, args) => {
  const targetDir = path.join(currentDir, args);

  try {
    await access(targetDir, constants.F_OK);

    const stats = await stat(targetDir);
    if (!stats.isDirectory()) {
      console.log("Operation failed");
      return currentDir;
    }

    return targetDir;
  } catch (error) {
    console.log("Operation failed");
    return currentDir;
  }
};
