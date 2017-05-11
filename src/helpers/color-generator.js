// @flow

import { nth } from 'ramda';
import { getMathRandomNumber } from './number-generator';
import colors from './colors';

const generateColor = (): string => nth(getMathRandomNumber(0, colors.length), colors);

export default generateColor;
