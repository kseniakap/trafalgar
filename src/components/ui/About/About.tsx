import Box from '@mui/material/Box';
import styled from 'styled-components';

import { ImageCard } from '../Card/ImgCard';
import { cardsInfo } from '~/const/cardsInfo';

export const About = () => {
  const cards = cardsInfo.map((card, index) => (
    <CardContainer key={index}>
      <ImageCard
        title={card.title}
        description={card.description}
        image={<img src={card.icon} alt={card.alt} />}
        linkText="Узнать больше"
        withIcon
      />
    </CardContainer>
  ));
  return (
    <AboutContainer>
      <Title>
        <Box component="span" className="heading-2">
          О проекте
        </Box>
        <Box component="span" className="body-l">
          Наш проект создан группой врачей для популяризации современных медицинских знаний их доступности для всех, кто
          в этом заинтересован.
        </Box>
      </Title>
      <Cards>{cards}</Cards>
    </AboutContainer>
  );
};

const AboutContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(10)};
  padding: ${({ theme }) => theme.spacing(10)};

  ${({ theme }) => theme.breakpoints.up('desktopL')} {
    justify-content: space-evenly;
  }

  ${({ theme }) => theme.breakpoints.down('desktop')} {
    flex-direction: column;
  }

  ${({ theme }) => theme.breakpoints.down('iPad')} {
    align-self: center;
    gap: ${({ theme }) => theme.spacing(4)};
    max-width: ${({ theme }) => theme.spacing(79)};
    padding: ${({ theme }) => `${theme.spacing(6)} ${theme.spacing(0)} ${theme.spacing(3)} ${theme.spacing(0)}`};
  }
`;

const Title = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};

  ${({ theme }) => theme.breakpoints.up('desktopL')} {
    width: ${({ theme }) => theme.spacing(125)};
  }

  ${({ theme }) => theme.breakpoints.down('iPad')} {
    padding: ${({ theme }) => `${theme.spacing(0)} ${theme.spacing(2)}`};
  }
`;

const Cards = styled(Box)`
  display: flex;
  flex-direction: row;

  ${({ theme }) => theme.breakpoints.up('desktopL')} {
    width: 883.5px;
  }

  ${({ theme }) => theme.breakpoints.down('desktop')} {
    gap: ${({ theme }) => theme.spacing(4)};
  }

  ${({ theme }) => theme.breakpoints.down('iPad')} {
    flex-direction: column;
  }
`;

const CardContainer = styled(Box)`
  min-width: ${({ theme }) => theme.spacing(34)};
`;
