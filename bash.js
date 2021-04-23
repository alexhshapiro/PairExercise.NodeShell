const pwd = require("./pwd.js");
const ls = require("./ls.js");
const cat = require("./cat.js");

process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  data = data.toString().trim();
  if (data === "pwd") {
    pwd();
  }
  if (data === "ls") {
    ls();
  }
  if (data.split(" ")[0] === "cat") {
    cat(data.split(" ")[1]);
  }
});
