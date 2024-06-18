// polyfill only stable `core-js` features - ES and web standards: // Support IE11
import 'core-js/stable';
import React from 'react';
import ReactDOM from 'react-dom';

import { App } from '~/components/app';
import { config } from '~/lifecycle/config';

ReactDOM.render(
  <React.StrictMode>
    <App basePath={config.APP_BASE_URL} />
  </React.StrictMode>,
  document.getElementById('root'),
);
