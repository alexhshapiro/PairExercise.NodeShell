const fs = require("fs");

module.exports = (filename) => {
  fs.readFile(filename, "utf8", (err, contents) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(contents);
      process.stdout.write("\nprompt > ");
    }
  });
};
