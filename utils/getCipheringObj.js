const atbashKeys = require("./../keysToCheck/atbashKeys");
const {
  caesarKeysToEncode,
  caesarKeysToDecode,
} = require("./../keysToCheck/caesarKeys");
const { rot8ToEncode, rot8ToDecode } = require("./../keysToCheck/roy8Keys");

module.exports = function (key) {
  switch (key) {
    case "C1":
      return caesarKeysToEncode;
    case "C0":
      return caesarKeysToDecode;
    case "R1":
      return rot8ToEncode;
    case "R0":
      return rot8ToDecode;
    case "A":
      return atbashKeys;
    default:
      break;
  }
};
