const API = 'https://api.bingyan.net/dev/sso/user/';

export function getUserAPI(
  url: string,
  params?: { [N: string]: string },
) {
  const searchParams = new URLSearchParams(params);

  return fetch(API + url + '?' + searchParams.toString(), {
    method: 'GET'
  }).then(res => res.json())
  .then(json => {
    if (json.success) return json.data;
    else return Promise.reject(json.message);
  })
}