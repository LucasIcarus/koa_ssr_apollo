import debug from 'debug';
import * as React from 'react';

import bem from '../../utils/bem';
// import { NamedLink } from '../routes';

import './style.sss';

const cx = bem({ block: 'layout' });
const log = debug('base:mainLayout');

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className={cx(null, 'main')}>
        <nav className={cx('nav')}>
          <span className={cx('nav', 'header')}>React SSR Base</span>
          {/* <NamedLink to='homepage' className={cn('nav', 'link')} /> */}
          {/* <NamedLink to="game" className={cn('nav', 'link')} /> */}
        </nav>
        <main className={cx('content')}>
          {children}
        </main>
        <footer className={cx('footer')}>
          Hosted at <a href='http://github.com/peter-mouland/react-lego'>github.com/peter-mouland/react-lego</a>
        </footer>
      </div>
    );
  }
}
