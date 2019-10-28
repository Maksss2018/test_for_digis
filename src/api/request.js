import axios from 'axios';

export function request(url, options) {
  const config = { method: 'GET', ...options };
  const errors = [];
  const { method, headersConf, payload } = config;

  if (!url) {
    errors.push('path');
  }

  if (errors.length) {
    throw new Error(`Error! You must pass \`${errors.join('`, `')}\``);
  }

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headersConf,
  };

  const params = {
    url,
    headers,
    method,
    withCredentials: true,
  };

  if (params.method !== 'GET') {
    params.data = payload;
  }

  return axios(params)
    .then(({ data }) => data)
    .catch(({ response: { statusText, status, data } }) => {
      console.log(`${status} ${statusText} ${data}`);
    });
}
