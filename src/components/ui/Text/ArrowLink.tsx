import Box from '@mui/material/Box/Box';
import React from 'react';
import styled from 'styled-components';

import ArrowRight from '~/assets/icons/arrow-right.svg';

interface ArrowLinkProps {
  text: string;
  onClick?: () => void;
}

export const ArrowLink = (props: ArrowLinkProps) => {
  const { text, onClick } = props;
  return (
    <TextContainer onClick={onClick}>
      <Text component={'span'} className="btn-text-M">
        {text}
      </Text>
      <img src={ArrowRight} alt="arrow-icon" />
    </TextContainer>
  );
};

const TextContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  color: #458ff6;
  :hover {
    filter: brightness(85%);
  }
  :active {
    filter: brightness(95%);
  }
`;

const Text = styled(Box)``;
