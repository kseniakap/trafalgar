import { LayoutTree } from '@moxy/next-layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AppRoutes } from './AppRoutes';
import ErrorPage from '~/components/ErrorPage';
import { AppErrorBoundary } from '~/components/errorBoundaries';
import DefaultLayout from '~/layouts/Default';

interface AppRouterProps {
  appRoutes?: typeof AppRoutes;
  basePath?: string;
}

const AppRouter = ({ appRoutes = AppRoutes, basePath = '/' }: AppRouterProps) => {
  return (
    <Router basename={basePath}>
      <Switch>
        {appRoutes.map((appRoute) => (
          <Route exact={appRoute.exact} path={appRoute.path} key={appRoute.path}>
            <AppErrorBoundary>
              <LayoutTree Component={appRoute.page} pageProps={null} defaultLayout={<DefaultLayout />} />
            </AppErrorBoundary>
          </Route>
        ))}
        <Route path="*">
          <AppErrorBoundary>
            <LayoutTree
              Component={() => <ErrorPage statusCode={404} />}
              pageProps={null}
              defaultLayout={<DefaultLayout />}
            />
          </AppErrorBoundary>
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
