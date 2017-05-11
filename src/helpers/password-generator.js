import wordList from './word-list';

const getRandomNum = (max) => {
  let randomNum;
  const array = new Uint32Array(1);
  const Crypto = window.crypto || window.msCrypto;
  if (Crypto !== undefined) {
    Crypto.getRandomValues(array);
    randomNum = array[0] % max;
  } else {
    // instead of error, introduce fallback using Math.random
    throw new Error('Crypto method not available');
  }
  return randomNum + 1;
};

const rollDice = (count) => {
  const diceRolls = [];
  for (let i = 1; i <= count; i += 1) {
    diceRolls.push(getRandomNum(6));
  }
  return diceRolls.join('');
};

const getPassword = (count) => {
  const words = [];
  for (let i = 0; i < count; i += 1) {
    words.push(
      wordList[rollDice(5)]
    );
  }
  return words.join(' ');
};

export default getPassword;
