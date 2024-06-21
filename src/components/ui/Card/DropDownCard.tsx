import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FC, useState } from 'react';
import styled from 'styled-components';

import Minus from '~/assets/icons/minus.svg';
import Plus from '~/assets/icons/plus.svg';

interface DropDownCardProps {
  title: string;
  description: string;
}

export const DropDownCard: FC<DropDownCardProps> = (props: DropDownCardProps) => {
  const { title, description } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropCard>
      <Content>
        <Title className="heading-5">
          {title}
          <Icon>
            <img src={isOpen ? Minus : Plus} onClick={handleClick} alt={isOpen ? 'minus icon' : 'plus icon'} />
          </Icon>
        </Title>
        {isOpen && <Description className="body-m">{description}</Description>}
      </Content>
    </DropCard>
  );
};

const DropCard = styled(Card)`
  border: 1px solid #dde1e6;
  border-radius: 8px !important;
  box-shadow: none !important;
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
