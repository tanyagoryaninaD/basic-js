const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.map((array, indexArr) => {
    return array.map((_, i) => {
      const top = indexArr > 0 ? matrix[indexArr - 1][i]: undefined;
      const bottom = indexArr + 1 < matrix.length ? matrix[indexArr + 1][i] : undefined;
      const right = i + 1 < array.length ? matrix[indexArr][i + 1] : undefined;
      const left = i > 0 ? matrix[indexArr][i - 1] : undefined;

      const topLeft = indexArr > 0 ? matrix[indexArr - 1][i - 1] : undefined;
      const topRight = indexArr > 0 && i + 1 < array.length ? matrix[indexArr - 1][i + 1] : undefined;
      const bottomLeft = indexArr + 1 < matrix.length && i > 0 ? matrix[indexArr + 1][i - 1] : undefined;
      const bottomRight = indexArr + 1 < matrix.length && i + 1 < array.length ? matrix[indexArr + 1][i + 1] : undefined;

      const sides = [top, bottom, right, left, topLeft, topRight, bottomLeft, bottomRight];

      const filteredSides = sides.filter((side) => side === true);
      return filteredSides.length;
    });
  })
}

module.exports = {
  minesweeper
};
