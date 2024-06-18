import React from 'react';
import styled from 'styled-components';

import { MainLink } from '~/components/navigation';
import { Routes } from '~/lib/routes';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <FullHeight>
      <div>
        <div>
          <MainLink to={Routes.HOME}>Главная</MainLink>
        </div>
        <div>
          <MainLink to={Routes.LOGIN}>Вход</MainLink>
        </div>
        <div>
          <MainLink to={Routes.REGISTER}>Регистрация</MainLink>
        </div>
      </div>
      {children}
    </FullHeight>
  );
};

const FullHeight = styled.div`
  min-height: 100vh;
`;

export default DefaultLayout;
