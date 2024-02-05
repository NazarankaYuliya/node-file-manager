import fs from "node:fs";
import { unlink } from "node:fs/promises";
import { createBrotliCompress } from "zlib";
import path from "node:path";
import { pipeline } from "node:stream";

export const compress = async (currentDir, args) => {
  return new Promise((resolve, reject) => {
    const [pathToFile, pathToDestination] = args.split(" ");
    const sourceFilePath = path.isAbsolute(pathToFile)
      ? pathToFile
      : path.join(currentDir, pathToFile);

    const destinationFilePath = path.isAbsolute(pathToDestination)
      ? pathToDestination
      : path.join(currentDir, pathToDestination);

    const rs = fs.createReadStream(sourceFilePath);
    const brotli = createBrotliCompress();
    const ws = fs.createWriteStream(destinationFilePath);

    pipeline(rs, brotli, ws, (err) => {
      if (err) {
        unlink(destinationFilePath).catch(() => reject());
        reject();
      } else {
        console.log("Compression successful.");
        resolve();
      }
    });
  });
};
