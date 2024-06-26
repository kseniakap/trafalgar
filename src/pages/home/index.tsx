import { FC } from 'react';

import { PageContainer } from '~/components/page';
import { About } from '~/components/ui/About/About';
import { Arcticles } from '~/components/ui/Articles/Articles';
import { HeaderSection } from '~/components/ui/HeaderSection/HeaderSection';

const HomePage: FC = () => {
  return (
    <PageContainer>
      <h2>Главная страница</h2>
      <HeaderSection />
      <About />
      <Arcticles />
    </PageContainer>
  );
};

export default HomePage;
