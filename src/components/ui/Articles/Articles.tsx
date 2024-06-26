import Box from '@mui/material/Box';
import styled from 'styled-components';

import { ImageCard } from '../Card/ImgCard';
import Arcticle1 from '~/assets/img/arcticles/arcticle1.png';
import Arcticle2 from '~/assets/img/arcticles/arcticle2.png';
import Arcticle3 from '~/assets/img/arcticles/arcticle3.png';

const arcticlesList = [
  {
    title: 'Головная боль',
    description: 'Врач-невролог из Москвы, Иванов Иван Иванович, отвечает на частые вопросы касающиеся проблемы ...',
    img: Arcticle1,
    alt: 'Headache arcticle',
  },
  {
    title: 'Мигрень',
    description: 'Информация для пациентов. Мигрень. Симптомы, диагностика, лечение, профилактика',
    image: null,
    isLoading: true,
  },
  {
    title: 'Доказательная медицина',
    description: 'Читая статьи, и получая консультации на нашем сайте, вы часто будете встречаться...',
    img: Arcticle2,
    alt: 'Evidence-based medicine arcticle',
  },
  {
    title: 'Антидепрессанты',
    description: 'Как показало исследование, антидепрессанты, особенно относящиеся к классе селектив...',
    img: Arcticle3,
    alt: 'Antidepressants arcticle',
  },
];
export const Arcticles = () => {
  const arcticles = arcticlesList.map((arcticle, index) => (
    <CardContainer key={index}>
      <ImageCard
        key={index}
        title={arcticle.title}
        description={arcticle.description}
        image={!arcticle.isLoading ? <Image src={arcticle.img} alt={arcticle.alt} /> : null}
        linkText="Подробнее"
      />
    </CardContainer>
  ));
  return (
    <ArcticlesContainer>
      <Title>
        <TitleText component="span" className="caption">
          Статьи
        </TitleText>
        <Description component="span">
          Статьи для врачей, пациентов и их родственников, а также научно-популярные доклады о прорывах в медицине
        </Description>
      </Title>
      <ArcticlesList display="grid">{arcticles}</ArcticlesList>
    </ArcticlesContainer>
  );
};

const ArcticlesContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(8)};
  padding: ${({ theme }) => theme.spacing(10)};

  ${({ theme }) => theme.breakpoints.down('iPad')} {
    gap: ${({ theme }) => theme.spacing(4)};
    padding: ${({ theme }) => `${theme.spacing(6)} ${theme.spacing(2)} ${theme.spacing(3)} ${theme.spacing(2)}`};
  }
`;
const Title = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;
const TitleText = styled(Box)`
  color: #001d6c;
`;

const ArcticlesList = styled(Box)`
  width: 100%;
  column-gap: ${({ theme }) => theme.spacing(2)};
  justify-content: center;
  grid-auto-flow: column;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  width: auto;

  ${({ theme }) => theme.breakpoints.up('desktopL')} {
    column-gap: ${({ theme }) => theme.spacing(8)};
  }

  ${({ theme }) => theme.breakpoints.down('desktop')} {
    grid-template-rows: 1fr 1fr;
    grid-auto-columns: 1fr;
    gap: ${({ theme }) => theme.spacing(4)};
    max-width: ${({ theme }) => theme.spacing(125)};
  }

  ${({ theme }) => theme.breakpoints.down('iPad')} {
    max-width: ${({ theme }) => theme.spacing(79)};
  }

  ${({ theme }) => theme.breakpoints.down('tablet')} {
    gap: ${({ theme }) => theme.spacing(1)};
  }
`;
const CardContainer = styled(Box)`
  ${({ theme }) => theme.breakpoints.up('desktopL')} {
    max-width: ${({ theme }) => theme.spacing(67)};
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Description = styled(Box)`
  font-size: 42px;
  font-weight: 700;
  line-height: 46.2px;
  text-align: center;
  ${({ theme }) => theme.breakpoints.down('tablet')} {
    font-size: 24px;
    line-height: 26.4px;
  }
`;
