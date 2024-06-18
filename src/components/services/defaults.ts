import { petsApi } from '~/components/api/defaults';
import { PetsService } from '~/lib/pets/PetsService';

export const petsService = new PetsService(petsApi);
