import readline from "readline";
import { getUserName } from "./utils/getUserName.js";
import { printGreeting } from "./utils/printGreeting.js";
import { printPathToCurrentDir } from "./utils/printPathToCurrentDir.js";
import { exitFileManager } from "./utils/exitFileManager.js";
import { up } from "./navigation/up.js";
import { ls } from "./navigation/ls.js";
import { cd } from "./navigation/cd.js";
import { cat } from "./files/cat.js";
import { add } from "./files/add.js";
import { cp } from "./files/cp.js";
import { mv } from "./files/mv.js";
import { rn } from "./files/rn.js";
import { rm } from "./files/rm.js";
import { hash } from "./hash/hash.js";
import { compress } from "./zip/compress.js";
import { decompress } from "./zip/decompress.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: ">>",
});

const username = getUserName();
let currentDir = process.cwd();

printGreeting(username);
printPathToCurrentDir(currentDir);
rl.prompt();

rl.on("line", async (input) => {
  const [command, ...args] = input.trim().split(" ");
  const joinedArgs = args.join(" ");

  try {
    switch (command) {
      case ".exit":
        exitFileManager(username);
        rl.close();
        break;

      case "up":
        currentDir = up(currentDir);
        printPathToCurrentDir(currentDir);
        rl.prompt();
        break;

      case "cd":
        currentDir = await cd(currentDir, joinedArgs);
        printPathToCurrentDir(currentDir);
        rl.prompt();
        break;

      case "ls":
        await ls(currentDir);
        printPathToCurrentDir(currentDir);
        rl.prompt();
        break;

      case "cat":
        await cat(currentDir, joinedArgs);
        printPathToCurrentDir(currentDir);
        rl.prompt();
        break;

      case "add":
        await add(currentDir, joinedArgs);
        printPathToCurrentDir(currentDir);
        rl.prompt();
        break;

      case "cp":
        await cp(currentDir, joinedArgs);
        printPathToCurrentDir(currentDir);
        rl.prompt();
        break;

      case "mv":
        await mv(currentDir, joinedArgs);
        printPathToCurrentDir(currentDir);
        rl.prompt();
        break;

      case "rn":
        await rn(currentDir, joinedArgs);
        printPathToCurrentDir(currentDir);
        rl.prompt();
        break;

      case "rm":
        await rm(currentDir, joinedArgs);
        printPathToCurrentDir(currentDir);
        rl.prompt();
        break;

      case "hash":
        await hash(currentDir, joinedArgs);
        printPathToCurrentDir(currentDir);
        rl.prompt();
        break;

      case "compress":
        await compress(currentDir, joinedArgs);
        printPathToCurrentDir(currentDir);
        rl.prompt();
        break;

      case "decompress":
        await decompress(currentDir, joinedArgs);
        printPathToCurrentDir(currentDir);
        rl.prompt();
        break;

      default:
        console.log("Invalid input.");
        printPathToCurrentDir(currentDir);
        rl.prompt();
    }
  } catch (error) {
    console.log("Operation failed");
    printPathToCurrentDir(currentDir);
    rl.prompt();
  }
});

rl.on("SIGINT", () => {
  exitFileManager(username);
  rl.close();
});
