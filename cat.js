const fs = require("fs");

module.exports = (filename) => {
  fs.readFile(filename, "utf8", (err, contents) => {
    if (err) {
      throw err;
    } else {
      console.log(contents);
      process.stdout.write(contents);
      process.stdout.write("input filename > ");
    }
  });
};
