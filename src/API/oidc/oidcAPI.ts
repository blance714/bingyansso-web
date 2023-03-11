import { getJWT } from "@/tools/jwt";

const API = 'localhost:3000/oidc';

export function getOidcAPI(
    url: string,
    params?: { [N: string]: string },
    auth?: 'jwt'
  ) {

  const searchParams = new URLSearchParams(params);
  const headers = new Headers();
  if (auth === 'jwt') headers.set('Authorization', `Bearer ${getJWT()}`);

  return fetch(API + url + '?' + searchParams.toString(), {
    method: 'GET',
    headers
  });
};

export function postOidcAPI(
  url: string,
  params?: { [N: string]: string },
  body?: { [N: string]: string },
  auth?: 'jwt'
) {

  const searchParams = new URLSearchParams(params);
  const headers = new Headers();
  if (auth === 'jwt') headers.set('Authorization', `Bearer ${getJWT()}`);

  return fetch(API + url + '?' + searchParams.toString(), {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  });
};