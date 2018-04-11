import * as debug from 'debug';

import { localUrl } from '../utils';

const log = debug('utils:fetch');

export interface CustomError extends Error {
  response?: any;
}

export function checkStatus(response: Response) {
  if (response.status < 200 || response.status >= 500) {
    const error: CustomError = new Error(response.statusText);
    error.response = response;
    throw error;
  }
  return response;
}

const jsonOpts = (method: string, data) => ({
  method,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  data: data && JSON.stringify(data),
});

export const fetchUrl = (endpoint, opts = {}) => {
  const url = endpoint.indexOf('//') > -1 ? endpoint : `${localUrl}${endpoint}`;
  return fetch(url, { ...opts })
    .then(checkStatus)
    .then((response) => response.text())
    .catch((error) => {
      log('request failed', error);
      throw new Error('request failed');
    });
};

export const getJSON = (url: string, options?: { [x: string]: any }) =>
  fetchUrl(url, jsonOpts('GET', null)).then((data) => JSON.parse(data));

export const postJSON = (url: string, data?: { [x: string]: any }, options?: { [x: string]: any }) =>
  fetchUrl(url, jsonOpts('POST', data));
