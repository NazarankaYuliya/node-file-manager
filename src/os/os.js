import os from "os";

export const osInfo = async (args) => {
  const commands = args.split(" ");

  for (const command of commands) {
    switch (command) {
      case "--EOL":
        console.log("End-Of-Line (EOL):", os.EOL);
        break;

      case "--cpus":
        console.log("CPUs info:");
        os.cpus().forEach((cpu, index) => {
          console.log(`CPU ${index + 1}:`);
          console.log(`  Model: ${cpu.model}`);
          console.log(`  Speed: ${(cpu.speed / 1000).toFixed(2)} GHz`);
        });
        break;

      case "--homedir":
        console.log("Home directory:", os.homedir());
        break;

      case "--username":
        console.log("Current system user name:", os.userInfo().username);
        break;

      case "--architecture":
        console.log("CPU architecture:", os.arch());
        break;

      default:
        console.log(`Invalid command.`);
        break;
    }
  }
};
