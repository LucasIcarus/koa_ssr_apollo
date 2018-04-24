import * as debug from 'debug';
import { Context } from 'koa';
import * as React from 'react';
import { renderToString } from 'react-dom/server';

import { ErrorPage } from '../templates/Error';

const log = debug('server:page-renderer');

export default async (ctx, next) => {
  ctx.renderPageToString = (page) => `<!doctype html>${renderToString(page)}`;
  ctx.Internal_Server_Error = (e) => {
    log('Internal Server Error', e);
    ctx.response.status = 500;
    return ctx.renderPageToString(<ErrorPage />);
  };
  await next();
};
