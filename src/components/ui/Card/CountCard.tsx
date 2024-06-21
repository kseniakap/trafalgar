import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FC, ReactElement } from 'react';
import styled from 'styled-components';

interface CountCardProps {
  count: string;
  description: string;
  icon: ReactElement;
}

export const CountCard: FC<CountCardProps> = (props: CountCardProps) => {
  const { count, description, icon } = props;
  return (
    <NumberCard>
      {icon}
      <Content>
        <div>
          <span className="heading-4">{count}</span>
        </div>
        <div>
          <span className="body-m">{description}</span>
        </div>
      </Content>
    </NumberCard>
  );
};

const NumberCard = styled(Card)`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 16px !important;
  border: 1px solid #dde1e6;
  border-radius: 8px !important;
  box-shadow: none !important;
`;

const Content = styled(CardContent)`
  padding: 0 !important;
`;
