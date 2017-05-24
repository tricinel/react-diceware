import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  color: #444;
`;

const PasswordLengthInput = ({ count, handleChange }) => (
  <Paragraph>
    Make it stronger
    <br/>
    <input type="range" min="0" max="20" value={count} onChange={handleChange} />
    <br/>
    <span>Your password is currently {count} words long.</span>
  </Paragraph>
);

PasswordLengthInput.propTypes = {
  count: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default PasswordLengthInput;
