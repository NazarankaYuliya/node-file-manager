export const colorizeText = (color, text) => {
  const colors = {
    red: "\x1b[31m",
    yellow: "\x1b[33m",
    green: "\x1b[32m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    reset: "\x1b[0m",
  };

  const colorCode = colors[color.toLowerCase()] || colors.reset;
  return `${colorCode}${text}${colors.reset}`;
};
