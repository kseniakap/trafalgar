import { FC } from 'react';

import AppMenu from '~/components/menu';
import { PageContainer } from '~/components/page';
import { About } from '~/components/ui/About/About';
import { Arcticles } from '~/components/ui/Articles/Articles';
import FooterBlock from '~/components/ui/FooterBlock/FooterBlock';
import { HeaderSection } from '~/components/ui/HeaderSection/HeaderSection';
import { Prices } from '~/components/ui/Prices/Prices';
import SponsorsBlock from '~/components/ui/SponsorsBlock/SponsorsBlock';

const HomePage: FC = () => {
  return (
    <PageContainer>
      <AppMenu />
      <HeaderSection />
      <About />
      <Arcticles />
      <Prices />
      <SponsorsBlock />
      <FooterBlock />
    </PageContainer>
  );
};

export default HomePage;
