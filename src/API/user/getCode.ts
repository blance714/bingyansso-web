import { fetchUserAPI } from "./userAPI";

export function getPhoneCode(phone: string) {
  return fetchUserAPI('phone_code', {
    phone
  })
}

export function getEmailCode(email: string) {
  return fetchUserAPI('email_code', {
    email
  })
}