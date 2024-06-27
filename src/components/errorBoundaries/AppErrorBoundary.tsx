import { LayoutTree } from '@moxy/next-layout';
import React from 'react';

import ErrorBoundary from './ErrorBoundary';
import ErrorPage from '~/components/ErrorPage';
import DefaultLayout from '~/layouts/Default';

const AppErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundary
      fallback={(err) => (
        <LayoutTree
          Component={() => <ErrorPage statusCode={500} message={err.message} />}
          pageProps={null}
          defaultLayout={<DefaultLayout />}
        />
      )}
    >
      {children}
    </ErrorBoundary>
  );
};

export default AppErrorBoundary;
