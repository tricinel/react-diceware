import { getMathRandomNumber, getRandomNum } from '../../src/helpers/number-generator';

test('getMathRandomNumber should return a number between 1 and 5', () => {
  expect(getMathRandomNumber(1, 5)).toBeGreaterThanOrEqual(1);
  expect(getMathRandomNumber(1, 5)).toBeLessThanOrEqual(5);
});

test('getRandomNum should return a number between 1 and 5, with Crypto unavailable', () => {
  expect(getRandomNum(5)).toBeGreaterThanOrEqual(1);
  expect(getRandomNum(5)).toBeLessThanOrEqual(5);
});

// TODO: Write a test after we figure out how to mock window.crypto
