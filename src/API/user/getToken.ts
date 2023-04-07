import { fetchUserAPI } from "./userAPI";

export function getToken(type: string, params: { [N: string]: string }) {
  return fetchUserAPI('token', {
    type, ...params
  })
}