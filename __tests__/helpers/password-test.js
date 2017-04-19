// @flow

import { times, uniq, compose, length } from 'ramda';

import { getRandomNumber, generatePassword } from '../../src/helpers/password';

const createArrayOfRandomNumbers = (min: number, max: number, count: number): Function =>
  times((): number => getRandomNumber(min, max), count);

const countUniqueValuesInArray = compose(length, uniq, createArrayOfRandomNumbers);

test('Generates a random number between two numbers', () => {
  // generates a number that is lower than max and higher than min
  expect(getRandomNumber(1, 5)).toBeGreaterThanOrEqual(1);
  expect(getRandomNumber(1, 5)).toBeLessThanOrEqual(5);

  // for a maximum of 5, at least 2 numbers should be different
  expect(countUniqueValuesInArray(1, 5, 5)).toBeGreaterThanOrEqual(2);

  // for a maximum of 100, at least 50 numbers should be different
  expect(countUniqueValuesInArray(1, 100, 100)).toBeGreaterThanOrEqual(50);
});

test('Generate a random password', () => {
  const password = generatePassword(5);
  expect(password).toMatch(/\w/g);
  expect(password.split(' ').length).toEqual(5);
});
