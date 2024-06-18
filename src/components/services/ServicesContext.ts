import React from 'react';

import { petsService } from './defaults';
import { PetsService } from '~/lib/pets/PetsService';

export interface ServicesContextProps {
  petsService: PetsService;
}

const defaultValue: ServicesContextProps = {
  petsService,
};

export const ServicesContext = React.createContext<ServicesContextProps>(defaultValue);

ServicesContext.displayName = 'ServicesContext';
