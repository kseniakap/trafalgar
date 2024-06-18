import React from 'react';

import { ApiContext } from '~/components/api';

export function useApi() {
  return React.useContext(ApiContext);
}
