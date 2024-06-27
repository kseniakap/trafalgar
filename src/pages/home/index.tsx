import { FC } from 'react';
import { Link } from 'react-router-dom';

import { PageContainer } from '~/components/page';
import { About } from '~/components/ui/About/About';
import FooterBlock from '~/components/ui/FooterBlock/FooterBlock';
import { HeaderSection } from '~/components/ui/HeaderSection/HeaderSection';
import { Prices } from '~/components/ui/Prices/Prices';
import SponsorsBlock from '~/components/ui/SponsorsBlock/SponsorsBlock';
import { Routes } from '~/lib/routes';

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
      <Prices />
      <SponsorsBlock />
      <FooterBlock />
    </PageContainer>
  );
};

export default HomePage;
