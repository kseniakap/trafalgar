import { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';

type OrientationType = 'left' | 'right';

interface SliderArrowBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  orientation: OrientationType;
}

const SliderArrowBtn: FC<SliderArrowBtnProps> = (props) => {
  const { orientation } = props;

  return (
    <>
      <Btn $orientation={orientation ?? 'right'} {...props}>
        <svg width="7.644531" height="13.289429" viewBox="0 0 7.64453 13.2894" fill="none">
          <defs />
          <path
            id="Vector"
            d="M5.23 6.64L0.28 1.69C0.09 1.5 -0.01 1.25 0 0.99C0 0.72 0.1 0.47 0.29 0.29C0.47 0.1 0.72 0 0.99 3.05e-5C1.25 -0.01 1.5 0.09 1.69 0.28L7.35 5.93C7.53 6.12 7.64 6.37 7.64 6.64C7.64 6.9 7.53 7.16 7.35 7.35L1.69 13C1.5 13.19 1.25 13.29 0.99 13.28C0.72 13.28 0.47 13.18 0.29 12.99C0.1 12.81 0 12.56 0 12.29C-0.01 12.03 0.09 11.78 0.28 11.59L5.23 6.64Z"
            fill="currentColor"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
        </svg>
      </Btn>
    </>
  );
};

export default SliderArrowBtn;

const Btn = styled.button<{ $orientation: OrientationType }>`
  transform: ${(props) => (props.$orientation === 'left' ? 'scaleX(-1)' : 'none')};
  background-color: transparent;
  border: none;
  padding: 0;
  transition: all 100ms ease-in;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;
