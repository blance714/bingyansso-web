export function getJWT() {
  const userJWT = localStorage.getItem('user_jwt');
  const expire = localStorage.getItem('user_jwt_expire_at');

  if (parseInt(expire ?? '0') < Date.now() / 1000) {
    localStorage.removeItem('user_jwt');
    localStorage.removeItem('user_jwt_expire_at');
    return null;
  }

  return userJWT;
}

export function setJWT( jwt?:string, expire?:string ) {
  if (jwt === undefined) localStorage.removeItem('user_jwt');
  else  localStorage.setItem('user_jwt', jwt);
  if (expire === undefined) localStorage.removeItem('user_jwt_expire_at');
  else  localStorage.setItem('user_jwt_expire_at', expire);
}