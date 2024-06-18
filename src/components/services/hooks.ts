import React from 'react';

import { ServicesContext } from '~/components/services/ServicesContext';

export function useServices() {
  return React.useContext(ServicesContext);
}
