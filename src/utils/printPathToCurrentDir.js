import { colorizeText } from "./colorizeText.js";

export const printPathToCurrentDir = (currentDir) => {
  console.log(colorizeText("blue", `You are currently in ${currentDir}`));
};
