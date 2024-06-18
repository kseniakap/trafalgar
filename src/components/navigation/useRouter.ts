import React from 'react';
import { ExtractRouteParams, RouteProps } from 'react-router';
import { useLocation, useRouteMatch, useHistory, useParams } from 'react-router-dom';

function useQuery(search: string) {
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

/**
 * Stringify object type values
 * @example { val: string | number | boolean } -> { val: string }
 */
type StringifyTypeValues<T extends Partial<Record<string, string | number | boolean>>> = Record<keyof T, string>;

interface UseRouterProps<Route extends string> {
  matchRoute?: Route | Route[] | RouteProps;
}

/**
 * Router info
 * @param matchRoute - expected route to match
 */
function useRouter<Route extends string>({ matchRoute }: UseRouterProps<Route> = {}) {
  const location = useLocation();
  const routeMatch = matchRoute
    ? // eslint-disable-next-line react-hooks/rules-of-hooks -- call same hook, skip eslint error
      useRouteMatch<StringifyTypeValues<ExtractRouteParams<Route>>>(matchRoute)
    : // eslint-disable-next-line react-hooks/rules-of-hooks -- call same hook, skip eslint error
      useRouteMatch<StringifyTypeValues<ExtractRouteParams<Route>>>();
  const history = useHistory();
  const params = useParams<StringifyTypeValues<ExtractRouteParams<Route>>>();
  const query = useQuery(location.search);

  const router = React.useMemo(
    () => ({
      location,
      routeMatch,
      history,
      params,
      query,
    }),
    [location, routeMatch, history, params, query],
  );

  return router;
}

export { useRouter };
