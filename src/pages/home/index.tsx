import { FC } from 'react';

import AppMenu from '~/components/menu';
import { PageContainer } from '~/components/page';
import { About } from '~/components/ui/About/About';
import { HeaderSection } from '~/components/ui/HeaderSection/HeaderSection';

const HomePage: FC = () => {
  return (
    <PageContainer>
      <AppMenu />
      <HeaderSection />
      <About />
    </PageContainer>
  );
};

export default HomePage;
