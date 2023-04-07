import { fetchUserAPI } from "./userAPI";

export default function postUser(data: {
  nickname: string,
  password: string,
  type: string,
  account: string,
  code: string
}) {
  return fetchUserAPI('', undefined, data);
}