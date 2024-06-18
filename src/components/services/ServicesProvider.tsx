import React from 'react';

import { ServicesContext, ServicesContextProps } from './ServicesContext';
import { useApi } from '~/components/api';
import { PetsService } from '~/lib/pets/PetsService';

export type ServicesProviderProps = Partial<ServicesContextProps>;

/**
 * Провайдер всех используемых сервисов (Injectable services)
 * @param children
 * @param props
 * @constructor
 * @see https://medium.com/the-guild/injectable-services-in-react-de0136b6d476
 */
const ServicesProvider: React.FC<ServicesProviderProps | undefined> = ({ children, ...props }) => {
  const { petsApi } = useApi();

  const petsService = React.useMemo(() => props.petsService || new PetsService(petsApi), [petsApi, props.petsService]);

  const contextValue: ServicesContextProps = React.useMemo(
    () => ({
      petsService,
    }),
    [petsService],
  );

  return <ServicesContext.Provider value={contextValue}>{children}</ServicesContext.Provider>;
};

export default ServicesProvider;
