import React from 'react';
import styled from 'styled-components';

import { PageContainer } from '~/components/page';

const TestPage: React.FC = () => {
  return (
    <PageContainer>
      <Div>Test page</Div>
    </PageContainer>
  );
};

const Div = styled.div`
  color: red;
`;

export default TestPage;
