import Box from '@mui/material/Box/Box';
import Card from '@mui/material/Card/Card';
import React from 'react';
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

export const PricingCard = (props: PricingCardProps) => {
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
        <Title className="heading-3">{title}</Title>
        <Description className="body-L">{description}</Description>
      </SectionBox>
      <SectionBox>
        <CrossOutPrice className="heading-1">{price}</CrossOutPrice>
        <Discount className="heading-1">{discount}</Discount>
        <MonthPrice className="body-S">{`${monthPrice} каждый месяц`}</MonthPrice>
      </SectionBox>
      <SectionBox>
        <Button text={'Начать'} style={ButtonStyle.Contained} size={ButtonSize.Large} textSize={ButtonTextSize.Large} />
      </SectionBox>
      <ServicesSection className="body-L">{servicesList}</ServicesSection>
    </PriceCard>
  );
};

const PriceCard = styled(Card)`
  border: 1px solid #dde1e6;
  box-shadow: none !important;
  border-radius: 8px !important;
  padding: 16px 24px;
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: center;
  height: 858px;
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

const Title = styled(Box)``;
const Description = styled(Box)``;
const Discount = styled(Box)``;
const MonthPrice = styled(Box)``;
