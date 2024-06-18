import React from 'react';

import { PageContainer } from '~/components/page';
import { useServices } from '~/components/services';
import { PetsAPI } from '~/types/generated/PetsAPI';

const PetsPage: React.FC = () => {
  const { petsService } = useServices();

  const [pets, setPets] = React.useState<PetsAPI.Pet[] | null>(null);

  React.useEffect(() => {
    petsService.getPetsByStatus('available').then((data) => setPets(data));
  }, [petsService, setPets]);

  return (
    <PageContainer>
      <div>Available pets:</div>
      <pre>{pets ? JSON.stringify(pets, null, 2) : 'loading...'}</pre>
    </PageContainer>
  );
};

export default PetsPage;
