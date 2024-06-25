import { FC } from 'react';

import { PageContainer } from '~/components/page';
import { HeaderSection } from '~/components/ui/HeaderSection/HeaderSection';

const HomePage: FC = () => {
  return (
    <PageContainer>
      <h2>Главная страница</h2>
      <HeaderSection />
    </PageContainer>
  );
};

export default HomePage;
