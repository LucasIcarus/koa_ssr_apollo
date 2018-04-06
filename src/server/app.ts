import * as debug from 'debug';
import * as Koa from 'koa';
import * as compress from 'koa-compress';

import errorHandler from './middlewares/fail';

const app = new Koa();
const log = debug('server:app.js');

log('starting');

app.use(compress({ threshold: 2048 }));
app.use(errorHandler('500Page'));
app.use((ctx) => {
  ctx.body = 'Hello Koa';
});

log('server is listening on port 8989');
app.listen(8989);
