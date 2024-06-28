import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { FC } from 'react';
import styled from 'styled-components';

import { Button, ButtonSize, ButtonStyle, ButtonTextSize } from '../Button/Button';
import Check from '~/assets/icons/check.svg';
import { COOL_GRAY_10, COOL_GRAY_20, COOL_GRAY_40 } from '~/assets/style/colors';

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  monthPrice?: string;
  services: string[];
  isPopular?: boolean;
}

export const PricingCard: FC<PricingCardProps> = (props: PricingCardProps) => {
  const { title, description, price, monthPrice, services, isPopular } = props;

  const servicesList = services.map((service, index) => (
    <Service key={index}>
      <img src={Check} alt="check icon" />
      {service}
    </Service>
  ));

  return (
    <Container>
      {isPopular && (
        <Badge>
          <Box component="span">Популярный</Box>
        </Badge>
      )}
      <PriceCard>
        <SectionBox>
          <span className="heading-3">{title}</span>
          <Description className="body-l">{description}</Description>
        </SectionBox>
        <PriceSectionBox>
          <CrossOutPrice>${price}</CrossOutPrice>
          <span className="heading-1">${monthPrice}</span>
          <span className="body-s">{`$${monthPrice} USD каждый месяц`}</span>
        </PriceSectionBox>
        <SectionBox>
          <Button
            text={'Начать'}
            style={ButtonStyle.Contained}
            size={ButtonSize.Large}
            textSize={ButtonTextSize.Large}
          />
        </SectionBox>
        <ServicesSection className="body-l">{servicesList}</ServicesSection>
      </PriceCard>
    </Container>
  );
};

const Container = styled(Box)`
  position: relative;
  height: 858px;
  width: 410px;
  ${({ theme }) => theme.breakpoints.down('desktop')} {
    width: 100%;
  }
  ${({ theme }) => theme.breakpoints.down('tablet')} {
    max-width: 410px;
    height: unset;
  }
`;
const PriceCard = styled(Card)`
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 16px 24px;
  border: 1px solid ${COOL_GRAY_20};
  border-radius: 8px !important;
  box-shadow: none !important;
  ${({ theme }) => theme.breakpoints.down('tablet')} {
    padding: 16px 24px 48px 24px;
  }
`;

const SectionBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  margin-top: 32px;
`;
const PriceSectionBox = styled(SectionBox)`
  margin-top: 9.6px;
`;
const Description = styled(Box)`
  height: 44.8px;
  font-size: 18px;
  font-weight: 400;
  line-height: 25.2px;
  text-align: center;
  ${({ theme }) => theme.breakpoints.down('iPad')} {
    font-size: 16px;
    line-height: 22.4px;
  }
`;
const ServicesSection = styled(SectionBox)`
  align-items: flex-start;
`;

const CrossOutPrice = styled(Box)`
  color: ${COOL_GRAY_40};
  font-size: 54px;
  font-weight: 700;
  line-height: 59.4px;
  text-decoration: underline;
  text-decoration-thickness: from-font;
  text-underline-offset: -14px;
  text-decoration-skip-ink: none;
`;

const Service = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

const Badge = styled(Box)<{ size?: string }>`
  position: absolute;
  top: -12px;
  left: calc(50% - 54px);
  width: fit-content;
  padding: 2px 12px;
  border-radius: 10px;
  background: ${COOL_GRAY_10};
`;
