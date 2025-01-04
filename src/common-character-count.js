const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const minArr = s1.length <= s2.length ? s1.split('') : s2.split('');
  const maxArr = s1.length <= s2.length ? s2.split('') : s1.split('');
  let count = 0;
  minArr.forEach((item) => {
    const indexItem = maxArr.indexOf(item);
    if (indexItem >= 0) {
      maxArr.splice(indexItem, 1);
      count += 1;
    }
  })
  return count;
}

module.exports = {
  getCommonCharacterCount
};
