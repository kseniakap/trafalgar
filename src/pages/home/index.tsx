import { FC } from 'react';

import AppMenu from '~/components/menu';
import { PageContainer } from '~/components/page';
import { About } from '~/components/ui/About/About';
import FooterBlock from '~/components/ui/FooterBlock/FooterBlock';
import { HeaderSection } from '~/components/ui/HeaderSection/HeaderSection';
import SponsorsBlock from '~/components/ui/SponsorsBlock/SponsorsBlock';

const HomePage: FC = () => {
  return (
    <PageContainer>
      <AppMenu />
      <HeaderSection />
      <About />
      <SponsorsBlock />
      <FooterBlock />
    </PageContainer>
  );
};

export default HomePage;
