import path from "node:path";

export const up = (currentDir) => {
  const parentDir = path.dirname(currentDir);
  return parentDir;
};
