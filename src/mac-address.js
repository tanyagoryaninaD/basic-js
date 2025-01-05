const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let result = true;
  const regex = /[^A-F0-9]/g;
  const arr = n.split('-');

  if (arr.length !== 6) {
    return false;
  }

  arr.forEach((item) => {
    if (item.length !== 2) {
      result = false;
    }
    const found = item.match(regex);
    if (found) {
      result = false;
    }
  });

  return result;
}

module.exports = {
  isMAC48Address
};
