// @flow

import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

require('normalize.css');
require('./reset.css');

render(
  <App />,
  document.getElementById('react-app')
);
