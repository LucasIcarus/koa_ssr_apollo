import * as debug from 'debug';
import * as Koa from 'koa';
import * as compress from 'koa-compress';

import cache from './middlewares/cache';
import errorHandler from './middlewares/fail';
import pageRenderers from './middlewares/page-renderers';
import timer from './middlewares/timer';

const app = new Koa();
const log = debug('server:app');

log('starting');

app.use(errorHandler('Internal_Server_Error'));
app.use(timer);
app.use(compress({ threshold: 2048 }));
app.use(cache);
app.use(pageRenderers);
app.use((ctx) => {
  ctx.body = 'Hello Koa';
});

log('server is listening on port 4396');
app.listen(4396);
