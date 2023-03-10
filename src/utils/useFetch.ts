export function useFetch(input: string, init?: RequestInit) {
  let response: Response | undefined = undefined;
  let isLoading: Boolean = true;
  let error: TypeError | undefined;

  fetch(input, init)
    .then(res => response = res)
    .catch(err => error = err)
    .finally(() => isLoading = false);

  return {response, isLoading, error};
}