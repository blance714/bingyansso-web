import { getJWT } from "@/tools/jwt";

const API = 'https://api.bingyan.net/dev/sso/oidc/';

export function fetchOidcAPI(
  url: string,
  params?: { [N: string]: string },
  body?: { [N: string]: string },
  auth?: 'jwt'
) {
  const searchParams = new URLSearchParams(params);
  const headers = new Headers();
  if (auth === 'jwt') {
    const jwt = getJWT();
    if (jwt) headers.set('Authorization', `Bearer ${jwt}`);
    else return Promise.reject('Not logged in or token expired');
  }

  return fetch(API + url + '?' + searchParams.toString(), {
    method: body ? 'POST' : 'GET',
    headers,
    body: body ? JSON.stringify(body) : undefined
  });
};