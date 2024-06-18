import { Taxios } from '@simplesmiler/taxios';
import { AxiosInstance } from 'axios';

import { PetsAPI } from '~/types/generated/PetsAPI';

export type PetsAxios = AxiosInstance;

export type PetsTaxios = Taxios<PetsAPI>;

export type NonStrictTaxios = Taxios<any, false>;
