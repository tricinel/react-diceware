import { getRandomNumber, generatePassword } from '../../src/helpers/password';

const R = require('ramda');

// Get rid of this and refactor
const repeat = (fn, arg1, arg2, count) => {
  const arr = [];

  for (let i = 0; i < count; i += 1) {
    arr.push(fn(arg1, arg2));
  }

  return arr;
};

test('Generates a random number between two numbers', () => {
  // generates a number that is lower than max and higher than min
  expect(getRandomNumber(1, 5)).toBeGreaterThanOrEqual(1);
  expect(getRandomNumber(1, 5)).toBeLessThanOrEqual(5);

  // for a maximum of 5, at least 3 numbers should be different
  const arr = repeat(getRandomNumber, 1, 5, 5);
  expect(R.uniq(arr).length).toBeGreaterThan(1);

  // for a maximum of 100, at least 50 numbers should be different
  const arr2 = repeat(getRandomNumber, 1, 100, 100);
  expect(R.uniq(arr2).length).toBeGreaterThan(49);
});

test('Generate a random password', () => {
  const password = generatePassword(5);
  expect(password).toMatch(/\w/g);
  expect(password.split(' ').length).toEqual(5);
});
