const API = 'https://api.bingyan.net/dev/sso/user/';

/**
 * @function getUserAPI
 * @param {string} url
 * @param {Object} params
 * @returns Promise<any>
 */
export function getUserAPI(
  url: string,
  params?: { [N: string]: string },
) {
  const searchParams = new URLSearchParams(params);
  const requestURL = API + url + '?' + searchParams.toString();

  return fetch(requestURL , {
    method: 'GET'
  }).then(res => res.json())
  .then(json => {
    if (json.success) return json.data;
    else return Promise.reject(json.message);
  })
}