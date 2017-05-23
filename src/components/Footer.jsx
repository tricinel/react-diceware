import React from 'react';
import styled from 'styled-components';

const FooterTitle = styled.h2`
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  color: #444;
`;

const FooterParagraph = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  color: #444;
`;

const FooterLink = styled.a`
  font-family: 'Lato', sans-serif;
  font-size: 16px;
`;

const Footer = () => (
  <div>
    <FooterTitle>What is Diceware</FooterTitle>
    <FooterParagraph>
      Diceware is a method to build long, strong, memorable
      passwords using strings of words from the dictionary.
    </FooterParagraph>
    <FooterLink href="http://world.std.com/~reinhold/diceware.html">
      Find out more
    </FooterLink>
  </div>
);

export default Footer;
