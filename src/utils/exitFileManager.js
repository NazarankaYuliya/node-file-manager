import { colorizeText } from "./colorizeText.js";

export const exitFileManager = (username) => {
  console.log(
    colorizeText(
      "magenta",
      `Thank you for using File Manager, ${username}, goodbye!`.toLocaleUpperCase(),
    ),
  );
};
