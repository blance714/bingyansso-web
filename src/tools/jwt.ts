export function getJWT() {
  return localStorage.getItem('User_JWT');
}

export function setJWT(jwt: string) {
  localStorage.setItem('User_JWT', jwt);
}