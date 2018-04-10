import debug from 'debug';
import * as React from 'react';

import { bem } from '../../utils';

import './style.sss';

debug('pages:home');
const cx = bem({ block: 'home' });

export const Home: React.SFC = () => (
  <div className={cx(null, 'root')}>
    Here is the Home Page.
  </div>
);
