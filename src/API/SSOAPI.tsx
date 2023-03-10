import { getJWT } from "../tools/jwt";
import { useFetch } from "../utils/useFetch";

const API = 'localhost:3000/';

export function getSSOAPI(
    url: string,
    params?: { [N: string]: string },
    auth?: 'jwt'
  ) {

  const searchParams = new URLSearchParams(params);
  const headers = new Headers();
  if (auth === 'jwt') headers.set('Authorization', `Bearer ${getJWT()}`);

  return useFetch(API + url + '?' + searchParams.toString(), {
    method: 'GET',
    headers
  });
};

export function postSSOAPI(
  url: string,
  params?: { [N: string]: string },
  body?: { [N: string]: string },
  auth?: 'jwt'
) {

  const searchParams = new URLSearchParams(params);
  const headers = new Headers();
  if (auth === 'jwt') headers.set('Authorization', `Bearer ${getJWT()}`);

  return useFetch(API + url + '?' + searchParams.toString(), {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  });
};