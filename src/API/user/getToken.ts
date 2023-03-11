import { getUserAPI } from "./userAPI";

export function getToken(type: string, params: { [N: string]: string }) {
  return getUserAPI('token', {
    type, ...params
  })
}