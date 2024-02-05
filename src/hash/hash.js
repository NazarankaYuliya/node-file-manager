import path from "node:path";
import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";

export const hash = async (currentDir, fileToHash) => {
  return new Promise((resolve, reject) => {
    const hash = createHash("sha256");
    const sourseFile = path.isAbsolute(fileToHash)
      ? fileToHash
      : path.join(currentDir, fileToHash);
    const stream = createReadStream(sourseFile);

    stream.on("data", (chunk) => {
      hash.update(chunk);
    });

    stream.on("end", () => {
      console.log(hash.digest("hex"));
      stream.close();
      resolve();
    });

    stream.on("error", () => {
      reject();
    });
  });
};
