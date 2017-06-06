// @flow

import React from 'react';
import styled from 'styled-components';

import Heading from './common/HeadingStyledComponent';

const Title = Heading.extend`
  color: #fff;
  font-family: 'Source Code Pro', sans-serif;
  font-size: 36px;
  margin: 0 auto;
  padding: 70px 0;
  text-align: center;
  width: 200px;
`;

const Wrapper = styled.div`
  background-color: #0C5999;
  height: 300px;
  margin-bottom: 50px;
  position: relative;
`;

const Overlap = styled.svg`
  bottom: 0;
  height: 10vw;
  left: 0;
  position: absolute;
  width: 100%;
`;

const Header = () => (
  <Wrapper>
    <Title>
      React Diceware
    </Title>
    <Overlap viewBox="0 0 50 100" preserveAspectRatio="none">
      <polygon fill="white" points="0,100 100,0 50,100" />
    </Overlap>
  </Wrapper>
);

export default Header;
