import React, { PropTypes } from 'react';
import styled from 'styled-components';

import getStrength from '../helpers/password-strength';

import ProgressBar from './ProgressBar';
import Paragraph from './common/ParagraphStyledComponent';

const PasswordStrengthIndicator = ({ count }) => (
  <div>
    <Paragraph>How strong is it?</Paragraph>
    <ProgressBar width={getStrength(count).width} color={getStrength(count).color} />
  </div>
);

PasswordStrengthIndicator.propTypes = {
  count: PropTypes.number.isRequired
};

export default PasswordStrengthIndicator;
