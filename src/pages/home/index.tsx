import { FC } from 'react';

import { PageContainer } from '~/components/page';
import { About } from '~/components/ui/About/About';
import { Arcticles } from '~/components/ui/Articles/Articles';
import FactsBlock from '~/components/ui/FactsBlock/FactsBlock';
import FooterBlock from '~/components/ui/FooterBlock/FooterBlock';
import { HeaderSection } from '~/components/ui/HeaderSection/HeaderSection';
import KnowledgeBlock from '~/components/ui/KnowledgeBlock/KnowledgeBlock';
import { Prices } from '~/components/ui/Prices/Prices';
import { QuestionsBlock } from '~/components/ui/QuestionsBlock/QuestionsBlock';
import SponsorsBlock from '~/components/ui/SponsorsBlock/SponsorsBlock';
import StartUsingBlock from '~/components/ui/StartUsingBlock';
import AppMenu from '~/components/ui/appMenu';

const HomePage: FC = () => {
  return (
    <PageContainer>
      <AppMenu />
      <a id="Главная">
        <HeaderSection />
      </a>
      <a id="О проекте">
        <About />
      </a>
      <a id="Статьи">
        <Arcticles />
      </a>
      <a id="Отзывы">
        <FactsBlock />
      </a>
      <a id="Знания">
        <KnowledgeBlock />
      </a>
      <a id="Вопросы">
        <QuestionsBlock />
      </a>
      <a id="Цены">
        <Prices />
      </a>
      <a id="Оставить заявку">
        <StartUsingBlock />
      </a>
      <a id="Спонсоры">
        <SponsorsBlock />
      </a>
      <FooterBlock />
    </PageContainer>
  );
};

export default HomePage;
