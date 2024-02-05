import { colorizeText } from "./colorizeText.js";

export const printGreeting = (username) => {
  console.log(
    colorizeText(
      "magenta",
      `Welcome to the File Manager, ${username}!`.toLocaleUpperCase(),
    ),
  );
};
