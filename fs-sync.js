const { readFileSync, writeFileSync } = require("fs");

const firstText = readFileSync("./fsbaiscstuts/first.txt", "utf8", "first.txt");
const secondText = readFileSync(
  "./fsbaiscstuts/second.txt",
  "utf8",
  "second.txt"
);

console.info({ firstText, secondText });

writeFileSync(
  "./fsbaiscstuts/resut.txt",
  `hey here is the result: ${firstText} and here is the second ${secondText}`,
  { flag: "a" }
);

/* this is not used mostly any where its just for practice */
