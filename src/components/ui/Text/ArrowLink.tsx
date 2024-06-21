import Box from '@mui/material/Box';
import { FC } from 'react';
import styled from 'styled-components';

import ArrowRight from '~/assets/icons/arrow-right.svg';

interface ArrowLinkProps {
  text: string;
  onClick?: () => void;
}

export const ArrowLink: FC<ArrowLinkProps> = (props: ArrowLinkProps) => {
  const { text, onClick } = props;
  return (
    <TextContainer onClick={onClick}>
      <span className="btn-text-m">{text}</span>
      <img src={ArrowRight} alt="arrow-icon" />
    </TextContainer>
  );
};

const TextContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  width: fit-content;
  color: #458ff6;
  cursor: pointer;
  :hover {
    filter: brightness(85%);
  }
  :active {
    filter: brightness(95%);
  }
`;
