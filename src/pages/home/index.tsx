import { FC } from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from '~/components/page';
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
    </PageContainer>
  );
};

export default HomePage;
