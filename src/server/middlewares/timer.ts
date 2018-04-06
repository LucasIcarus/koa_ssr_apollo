import * as debug from 'debug';
import { Context } from 'koa';

const log = debug('server:timer-logger');

export default async (ctx: Context, next: Function) => {
  const start: number = new Date().getTime();
  await next();
  const ms = new Date().getTime() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
  log(`${ctx.method} ${ctx.originalUrl} ${ctx.status} ${ms}ms`);
};
