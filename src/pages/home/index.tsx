import React from 'react';
import styled from 'styled-components';

import { PageContainer } from '~/components/page';

const HomePage: React.FC = () => {
  return (
    <PageContainer>
      <Div>Home page</Div>
    </PageContainer>
  );
};

const Div = styled.div`
  color: green;
  font-family: Roboto, sans-serif;
  text-align: center;
`;

export default HomePage;
