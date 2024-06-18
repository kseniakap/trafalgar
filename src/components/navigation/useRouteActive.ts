import { useRouteMatch, matchPath } from 'react-router-dom';

/**
 * Test provided path match to current route
 * @param path
 * @param exact
 * @see https://github.com/ReactTraining/react-router/blob/de785e764559fde1b595e919d6b3aea6ef86e5eb/packages/react-router-dom/modules/NavLink.js#L56
 */
export function useRouteActive(path: string, exact = false) {
  const routeMatch = useRouteMatch();

  const escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');

  const match = escapedPath
    ? matchPath(routeMatch.path, {
        path: escapedPath,
        exact,
        sensitive: false,
        strict: false,
      })
    : null;

  const isActive = !!match;

  return isActive;
}
