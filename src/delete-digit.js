const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');

  const numbers = arr.reduce((acc, _, index) => {
    const newNum = arr.slice();
    newNum.splice(index, 1);
    const number = newNum.join('');
    acc.push(+number);
    return acc;
  }, []);
  
  return Math.max(...numbers);
}

module.exports = {
  deleteDigit
};
