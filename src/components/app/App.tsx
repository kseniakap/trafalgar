import { ThemeProvider } from '@mui/material';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import '~/assets/style/main.scss';
import { ApiProvider } from '~/components/api';
import { AppRouter } from '~/components/app';
import { ServicesProvider } from '~/components/services';
import muiTheme from '~/lib/themes/muiTheme';
import { config } from '~/lifecycle/config';

export interface AppProps {
  basePath?: string;
}

const App = ({ basePath }: AppProps) => {
  return (
    <ApiProvider petsApiBaseUrl={config.PETS_API_BASE_URL}>
      <ServicesProvider>
        <ThemeProvider theme={muiTheme}>
          <SCThemeProvider theme={muiTheme}>
            <AppRouter basePath={basePath} />
          </SCThemeProvider>
        </ThemeProvider>
      </ServicesProvider>
    </ApiProvider>
  );
};

export default App;
