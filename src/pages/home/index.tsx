import { FC } from 'react';

import { PageContainer } from '~/components/page';
import { About } from '~/components/ui/About/About';
import FactsBlock from '~/components/ui/FactsBlock/FactsBlock';
import { Arcticles } from '~/components/ui/Articles/Articles';
import FooterBlock from '~/components/ui/FooterBlock/FooterBlock';
import { HeaderSection } from '~/components/ui/HeaderSection/HeaderSection';
import { Prices } from '~/components/ui/Prices/Prices';
import SponsorsBlock from '~/components/ui/SponsorsBlock/SponsorsBlock';
import KnowledgeBlock from '~/components/ui/KnowledgeBlock/KnowledgeBlock';
import { QuestionsBlock } from '~/components/ui/QuestionsBlock/QuestionsBlock';
import SponsorsBlock from '~/components/ui/SponsorsBlock/SponsorsBlock';
import StartUsingBlock from '~/components/ui/StartUsingBlock';
import AppMenu from '~/components/ui/appMenu';

const HomePage: FC = () => {
  return (
    <PageContainer>
      <AppMenu />
      <HeaderSection />
      <About />
      <Arcticles />
      <FactsBlock />
      <KnowledgeBlock />
      <QuestionsBlock/>
      <Prices />
      <SponsorsBlock />
      <FooterBlock />
    </PageContainer>
  );
};

export default HomePage;
