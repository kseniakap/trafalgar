import { Taxios } from '@simplesmiler/taxios';
import Axios from 'axios';
import React from 'react';

import { ApiContext, ApiContextProps } from './ApiContext';
import { PetsAPI } from '~/types/generated/PetsAPI';

export interface ApiProviderProps {
  petsApiBaseUrl?: string;
}

const ApiProvider: React.FC<ApiProviderProps> = ({ children, petsApiBaseUrl }) => {
  const petsAxios = React.useMemo(
    () =>
      Axios.create({
        // @NOTE: Put base config here
        baseURL: petsApiBaseUrl,
        withCredentials: false,
      }),
    [petsApiBaseUrl],
  );

  const petsApi = React.useMemo(() => new Taxios<PetsAPI>(petsAxios), [petsAxios]);

  const nonStrictAxios = React.useMemo(
    () =>
      Axios.create({
        // @NOTE: Put base config here
        baseURL: '/',
        withCredentials: false,
      }),
    [],
  );

  const nonStrictApi = React.useMemo(() => new Taxios<any, false>(nonStrictAxios), [nonStrictAxios]);

  const contextValue = React.useMemo<ApiContextProps>(
    () => ({
      petsAxios,
      petsApi,
      nonStrictAxios,
      nonStrictApi,
    }),
    [petsAxios, petsApi, nonStrictAxios, nonStrictApi],
  );

  return <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>;
};

export default ApiProvider;
