import * as debug from 'debug';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Root from './App';
import './config/environment';

import './styles/app.sss';

const log = debug('lego:client-entry');

try {
  ReactDOM.render(<Root />, document.getElementById('html'));
} catch (err) {
  log('Render error', err);
}
