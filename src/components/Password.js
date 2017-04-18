import React from "react";
import styled from "styled-components";

import { generatePassword, generateColor } from "../helpers/password";

const PasswordContainer = styled.div`
  font-family: 'Source Code Pro', monospace;
  font-size: 16px;
  color: ${generateColor()};
`;

const Password = ({ count }) => (
  <PasswordContainer>{generatePassword(count)}</PasswordContainer>
);

export default Password;