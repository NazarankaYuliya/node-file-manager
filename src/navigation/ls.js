import { readdir, access, constants } from "node:fs/promises";
import path from "node:path";

export const ls = async (currentDir) => {
  try {
    await access(currentDir, constants.F_OK);

    try {
      const filesAndDirs = await readdir(path.normalize(currentDir), {
        withFileTypes: true,
      });

      const data = filesAndDirs.map((el) => {
        return { Name: el.name, Type: el.isFile() ? "file" : "directory" };
      });

      const sortedData = data.sort((a, b) => {
        if (a.Type === b.Type) {
          return a.Name.localeCompare(b.Name);
        }
        return a.Type.localeCompare(b.Type);
      });

      console.table(sortedData);
    } catch (error) {
      console.log("Operation failed");
    }
  } catch (error) {
    console.log("Operation failed");
  }
};
