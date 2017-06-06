import React from 'react';
import styled from 'styled-components';

import Heading from './common/HeadingStyledComponent';
import Paragraph from './common/ParagraphStyledComponent';

const Wrapper = styled.div`
  border-top: 1px solid #ddd;
  margin: 20px 0;
  padding: 20px 0;
`;

const FooterTitle = Heading.withComponent('h2').extend`
  font-size: 20px;
`;

const FooterLink = Paragraph.withComponent('a').extend`
  color: #03A9F4;
`;

const Footer = () => (
  <Wrapper>
    <FooterTitle>What is Diceware</FooterTitle>
    <Paragraph>
      Diceware is a method to build long, strong, memorable
      passwords using strings of words from the dictionary.
    </Paragraph>
    <FooterLink href="http://world.std.com/~reinhold/diceware.html">
      Find out more
    </FooterLink>
  </Wrapper>
);

export default Footer;
