import { FC } from 'react';

import { PageContainer } from '~/components/page';
import { About } from '~/components/ui/About/About';
import { Arcticles } from '~/components/ui/Articles/Articles';
import FooterBlock from '~/components/ui/FooterBlock/FooterBlock';
import { HeaderSection } from '~/components/ui/HeaderSection/HeaderSection';
import { QuestionsBlock } from '~/components/ui/QuestionsBlock/QuestionsBlock';
import SponsorsBlock from '~/components/ui/SponsorsBlock/SponsorsBlock';
import AppMenu from '~/components/ui/appMenu';

const HomePage: FC = () => {
  return (
    <PageContainer>
      <AppMenu />
      <HeaderSection />
      <About />
      <Arcticles />
      <QuestionsBlock />
      <SponsorsBlock />
      <FooterBlock />
    </PageContainer>
  );
};

export default HomePage;
