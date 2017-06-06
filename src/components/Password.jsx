import React from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';

import Paragraph from './common/ParagraphStyledComponent';

const PasswordContainer = Paragraph.extend`
  font-family: 'Source Code Pro', monospace;
  font-size: 16px;
  color: ${props => props.color};
  cursor: pointer;
  margin: 0;
`;

const Info = Paragraph.extend`
  color: ${props => props.color};
  font-size: 12px;
  margin: 0;
  padding: 0;
`;

// Look into recompose for this bit
class Password extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      copied: false
    };

    this.handleCopy = this.handleCopy.bind(this);
  }

  handleCopy() {
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false });
    }, 3000);
  }

  render() {
    return (
      <div>
        <CopyToClipboard
          onCopy={this.handleCopy}
          text={this.props.password}>
            <PasswordContainer color={this.props.color}>{this.props.password}</PasswordContainer>
        </CopyToClipboard>
        <Info color={this.state.copied ? '#bd081c' : '#aaa'}>
          {this.state.copied ? 'Copied' : 'Tap the password to copy'}
        </Info>
      </div>
    );
  }
}

Password.propTypes = {
  password: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Password;
