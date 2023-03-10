export function useSearchParams() {
  return { 
    searchParams: new URLSearchParams(location.search)
  };
}