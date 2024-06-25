import Box from '@mui/material/Box';
import styled from 'styled-components';

import ClinicSearch from '../../../assets/icons/clinicSearch.svg';
import Consultation from '../../../assets/icons/consultation.svg';
import Tests from '../../../assets/icons/tests.svg';
import { ImageCard } from '../Card/ImgCard';

const cardsInfo = [
  {
    title: 'Консультация',
    description: 'На нашем форуме вы найдете ответы на вопросы',
    icon: Consultation,
    alt: 'consultation icon',
  },
  {
    title: 'Тесты',
    description: 'Вы можете пройти тесты на нашем сайте',
    icon: Tests,
    alt: 'tests icon',
  },
  {
    title: 'Поиск клиники',
    description: 'Мы поможем найти Вам ближайшую поликлинику',
    icon: ClinicSearch,
    alt: 'clinic search icon',
  },
];
export const About = () => {
  const cards = cardsInfo.map((card, ind) => (
    <CardContainer key={ind}>
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
        <Box component={'span'} className="heading-2">
          О проекте
        </Box>
        <Box component={'span'} className="body-l">
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
  gap: 80px;
  padding: 80px;
  ${({ theme }) => theme.breakpoints.up('desktopL')} {
    justify-content: space-evenly;
  }
  ${({ theme }) => theme.breakpoints.down('desktop')} {
    flex-direction: column;
  }
  ${({ theme }) => theme.breakpoints.down('iPad')} {
    align-self: center;
    gap: 32px;
    max-width: 600px;
    padding: 48px 16px 24px 16px;
  }
`;
const Title = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${({ theme }) => theme.breakpoints.up('desktopL')} {
    width: 1000px;
  }
`;
const Cards = styled(Box)`
  display: flex;
  flex-direction: row;
  ${({ theme }) => theme.breakpoints.up('desktopL')} {
    width: 883.5px;
  }
  ${({ theme }) => theme.breakpoints.down('desktop')} {
    gap: 32px;
  }
  ${({ theme }) => theme.breakpoints.down('iPad')} {
    flex-direction: column;
  }
`;
const CardContainer = styled(Box)`
  min-width: 272px;
`;
