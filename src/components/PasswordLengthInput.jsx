// @flow

import React from 'react';
import PropTypes from 'prop-types';

import Paragraph from './common/ParagraphStyledComponent';

const PasswordLengthInput = ({ count, handleChange }: { count: number, handleChange: Function }) => (
  <Paragraph>
    Make it stronger
    <br />
    <input type="range" min="0" max="20" value={count} onChange={handleChange} />
    <br />
    <span>Your password is currently {count} words long.</span>
  </Paragraph>
);

PasswordLengthInput.propTypes = {
  count: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default PasswordLengthInput;
