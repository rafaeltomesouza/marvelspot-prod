import keys from '../configs/key.json';
import { MD5 } from 'crypto-js';
export const MARVEL_URL = 'https://gateway.marvel.com:443/v1/public/comics';

function auth() {
  const apikey = keys.apikey;
  const ts = new Date().getTime();
  const hash = MD5(`${ts}${keys.key}${apikey}`).toString();
  return { apikey, ts, hash };
}

export function getCommicByDesc(params) {
  const { apikey, ts, hash } = auth();
  const keys = `&apikey=${apikey}&hash=${hash}&ts=${ts}`;
  let url = `${MARVEL_URL}?`;

  const newParams =
    params.map((item) => {
      const key = Object.keys(item);
      return item[key] !== '' ? `${key}=${item[key]}` : void 0;
    });

  return `${url}${newParams.length > 0 ? newParams.join('&') : ''}${keys}`;
}

export function getCommicById(id) {
  const { apikey, ts, hash } = auth();
  return `${MARVEL_URL}/${id}?apikey=${apikey}&hash=${hash}&ts=${ts}`;
}