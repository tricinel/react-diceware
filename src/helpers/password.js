// @flow

import words from '../dictionary';

// Figure out a better way to generate truly random numbers
const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;

const generatePassword = (count: number): string => {
  let pass = '';
  // Is there a better way to do this?
  for (let i = 0; i < count; i += 1) {
    const word = words[getRandomNumber(0, words.length)];
    pass += i === 0 ? word : ` ${word}`;
  }

  return pass;
};

const generateColor = (): string => {
  const colors = ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFC107', '#FF9800', '#FF5722', '#795548', '#607D8B'];

  return colors[getRandomNumber(0, colors.length)];
};

export { getRandomNumber, generatePassword, generateColor };
