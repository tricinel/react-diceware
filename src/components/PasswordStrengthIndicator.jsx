import React, { PropTypes } from 'react';
import styled from 'styled-components';

import getStrength from '../helpers/password-strength';

// Refactor this and the FooterParagraph so that we can reuse them
const Paragraph = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  color: #444;
`;

const ProgressWrapper = styled.div`
  width: 100%;
  background-color: #ddd;
  height: 1px;
  display: block;
  position: relative;
  height: 2px;
`;

const ProgressBar = styled.div`
  width: ${props => props.width}%;
  background-color:  ${props => props.color};
  height: 2px;
  display: block;
  position: absolute;
  z-index: 2
`;

const PasswordStrengthIndicator = ({ count }) => (
  <div>
    <Paragraph>How strong is it?</Paragraph>
    <ProgressWrapper>
      <ProgressBar width={getStrength(count).width} color={getStrength(count).color}></ProgressBar>
    </ProgressWrapper>
  </div>
);

PasswordStrengthIndicator.propTypes = {
  count: PropTypes.number.isRequired
};

export default PasswordStrengthIndicator;
