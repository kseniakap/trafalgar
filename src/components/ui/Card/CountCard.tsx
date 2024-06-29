import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FC } from 'react';
import styled from 'styled-components';

import { COOL_GRAY_60 } from '~/assets/style/colors';

interface CountCardProps {
  count: string;
  description: string;
  icon: string;
}

export const CountCard: FC<CountCardProps> = (props: CountCardProps) => {
  const { count, description, icon } = props;
  return (
    <NumberCard>
      <img src={icon} alt={description} />
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
  padding: ${({ theme }) => theme.spacing(2)};
  border: 1px solid #dde1e6;
  border-radius: 8px !important;
  box-shadow: none !important;

  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(2)};

  .body-m {
    font-size: 16px;
    padding-top: 0;
  }

  .heading-4 {
    font-size: 24px;
  }

  ${({ theme }) => theme.breakpoints.up('desktopL')} {
    gap: ${({ theme }) => theme.spacing(4)};

    img {
      width: 74px;
      height: 74px;
    }

    span {
      display: inline-block;
    }

    .body-m {
      color: ${COOL_GRAY_60};
      font-size: 24px;
      padding-top: ${({ theme }) => theme.spacing(2)};
    }

    .heading-4 {
      font-size: 36px;
    }
  }

  ${({ theme }) => theme.breakpoints.down('tablet')} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: ${({ theme }) => theme.spacing(2, 1)};

    .body-m {
      font-size: 14px;
    }
  }
`;

const Content = styled(CardContent)`
  padding: 0 !important;
`;
