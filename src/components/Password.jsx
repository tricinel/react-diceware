// @flow

import React from 'react';
import styled from 'styled-components';

import { generateColor } from '../helpers/password';
import getPassword from '../helpers/password-generator'

const PasswordContainer = styled.div`
  font-family: 'Source Code Pro', monospace;
  font-size: 16px;
  color: ${generateColor()};
`;

const Password = ({ count }: { count:number }) => (
  <PasswordContainer>{getPassword(count)}</PasswordContainer>
);

export default Password;
