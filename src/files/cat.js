import fs from "node:fs";
import path from "node:path";

export const cat = (currentDir, pathToFile) => {
  return new Promise((resolve, reject) => {
    const rs = fs.createReadStream(path.join(currentDir, pathToFile));

    rs.on("data", (chunk) => {
      console.log(chunk.toString());
    });

    rs.on("end", () => {
      rs.close();
      resolve();
    });

    rs.on("error", (error) => {
      reject();
    });
  });
};
