// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Bar = styled.div`
  display: block;
  height: 2px;
`;

const Container = Bar.extend`
  background-color: #ddd;
  position: relative;
  width: 100%;
`;

const Progress = Bar.extend`
  background-color:  ${props => props.color};
  position: absolute;
  width: ${props => props.width}%;
  z-index: 2
`;

const ProgressBar = ({ width, color }: { width: number, color: string }) => (
  <Container>
    <Progress width={width} color={color} />
  </Container>
);

ProgressBar.propTypes = {
  width: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
};

export default ProgressBar;
