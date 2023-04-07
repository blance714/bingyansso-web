const API = 'https://api.bingyan.net/dev/sso/user';

/**
 * @function fetchUserAPI
 * @param {string} url
 * @param {Object} params
 * @returns Promise<any>
 */
export function fetchUserAPI(
  url: string,
  params?: { [N: string]: string },
  body?: { [N: string]: string }
) {
  const searchParams = new URLSearchParams(params).toString();
  const requestURL = API + url + (searchParams ? '?' + searchParams : '');

  return fetch(requestURL , {
    method: body ? 'POST' : 'GET',
    body: body ? JSON.stringify(body) : undefined
  }).then(res => res.json())
  .then(json => {
    if (json.success == true) return json.data;
    else return Promise.reject("API Error: " + json.message);
  })
}