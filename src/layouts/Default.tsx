import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Routes } from '~/lib/routes';

const DefaultLayout: FC = ({ children }) => {
  return (
    <FullHeight>
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
      {children}
    </FullHeight>
  );
};

const FullHeight = styled.div`
  min-height: 100vh;
`;

export default DefaultLayout;
