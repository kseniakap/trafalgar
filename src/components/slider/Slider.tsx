import { FC, ReactElement, useRef } from 'react';
import styled from 'styled-components';
import 'swiper/css';
import { Swiper, SwiperClass, SwiperSlide, SwiperProps } from 'swiper/react';

import SliderArrowBtn from './SliderArrowBtn';

interface SliderProps extends SwiperProps {
  slides: ReactElement[];
}

/**
 * - Компонент создаёт карусель на основе массива компонентов
 * - Компонент можно настроить прокидывая пропсы Swipper см: https://swiperjs.com/react#usage
 * @example
 * <Slider spaceBetween={16} loop slides={[<SomeSlideOne key={1} />,<SomeSlideThree key={2} />,<SomeSlideTwo key={3} />, ...]} />
 */
const Slider: FC<SliderProps> = (props) => {
  const swiperRef = useRef<null | SwiperClass>(null);

  const { slides } = props;

  const defaultSettings: SwiperProps = {
    spaceBetween: 16,
    loop: true,
  };

  const setSwiperRef = (swiper: SwiperClass) => (swiperRef.current = swiper);

  return (
    <>
      <Div>
        <Swiper {...defaultSettings} {...props} onSwiper={setSwiperRef}>
          {slides.map((slide) => {
            if (slide.key !== null) {
              return <SwiperSlide key={slide.key}>{slide}</SwiperSlide>;
            }
          })}
        </Swiper>
        <PrevBtn orientation="left" onClick={() => (swiperRef.current ? swiperRef.current.slidePrev() : null)} />
        <NextBtn orientation="right" onClick={() => (swiperRef.current ? swiperRef.current.slideNext() : null)} />
      </Div>
    </>
  );
};

const Div = styled.div`
  box-sizing: border-box;
  width: 100%;
  position: relative;
  padding: 0 24px;
`;

const NextBtn = styled(SliderArrowBtn)`
  position: absolute;
  top: 50%;
  right: 0;
`;

const PrevBtn = styled(SliderArrowBtn)`
  position: absolute;
  top: 50%;
  left: 0;
`;

export default Slider;
