import React from 'react';
import styled from 'styled-components';

import generateColor from '../helpers/color-generator';
import getPassword from '../helpers/password-generator';
import Footer from './Footer';
import PasswordStrengthIndicator from './PasswordStrengthIndicator';
import PasswordLengthInput from './PasswordLengthInput';

import Heading from './common/HeadingStyledComponent';

import Password from './Password';

const Wrapper = styled.section`
  margin: 20px auto;
  max-width: 640px;
  text-align: center;
  width: 100%;
`;

const Button = styled.button`
  background-color: ${props => props.color};
  border: 1px solid ${props => props.color};
  color: #fff;
  margin: 20px 0;
  padding: 5px 25px;
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
        <Heading>Your diceware password is</Heading>

        <Password password={this.state.password} color={this.state.color} />

        <PasswordStrengthIndicator count={this.state.count} />
        <PasswordLengthInput
          count={this.state.count}
          handleChange={this.handlePasswordLengthChange}
        />

        <Button onClick={this.handleClick} color={this.state.color}>
          Generate new password
        </Button>

        <Footer />
      </Wrapper>
    );
  }
}

export default App;
