const fs = require("fs");
const symbols = require("./keysToCheck/symbols");
const checkDuplicates = require("./utils/checkDuplicates");
const getCipheringObj = require("./utils/getCipheringObj");

const processArgs = process.argv.splice(2);
const input = processArgs[3];
const output = processArgs[5];
let readStream;
let writeStream;
if (input) {
  readStream = fs.createReadStream(input);
} else {
  readStream = process.stdin;
}
if (output) {
  writeStream = fs.createWriteStream(output, { flags: "a" });
} else {
  writeStream = process.stdout;
}

readStream.on("readable", () => {
  let init = true;
  let wordToWrite = [];
  const buffer = readStream.read();
  const ciphering = processArgs[1].split("-");
  const isDuplicatesInside = checkDuplicates(ciphering);
  if (isDuplicatesInside) {
    console.log("Error. Please don't use duplicates in config");
    readStream.destroy();
    return;
  }

  if (buffer) {
    const formatedBuffer = buffer.toString().split("");
    for (let i = 0; i < ciphering.length; i++) {
      const cipheringToTransform = getCipheringObj(ciphering[i]);

      const wordToUse = init ? formatedBuffer : wordToWrite;
      wordToWrite = [];
      init = false;

      wordToUse.forEach((letter) => {
        if (symbols.includes(letter)) {
          wordToWrite.push(letter);
          return;
        }
        if (!cipheringToTransform[letter] && !symbols.includes(letter)) {
          return;
        }

        wordToWrite.push(cipheringToTransform[letter]);
      });
    }

    writeStream.write(wordToWrite.join(""));
  }
});

readStream.on("end", () => {
  console.log("Thanks, all works good. Check the result in the output.txt");
});

const handleError = () => {
  console.log("error");
  readStream.destroy();
  writeStream.end("Finished with error..");
};

readStream.on("error", handleError);
