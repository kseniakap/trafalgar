import Box from '@mui/material/Box/Box';
import Card from '@mui/material/Card/Card';
import CardContent from '@mui/material/CardContent/CardContent';
import React, { useState } from 'react';
import styled from 'styled-components';

import Minus from '~/assets/icons/minus.svg';
import Plus from '~/assets/icons/plus.svg';

interface DropDownCardProps {
  title: string;
  description: string;
}

export const DropDownCard = (props: DropDownCardProps) => {
  const { title, description } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropCard>
      <Content>
        <Title className="heading-5">
          {title}
          {isOpen ? (
            <Icon>
              <img src={Minus} onClick={() => setIsOpen(false)} />
            </Icon>
          ) : (
            <Icon>
              <img src={Plus} onClick={() => setIsOpen(true)} />
            </Icon>
          )}
        </Title>
        {isOpen && <Description className="body-M">{description}</Description>}
      </Content>
    </DropCard>
  );
};

const DropCard = styled(Card)`
  border: 1px solid #dde1e6;
  box-shadow: none !important;
  border-radius: 8px !important;
`;

const Content = styled(CardContent)`
  padding: 16px !important;
`;

const Icon = styled.div`
  cursor: pointer;
`;

const Title = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Description = styled(Box)`
  margin-top: 24px;
`;
