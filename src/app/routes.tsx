import * as debug from 'debug';
import * as React from 'react';
import { Helmet } from 'react-helmet';
// import DocumentMeta from 'react-document-meta';
import { Link, Route, Switch } from 'react-router-dom';

import Layout from './components/layout';
import { About, Home, NotFound } from './pages';
import { bem } from './utils';

debug('app:routes');
const cx = bem({ block: 'link' });

export const getRoutesConfig = () => [
  {
    name: 'home-page',
    exact: true,
    path: '/',
    label: 'Starter Index',
    component: Home,
  },
  {
    name: 'about-page',
    path: '/about/',
    label: 'Starter About',
    exact: true,
    component: About,
  },
];

export const findRoute = (to) => getRoutesConfig().find((rt) => rt.name === to);

// test this active link and route matching
export const NamedLink: React.SFC<any> = ({ className, to, children, ...props }) => {
  const route = findRoute(to);
  if (!route) throw new Error(`Route to '${to}' not found`);
  return (
    <Route
      path={route.path}
      exact
      children={({ match }) => (
        <Link
          to={route.path}
          {...props}
          className={cx(null, { active: match }, className)}
        >
          {children || route.label}
        </Link>
      )}
    />
  );
};

const RouteWithMeta: React.SFC<any> = ({
  component: Component,
  meta,
  ...props,
}) => (
  <Route
    {...props}
    render={(matchProps) => (
      <span>
        <Component {...matchProps} />
      </span>
    )}
  />
);

export function makeRoutes() {
  return (
    <Layout>
      <Switch>
        {getRoutesConfig().map((route) => (
          <RouteWithMeta {...route} key={route.name} />
        ))}
        <Route title={'Page Not Found - React Lego'} component={NotFound} />
      </Switch>
    </Layout>
  );
}
