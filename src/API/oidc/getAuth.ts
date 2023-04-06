import { fetchOidcAPI } from "./oidcAPI";

export type authParams = {
  client_id: string, response_type: string, scope: string, redirect_uri: string, state?: string, nonce?: string
};

export function getAuth(params: authParams) {
  return fetchOidcAPI('auth', params, undefined, "jwt");
}