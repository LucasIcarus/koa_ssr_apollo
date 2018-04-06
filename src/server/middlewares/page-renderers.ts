import * as debug from 'debug';
import { Context } from 'koa';
import * as React from 'react';
import { renderToString } from 'react-dom/server';

import Error500 from '../templates/Error500';

const log = debug('server:page-renderers');

export default async (ctx, next) => {
  ctx.renderPageToString = function renderPageToString(page) {
    return `<!doctype html>${renderToString(page)}`;
  };
  ctx.Internal_Server_Error = (e) => {
    log('500 Error', e);
    ctx.response.status = 500;
    return ctx.renderPageToString(<Error500 />);
  };
  await next();
};
