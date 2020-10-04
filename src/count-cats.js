module.exports = function countCats(matrix) {
  let count = 0
  matrix.forEach(arr => {
    count += arr.reduce((prev, item) => {
      return item === '^^' ? prev + 1 : prev
    }, 0)
  });
  return count
};