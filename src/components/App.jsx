import React from 'react';
import styled from 'styled-components';

import Password from './Password';

const Title = styled.h1`
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  color: #444;
`;

const Wrapper = styled.section`
  margin: 20px auto;
  max-width: 640px;
  text-align: center;
  width: 100%;
`;

const App = () => (
  <Wrapper>
    <Title>Your diceware password is</Title>

    <Password count="10" />
  </Wrapper>
);

export default App;
