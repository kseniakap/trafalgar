import Box from '@mui/material/Box';
import styled from 'styled-components';

import Illustration from '../../../assets/img/header-illustration.png';
import { Button, ButtonSize, ButtonStyle, ButtonTextSize } from '../Button/Button';
import useIsMobile from '~/hooks/useIsMobile';

export const HeaderSection = () => {
  const isMobile = useIsMobile();
  return (
    <HeaderContainer>
      <LeftContainer>
        <Title>
          <TitleText className={isMobile ? 'heading-4' : 'heading-1'}>ДОКАЗАТЕЛЬНАЯ МЕДИЦИНА ДЛЯ ВСЕХ</TitleText>
          <TitleText className={isMobile ? 'body-m' : 'body-l'}>
            Мы еще очень молоды, но достаточно амбициозны и планируем каждого случайного гостя нашего сайта превратить в
            его постоянного пользователя.
          </TitleText>
        </Title>
        <Buttons>
          <Button
            text="Войти как врач"
            style={ButtonStyle.Contained}
            size={isMobile ? ButtonSize.Small : ButtonSize.Large}
            textSize={isMobile ? ButtonTextSize.Small : ButtonTextSize.Large}
          />
          <Button
            text="Подробнее"
            style={ButtonStyle.Outlined}
            size={isMobile ? ButtonSize.Small : ButtonSize.Large}
            textSize={isMobile ? ButtonTextSize.Small : ButtonTextSize.Large}
          />
        </Buttons>
      </LeftContainer>
      <RightContainer>
        <Image src={Illustration} alt={'header illustration'} />
      </RightContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 80px;
  justify-content: center;
  width: 100%;
  padding: 80px;
  background: #f2f4f8;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding: 48px 16px 24px 16px;
  }
  @media (min-width: 1440px) {
    justify-content: space-around;
  }
`;

const LeftContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 64px;
  max-width: 600px;
  padding: 80px 0;
  @media (max-width: 1024px) {
    gap: 48px;
    padding: 0;
  }
  @media (min-width: 1440px) {
    max-width: none;
  }
`;

const Title = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 48px;
  @media (max-width: 768px) {
    gap: 24px;
  }
`;

const Buttons = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const RightContainer = styled(Box)`
  align-content: center;
  max-width: 600px;
  padding-right: 14px;
  @media (max-width: 1024px) {
    padding-right: 0;
  }
  @media (max-width: 768px) {
    padding-top: 20px;
  }
  @media (min-width: 1440px) {
    max-width: none;
  }
`;

const Image = styled.img`
  width: 100%;
  @media (max-width: 1024px) {
    max-width: 360px;
  }
`;
const TitleText = styled.span``;
