import * as debug from 'debug';
import * as React from 'react';

import { bem } from '../../utils';

import './style.sss';

debug('app:NotFoundPage');
const cx = bem({ block: 'not-found' });

export const NotFound: React.SFC = () => (
  <div className={cx(null, 'root')}>
    You stepped into The Void.
  </div>
);
