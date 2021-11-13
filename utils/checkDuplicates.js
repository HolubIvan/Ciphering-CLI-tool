module.exports = function (arr) {
  return new Set(arr).size !== arr.length;
};
