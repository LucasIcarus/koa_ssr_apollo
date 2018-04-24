import * as debug from 'debug';
import * as Router from 'koa-router';
import * as koaStatic from 'koa-static';

// import apiRouter from './api';
// import { DIST } from '../config/paths';
// import renderApp from './middleware/render-app';
// import setRouterContext from './middleware/set-router-context';

const log = debug('server:router');
export const router = new Router();

const staticRoute = koaStatic(DIST);
staticRoute._name = 'koaStatic /dist'; // eslint-disable-line no-underscore-dangle

export function setRoutes(assets) {
  log('adding react routes');

  router
    .use(staticRoute)
    .use(apiRouter.allowedMethods())
    .use(setRouterContext())
    .get('/(.*)', renderApp(assets));
}
