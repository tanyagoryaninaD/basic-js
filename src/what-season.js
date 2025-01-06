const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date || arguments.length === 0) {
    throw new Error(`Unable to determine the time of year!`);
  }

  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error(`Invalid date!`);
  }

  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error(`Invalid date!`);
  }

  const SEASONS = [
    'winter',
    'winter',
    'spring',
    'spring',
    'spring',
    'summer',
    'summer',
    'summer',
    'autumn',
    'autumn',
    'autumn',
    'winter',
  ];

  const month = date.getMonth();
  return SEASONS[month];
}

module.exports = {
  getSeason
};
