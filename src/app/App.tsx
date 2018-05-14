/* global window */
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { withClientState } from 'apollo-link-state';
import * as debug from 'debug';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, StaticRouter } from 'react-router-dom';

import { makeRoutes } from './routes';
import schema from './schema';
import { isBrowser } from './utils';

declare global {
  interface Window { __APOLLO_STATE__: Object; }
}

debug('app:Root');

const client = new ApolloClient({
  link: withClientState(schema),
  cache: new InMemoryCache(isBrowser ? window.__APOLLO_STATE__ : {}),
});

// exported to be used in tests
export const Router = isBrowser ? BrowserRouter : StaticRouter;

export default class Root extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router {...this.props} >
          {makeRoutes()}
        </Router>
      </ApolloProvider>
    );
  }
}
