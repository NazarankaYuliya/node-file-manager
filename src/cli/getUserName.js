export const getUserName = () => {
  const username = process.argv[2] ? process.argv[2].split("=")[1] : "User";
  return username;
};
