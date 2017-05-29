// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PasswordContainer = styled.div`
  font-family: 'Source Code Pro', monospace;
  font-size: 16px;
  color: ${props => props.color}
`;

const Password = ({ password, color }: { password: string, color: string }) => (
  <PasswordContainer color={color}>{password}</PasswordContainer>
);

Password.propTypes = {
  password: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Password;
