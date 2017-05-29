// @flow

import wordList from './word-list';
import { getRandomNum } from './number-generator';

const rollDice = (count: number): string => {
  const diceRolls = [];
  for (let i = 1; i <= count; i += 1) {
    diceRolls.push(getRandomNum(6));
  }
  return diceRolls.join('');
};

const getPassword = (count: number): string => {
  const words = [];
  for (let i = 0; i < count; i += 1) {
    words.push(
      wordList[rollDice(5)]
    );
  }
  return words.join(' ');
};

export default getPassword;
