import { useNavigate, useSearchParams } from "react-router-dom";

export function useNavigateWithParams(
  withParamsModifier?: (params: URLSearchParams) => URLSearchParams
): (path: string) => void {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  return (path: string) => {
    const newSearchParams = withParamsModifier?.(searchParams) ?? searchParams;
    navigate({ pathname: path, search: newSearchParams.toString() });
  };
}
