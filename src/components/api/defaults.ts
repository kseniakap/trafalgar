import { Taxios } from '@simplesmiler/taxios';
import Axios from 'axios';

import { config } from '~/lifecycle/config';
import { PetsAPI } from '~/types/generated/PetsAPI';

export const petsAxios = Axios.create({
  // @NOTE: Put base config here
  baseURL: config.PETS_API_BASE_URL,
  withCredentials: false,
});

export const nonStrictAxios = Axios.create({
  // @NOTE: Put base config here
  baseURL: '/',
  withCredentials: false,
});

export const petsApi = new Taxios<PetsAPI>(petsAxios);

export const nonStrictApi = new Taxios<any, false>(nonStrictAxios);
