import { FC } from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from '~/components/page';
import { Routes } from '~/lib/routes';
import FooterBlock from '~/components/ui/FooterBlock/FooterBlock';
import { About } from '~/components/ui/About/About';
import { HeaderSection } from '~/components/ui/HeaderSection/HeaderSection';
import SponsorsBlock from '~/components/ui/SponsorsBlock/SponsorsBlock';
import { QuestionsBlock } from '~/components/ui/QuestionsBlock/QuestionsBlock';

const HomePage: FC = () => {
  return (
    <PageContainer>
      <div>
        <div>
          <Link to={Routes.HOME}>Главная</Link>
        </div>
        <div>
          <Link to={Routes.LOGIN}>Вход</Link>
        </div>
        <div>
          <Link to={Routes.REGISTER}>Регистрация</Link>
        </div>
      </div>
      <h2>Главная страница</h2>
      <HeaderSection />
      <About />
      <QuestionsBlock/>
      <SponsorsBlock />
      <FooterBlock />
    </PageContainer>
  );
};

export default HomePage;
