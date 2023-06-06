import { fetchUserAPI } from "./userAPI";

export function putUnloginPassword(
  account: string,
  type: string,
  code: string,
  password_new: string
) {
  return fetchUserAPI('/password', undefined, {
    account, type, code, password_new
  }, 'PUT');
}