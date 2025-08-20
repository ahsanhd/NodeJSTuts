const { log } = require("console");
const { readFile, writeFile } = require("fs");

readFile("./fsbaiscstuts/first.txt", "utf8", (err, resultOne) => {
  if (err) {
    log(err);
  }
  log(resultOne);

  readFile("./fsbaiscstuts/second.txt", "utf8", (err, resultSecond) => {
    if (err) {
      log(err);
    }
    log(resultSecond);

    writeFile(
      "./fsbaiscstuts/async-result.txt",
      `Hello here is the async Results: ${resultOne} and ${resultSecond}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          log(err);
        }

        log("Done");
      }
    );
  });
});
