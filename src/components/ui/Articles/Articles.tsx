import Box from '@mui/material/Box';
import styled from 'styled-components';

import { Button, ButtonSize, ButtonStyle, ButtonTextSize } from '../Button/Button';
import { ImageCard } from '../Card/ImgCard';
import { arcticlesList } from './arcticlesData';

export const Arcticles = () => {
  const arcticles = arcticlesList.map((arcticle, index: number) => (
    <CardContainer key={index} component="li">
      <ImageCard
        title={arcticle.title}
        description={arcticle.description}
        image={
          !arcticle.isLoading && arcticle.img && arcticle.alt ? <Image src={arcticle.img} alt={arcticle.alt} /> : null
        }
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
      <ArcticlesList display="grid" component="ul">
        {arcticles}
      </ArcticlesList>
      <Button style={ButtonStyle.Contained} text="Все статьи" size={ButtonSize.Large} textSize={ButtonTextSize.Large} />
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
  list-style: none;

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
