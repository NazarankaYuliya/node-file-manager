import { createBrotliDecompress } from "zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { unlink } from "node:fs/promises";
import path from "path";
import { pipeline } from "stream";

export const decompress = async (currentDir, args) => {
  return new Promise((resolve, reject) => {
    const [pathToFile, pathToDestination] = args.split(" ");
    const sourceFilePath = path.isAbsolute(pathToFile)
      ? pathToFile
      : path.join(currentDir, pathToFile);

    const destinationFilePath = path.isAbsolute(pathToDestination)
      ? pathToDestination
      : path.join(currentDir, pathToDestination);

    const rs = createReadStream(sourceFilePath);
    const ws = createWriteStream(destinationFilePath);
    const brotli = createBrotliDecompress();

    pipeline(rs, brotli, ws, (err) => {
      if (err) {
        unlink(destinationFilePath);
        reject();
      } else {
        console.log("Decompression successful.");
        resolve();
      }
    });
  });
};
