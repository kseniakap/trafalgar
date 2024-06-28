import { Box, Container } from '@mui/material';
import { FC, useRef } from 'react';
import styled from 'styled-components';
import { SwiperProps } from 'swiper/react';

import Slider from '~/components/slider/Slider';
import FactCard from '~/components/ui/Card/FactCard';
import { factsData } from '~/components/ui/FactsBlock/factsData';
import { Breakpoints } from '~/lib/breakpoints/breakpoints';

const FactsBlock: FC = () => {
  const slideId = useRef(1);

  const sliderBreakpoints: SwiperProps['breakpoints'] = {
    [Breakpoints.iPad]: {
      slidesPerView: 2,
    },
  };

  const slides = factsData.map((fact) => {
    const slide = <FactCard key={slideId.current} data={fact} />;
    slideId.current++;
    return slide;
  });

  return (
    <>
      <Block>
        <SliderContainer maxWidth="desktop" $breakpoint={Breakpoints.iPad}>
          <FactsSlider breakpoints={sliderBreakpoints} slidesPerView={1} slides={slides} />
        </SliderContainer>
      </Block>
    </>
  );
};

const Block = styled(Box)`
  background: linear-gradient(180deg, rgb(103, 195, 243), rgb(90, 152, 242) 100%);
`;

const SliderContainer = styled(Container)<{ $breakpoint: number }>`
  padding: 80px 80px !important;
  @media screen and (max-width: ${(props) => props.$breakpoint + 'px'}) {
    padding: 80px 24px !important;
  }
`;

const FactsSlider = styled(Slider)`
  width: 100%;
  max-width: 1280px;
`;

export default FactsBlock;
