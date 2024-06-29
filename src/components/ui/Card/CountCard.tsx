import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FC } from 'react';
import styled from 'styled-components';

import { COOL_GRAY_20, COOL_GRAY_60 } from '~/assets/style/colors';

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
        <span className="heading-4">{count}</span>
        <span className="body-m">{description}</span>
      </Content>
    </NumberCard>
  );
};

const NumberCard = styled(Card)`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${COOL_GRAY_20};
  border-radius: 8px !important;
  box-shadow: none !important;

  .MuiCardContent-root {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  span {
    display: block;
  }

  .heading-4 {
    font-size: 38px;
    padding-bottom: 10px;
  }

  .body-m {
    color: ${COOL_GRAY_60};
    font-size: 22px;
  }

  img {
    width: 76px;
    height: 76px;
  }

  ${({ theme }) => theme.breakpoints.down('desktopL')} {
    .heading-4 {
      font-size: 24px;
      padding-bottom: 0;
    }

    .body-m {
      font-size: 16px;
    }

    img {
      width: 48px;
      height: 48px;
    }
  }

  ${({ theme }) => theme.breakpoints.down('desktop')} {
    gap: ${({ theme }) => theme.spacing(2)};
  }

  ${({ theme }) => theme.breakpoints.down('tablet')} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: ${({ theme }) => theme.spacing(2, 1)};

    .body-m {
      font-size: 14px;
    }

    span {
      text-align: center;
    }
  }
`;

const Content = styled(CardContent)`
  padding: 0 !important;
`;