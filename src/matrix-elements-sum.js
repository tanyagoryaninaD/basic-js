const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix[0].reduce((acc, _, i) => {
    let count = 0;
    while (count < matrix.length && matrix[count][i] > 0) {
      acc += matrix[count][i];
      count += 1;
    }
    return acc;
  }, 0)
}

module.exports = {
  getMatrixElementsSum
};
