import React from 'react';

import '~/assets/main.scss';
import { ApiProvider } from '~/components/api';
import { AppRouter } from '~/components/app';
import { ServicesProvider } from '~/components/services';
import { config } from '~/lifecycle/config';

export interface AppProps {
  basePath?: string;
}

const App = ({ basePath }: AppProps) => {
  return (
    <ApiProvider petsApiBaseUrl={config.PETS_API_BASE_URL}>
      <ServicesProvider>
        <AppRouter basePath={basePath} />;
      </ServicesProvider>
    </ApiProvider>
  );
};

export default App;
