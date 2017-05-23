import colors from '../../src/helpers/colors';
import generateColor from '../../src/helpers/color-generator';

test('generateColor should return a color', () => {
  const color = generateColor();
  expect(colors).toContain(color);
});
