import React from 'react';
import styled from 'styled-components';

import generateColor from '../helpers/color-generator';
import getPassword from '../helpers/password-generator';
import Footer from './Footer';
import PasswordStrengthIndicator from './PasswordStrengthIndicator';
import PasswordLengthInput from './PasswordLengthInput';

import Heading from './common/HeadingStyledComponent';
import Header from './Header';

import Password from './Password';

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 640px;
  text-align: center;
  width: 100%;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: generateColor(),
      count: 10,
      password: getPassword(10)
    };

    this.handleClick = this.handleClick.bind(this);
    this.handlePasswordLengthChange = this.handlePasswordLengthChange.bind(this);
  }

  handleClick() {
    this.setState({
      color: generateColor(),
      password: getPassword(this.state.count)
    });
  }

  handlePasswordLengthChange(event) {
    this.setState({
      count: +event.target.value,
      password: getPassword(event.target.value)
    });
  }

  render() {
    return (
      <Wrapper>
        <Header handleClick={this.handleClick} color={this.state.color} />
        <Heading>Your diceware password is</Heading>

        <Password password={this.state.password} color={this.state.color} />

        <PasswordStrengthIndicator count={this.state.count} />
        <PasswordLengthInput
          count={this.state.count}
          handleChange={this.handlePasswordLengthChange}
        />

        <Footer />
      </Wrapper>
    );
  }
}

export default App;
