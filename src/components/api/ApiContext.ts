import { AxiosInstance } from 'axios';
import React from 'react';

import { petsAxios, nonStrictApi, nonStrictAxios, petsApi } from '~/components/api/defaults';
import { NonStrictTaxios, PetsAxios, PetsTaxios } from '~/types/api';

export interface ApiContextProps {
  petsAxios: PetsAxios;
  petsApi: PetsTaxios;
  nonStrictAxios: AxiosInstance;
  nonStrictApi: NonStrictTaxios;
}

const defaultValue: ApiContextProps = {
  petsAxios,
  petsApi,
  nonStrictAxios,
  nonStrictApi,
};

export const ApiContext = React.createContext<ApiContextProps>(defaultValue);

ApiContext.displayName = 'ApiContext';
