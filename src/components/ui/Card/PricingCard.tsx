import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { FC } from 'react';
import styled from 'styled-components';

import { Button, ButtonSize, ButtonStyle, ButtonTextSize } from '../Button/Button';
import Check from '~/assets/icons/check.svg';

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  discount?: string;
  monthPrice?: string;
  services: string[];
}

export const PricingCard: FC<PricingCardProps> = (props: PricingCardProps) => {
  const { title, description, price, discount, monthPrice, services } = props;

  const servicesList = services.map((service, index) => (
    <Service key={index}>
      <img src={Check} alt="check icon" />
      {service}
    </Service>
  ));

  return (
    <PriceCard>
      <SectionBox>
        <span className="heading-3">{title}</span>
        <span className="body-l">{description}</span>
      </SectionBox>
      <SectionBox>
        <CrossOutPrice className="heading-1">{price}</CrossOutPrice>
        <span className="heading-1">{discount}</span>
        <span className="body-s">{`${monthPrice} каждый месяц`}</span>
      </SectionBox>
      <SectionBox>
        <Button text={'Начать'} style={ButtonStyle.Contained} size={ButtonSize.Large} textSize={ButtonTextSize.Large} />
      </SectionBox>
      <ServicesSection className="body-l">{servicesList}</ServicesSection>
    </PriceCard>
  );
};

const PriceCard = styled(Card)`
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: center;
  height: 858px;
  padding: 16px 24px;
  border: 1px solid #dde1e6;
  border-radius: 8px !important;
  box-shadow: none !important;
`;

const SectionBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  margin-top: 32px;
`;

const ServicesSection = styled(SectionBox)`
  align-items: flex-start;
`;

const CrossOutPrice = styled(Box)`
  color: #a2a9b0;
  text-decoration: line-through;
`;

const Service = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;
