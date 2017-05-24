// @flow
import getStrength from '../../src/helpers/password-strength';

test('getStrength should return 33', () => {
  const strength = getStrength(3);
  expect(strength.width).toBe(33);
});

test('getStrength should return 66', () => {
  const strength = getStrength(5);
  expect(strength.width).toBe(66);
});

test('getStrength should return 95', () => {
  const strength = getStrength(7);
  expect(strength.width).toBe(95);
});
