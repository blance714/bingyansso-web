import { fetchOidcAPI } from "./oidcAPI";

export type AuthParams = {
  client_id: string, response_type: string, scope: string, redirect_uri: string, state?: string, nonce?: string
};

export type AuthDatas = {
  code: string,
  redirect_uri: string
}

export function getAuth(params: AuthParams) {
  return fetchOidcAPI('auth', {
    ...params, redirect: 'false'
  }, undefined, "jwt");
} 