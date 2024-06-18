import { PetsTaxios } from '~/types/api';

export class PetsService {
  public petsApi: PetsTaxios;

  constructor(petsApi: PetsTaxios) {
    this.petsApi = petsApi;
  }

  getPetsByStatus(status?: 'available' | 'pending' | 'sold') {
    return this.petsApi.get('/pet/findByStatus', { query: { status } }).then((res) => res.data);
  }
}
