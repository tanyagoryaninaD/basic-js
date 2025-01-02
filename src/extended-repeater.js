const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const result = new Array(options.repeatTimes).fill(null);
  const separator = options.separator ? options.separator : '+';
  const additionSeparator = options.additionSeparator ? options.additionSeparator : '|';

  return result.map(() => {
    const additions = new Array(options.additionRepeatTimes).fill(options.addition);
    return str + additions.join(`${additionSeparator}`);
  }).join(`${separator}`);
}

module.exports = {
  repeater
};
