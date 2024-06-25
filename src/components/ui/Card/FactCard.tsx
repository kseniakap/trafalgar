import { Card, CardContent, Typography } from '@mui/material';
import { FC } from 'react';
import styled from 'styled-components';

import avatarPlaceholder from '~/assets/img/avatar/avatarPlacholder.png';
import { Breakpoints } from '~/lib/breakpoints/breakpoints';

interface FactCardProps {
  data: {
    author: string;
    job: string;
    text: string;
    company: string;
    companyLogo: string;
    avatar?: string;
  };
}

const FactCard: FC<FactCardProps> = ({ data }) => {
  return (
    <>
      <CardContainer $breakpoint={Breakpoints.tablet}>
        <Content sx={{ padding: '0' }}>
          <LogoImg src={data.companyLogo} alt={data.company} />
          <Text color="coolGray.coolGray-90">{data.text}</Text>
          <Person>
            <AvatarImg src={data.avatar ?? avatarPlaceholder} alt={data.author} />
            <div>
              <p className="heading-4">{data.author}</p>
              <p className="body-l">{data.job}</p>
            </div>
          </Person>
        </Content>
      </CardContainer>
    </>
  );
};

const CardContainer = styled(Card)<{ $breakpoint: number }>`
  height: 350px;
  border: 1px solid rgb(221, 225, 230);
  border-radius: 8px !important;

  @media screen and (max-width: ${(props) => props.$breakpoint}px) {
    height: 425px;
  }
`;

const Content = styled(CardContent)`
  height: 100% !important;
  padding: 24px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const LogoImg = styled.img`
  max-width: 165px;
  height: 64px;
`;

const Text = styled(Typography)`
  text-align: center;
  font-size: 18px !important;
  line-height: 140% !important;
  letter-spacing: 0 !important;

  @media screen and (max-width: 392px) {
    line-height: 110% !important;
  }
`;

const AvatarImg = styled.img`
  width: 48px;
  height: 48px;
`;

const Person = styled.div`
  text-align: center;

  & div {
    padding-top: 16px;
  }

  & div p {
    text-align: center;
  }
`;

export default FactCard;
