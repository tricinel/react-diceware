import React, { PropTypes } from 'react';

const PasswordStrengthIndicator = ({ password }) => (
  <div>
    <p>How strong is it?</p>
    {password}%
  </div>
);

PasswordStrengthIndicator.propTypes = {
  password: PropTypes.number.isRequired
};

export default PasswordStrengthIndicator;
