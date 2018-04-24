import * as debug from 'debug';
import * as React from 'react';

import { bem } from '../../utils';

import './style.sss';

debug('app:AboutPage');
const cx = bem({ block: 'about' });

export const About: React.SFC = () => (
  <div className={cx(null, 'root')}>
    Here is the About Page.
  </div>
);
