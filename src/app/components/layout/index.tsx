import debug from 'debug';
import * as React from 'react';
import { Helmet } from 'react-helmet';

import { bem } from '../../utils';

import './style.sss';

const cx = bem({ block: 'layout' });
const log = debug('app-comp:Layout');

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className={cx(null, 'main')}>
        <Helmet>
          <meta charSet="utf-8" />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>This is a starter demo</title>
          <meta name="description" content="This starter is mainly about fuse-box, koa-react-ssr and apollo." />
          <meta name="keywords" content="FuseBox, Koa, React, SSR, Apollo, StarterKit" />
        </Helmet>
        <header className={cx('header')}>
          <span className={cx('header', 'title')}>Base Demo</span>
        </header>
        <main className={cx('content')}>{children}</main>
        <footer className={cx('footer')}>
          Footer of Base Demo
          <div className="something">CONTENT</div>
        </footer>
      </div>
    );
  }
}
