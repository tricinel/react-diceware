// @flow

import React from 'react';
import styled from 'styled-components';

import Heading from './common/HeadingStyledComponent';

const Title = Heading.extend`
  color: #fff;
  font-family: 'Source Code Pro', sans-serif;
  font-size: 36px;
  margin: 0 auto;
  padding: 70px 0 30px 0;
  position: relative;
  text-align: center;
  width: 200px;
`;

const Wrapper = styled.div`
  position: relative;
  height: 300px;
  margin-bottom: 50px;
`;

const Skew = styled.svg`
  background-color: #0C5999;
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: top left;
  transform: skewY(-6deg);
  width: 100%;
`;

const Button = styled.button`
  background-color: ${props => props.color};
  border-radius: 50%;
  border: 1px solid ${props => props.color};
  box-shadow: 0px 0px 10px 1px rgba(50, 50, 50, 0.45);
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
  height: 100px;
  line-height: 90px;
  margin: 20px 0;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 100px;

  :focus {
    outline: none;
  }
`;

const Header = ({ handleClick, color }: { handleClick: Function, color: string }) => (
  <Wrapper>
    <Skew />

    <Title>
      React Diceware
    </Title>

    <Button onClick={handleClick} color={color}>
      +
    </Button>
  </Wrapper>
);

export default Header;
