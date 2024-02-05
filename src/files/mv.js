import path from "node:path";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import { unlink } from "node:fs/promises";
import { colorizeText } from "../utils/colorizeText.js";

export const mv = async (currentDir, args) => {
  return new Promise((resolve, reject) => {
    const [pathToFile, pathToNewDirectory] = args.split(" ");

    const sourceFile = path.isAbsolute(pathToFile)
      ? pathToFile
      : path.join(currentDir, pathToFile);

    const targetDirectory = path.isAbsolute(pathToNewDirectory)
      ? pathToNewDirectory
      : path.join(currentDir, pathToNewDirectory);

    const sourceFileName = path.basename(sourceFile);
    const targetFile = path.join(targetDirectory, sourceFileName);

    const rs = createReadStream(sourceFile);
    const ws = createWriteStream(targetFile, { flags: "wx" });

    pipeline(rs, ws, (err) => {
      if (err) {
        reject();
      } else {
        unlink(sourceFile);
        console.log(colorizeText("green", `File moved to ${targetDirectory}`));
        resolve();
      }
    });
  });
};
