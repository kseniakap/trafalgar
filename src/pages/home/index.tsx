import { FC } from 'react';

import { PageContainer } from '~/components/page';
import FooterBlock from '~/components/ui/FooterBlock';
import { HeaderSection } from '~/components/ui/HeaderSection/HeaderSection';
import SponsorsBlock from '~/components/ui/SponsorsBlock';

const HomePage: FC = () => {
  return (
    <PageContainer>
      <h2>Главная страница</h2>
      <HeaderSection />
      <SponsorsBlock />
      <FooterBlock />
    </PageContainer>
  );
};

export default HomePage;
