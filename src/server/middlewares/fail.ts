import * as debug from 'debug';

const log = debug('server:fail.js');

export default function errorHandler(renderer: string) {
  return async (ctx, next) => {
    try {
      await next();
      // TODO: 服务化接口异常信息收集
    } catch (err) {
      if (process.env.NODE_ENV === 'production') {
        // TODO: 输出错误信息到日志
      } else {
        log(err);
      }

      ctx.response.status = err.status || 500;
      if (renderer) {
        ctx.type = 'html';
        ctx.body = ctx[renderer](err);
      } else if (err.status === 401 || err.status === 403) {
        ctx.status = err.status;
        ctx.body = { message: 'Protected resource, you are unauthorized', error: err };
      } else {
        ctx.type = 'json';
        ctx.body = { error: err };
      }
      ctx.app.emit('error', err, ctx);
    }
  };
}
