const pwd = require("./pwd.js");
const ls = require("./ls.js");
const cat = require("./cat.js");

process.stdout.write("input filename > ");

process.stdin.on("data", (data) => {
  cat(data);
});
