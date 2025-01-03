const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direction = true) {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.direction = direction;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error(`Incorrect arguments!`);
    }

    const arr = message.split('');
    let countKey = 0;

    const result = arr.map((item) => {
      if (!this.alphabet.includes(item.toUpperCase())) {
        return item;
      }
      if (countKey >= key.length) {
        countKey = 0;
      }

      const indexMessage = this.alphabet.indexOf(item.toUpperCase());
      const indexKey = this.alphabet.indexOf(key[countKey].toUpperCase());
      const circleIndex = indexMessage + indexKey - this.alphabet.length;
      countKey += 1;

      return this.alphabet.at(circleIndex); ;
    })

    return this.direction ? result.join('') : result.reverse().join('');
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error(`Incorrect arguments!`);
    }

    const arr = encryptedMessage.split('');
    let countKey = 0;

    const result = arr.map((item) => {
      if (!this.alphabet.includes(item.toUpperCase())) {
        return item;
      }
      if (countKey >= key.length) {
        countKey = 0;
      }

      const indexMessage = this.alphabet.indexOf(item.toUpperCase());
      const indexKey = this.alphabet.indexOf(key[countKey].toUpperCase());
      const circleIndex = indexMessage - indexKey;
      countKey += 1;
      return this.alphabet.at(circleIndex);
    })

    return this.direction ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
