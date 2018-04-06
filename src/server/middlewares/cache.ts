import * as crypto from 'crypto';
import { Context } from 'koa';

export default async (ctx: Context, next: Function) => {
  await next();
  if (ctx.body && ctx.response.status === 200) {
    ctx.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    ctx.set('Pragma', 'no-cache');
    ctx.set('Expires', '0');
    if (typeof ctx.body === 'string') {
      ctx.set('Content-Length', String(ctx.body.length));
      ctx.set('etag', crypto.createHash('md5').update(ctx.body).digest('hex'));
    }
  }
};
