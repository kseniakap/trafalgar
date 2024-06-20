import Box from '@mui/material/Box/Box';
import Card from '@mui/material/Card/Card';
import CardContent from '@mui/material/CardContent/CardContent';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface CountCardProps {
  count: string;
  description: string;
  icon: ReactElement;
}

export const CountCard = (props: CountCardProps) => {
  const { count, description, icon } = props;
  return (
    <NumberCard>
      {icon}
      <Content>
        <Title className="heading-4">{count}</Title>
        <Description className="body-M">{description}</Description>
      </Content>
    </NumberCard>
  );
};

const NumberCard = styled(Card)`
  border: 1px solid #dde1e6;
  box-shadow: none !important;
  border-radius: 8px !important;
  display: flex;
  flex-direction: row;
  padding: 16px !important;
  gap: 8px;
`;

const Content = styled(CardContent)`
  padding: 0 !important;
`;

const Title = styled(Box)``;

const Description = styled(Box)``;
