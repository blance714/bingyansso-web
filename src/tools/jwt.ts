export function getJWT() {
  return ['user_jwt', 'user_jwt_expire_at']
    .map(key => localStorage.getItem(key));
}

export function setJWT( jwt?:string, expire?:string ) {
  if (jwt === undefined) localStorage.removeItem('user_jwt');
  else  localStorage.setItem('user_jwt', jwt);
  if (expire === undefined) localStorage.removeItem('user_jwt_expire_at');
  else  localStorage.setItem('user_jwt_expire_at', expire);
}