const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const counts = {};
  return names.reduce((acc, item) => {
    if (acc.includes(item)) {
      if (counts[item]) {
        counts[item] += 1;
        item += `(${counts[item]})`;
        acc.push(item);
      } else {
        counts[item] = 1;
        item += '(1)';
        acc.push(item);
      }
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}

module.exports = {
  renameFiles
};
