import Box from '@mui/material/Box';
import styled from 'styled-components';

import { PricingCard } from '../Card/PricingCard';
import { Switch } from '../Switch/Switch';
import { prices } from './pricesData';
import { CAPTION, COOL_GRAY_10 } from '~/assets/style/colors';

export const Prices = () => {
  const priceItems = prices.map((item, index) => {
    const { title, description, price, services, monthPrice, isPopular } = item;
    return (
      <PriceItem key={index}>
        <PricingCard
          title={title}
          description={description}
          price={price}
          services={services}
          monthPrice={monthPrice}
          isPopular={isPopular}
        />
      </PriceItem>
    );
  });
  return (
    <PricesContainer>
      <Title>
        <BlockName component="span" className="caption">
          Цены
        </BlockName>
        <TitleText component="span">Лучший источник медицинской информации</TitleText>
      </Title>
      <Description component="span" className="body-l">
        Сервис для врачей, доступный на разных устройствах по подписке на эксклюзивные статьи от ведущих экспертов в
        сфере здравоохранения и охраны здоровья
      </Description>
      <Switcher>
        <LeftSwitch>
          <Badge>
            <Box component="span" className="body-xs">
              20% дешевле
            </Box>
          </Badge>
          <Box component="span" className="body-l">
            Год
          </Box>
        </LeftSwitch>
        <Switch />
        <Box component="span" className="body-l">
          Месяц
        </Box>
      </Switcher>
      <PricesList component="ul">{priceItems}</PricesList>
    </PricesContainer>
  );
};

const PricesContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => theme.spacing(10)};
  ${({ theme }) => theme.breakpoints.down('desktop')} {
    gap: ${({ theme }) => theme.spacing(5)};
    padding: ${({ theme }) => `${theme.spacing(10)} ${theme.spacing(0)}`};
  }
  ${({ theme }) => theme.breakpoints.down('iPad')} {
    gap: ${({ theme }) => theme.spacing(4)};
    padding: ${({ theme }) => `${theme.spacing(6)} ${theme.spacing(2)}`};
  }
`;

const Title = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  ${({ theme }) => theme.breakpoints.down('desktop')} {
    padding: ${({ theme }) => `${theme.spacing(0)} ${theme.spacing(10)}`};
  }
  ${({ theme }) => theme.breakpoints.down('iPad')} {
    padding: ${({ theme }) => theme.spacing(0)};
    max-width: ${({ theme }) => theme.spacing(87)};
  }
`;

const BlockName = styled(Box)`
  color: ${CAPTION};
`;

const TitleText = styled(Box)`
  font-size: 42px;
  font-weight: 700;
  line-height: 46.2px;
  text-align: center;
  ${({ theme }) => theme.breakpoints.down('iPad')} {
    font-size: 24px;
    line-height: 26.4px;
  }
`;

const Description = styled(Box)`
  font-size: 18px;
  font-weight: 400;
  line-height: 25.2px;
  text-align: center;
  ${({ theme }) => theme.breakpoints.down('desktop')} {
    padding: ${({ theme }) => `${theme.spacing(0)} ${theme.spacing(10)}`};
  }
  ${({ theme }) => theme.breakpoints.down('iPad')} {
    padding: ${({ theme }) => theme.spacing(0)};
    max-width: ${({ theme }) => theme.spacing(87)};
    font-size: 16px;
    line-height: 22.4px;
  }
`;

const Switcher = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const PricesList = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: -webkit-fill-available;
  width: -moz-available;
  list-style: none;
  ${({ theme }) => theme.breakpoints.up('desktopL')} {
    max-width: ${({ theme }) => theme.spacing(201)};
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    justify-content: space-evenly;
    gap: ${({ theme }) => theme.spacing(3)};
  }

  ${({ theme }) => theme.breakpoints.down('desktop')} {
    gap: ${({ theme }) => theme.spacing(1)};
    padding: ${({ theme }) => `${theme.spacing(0)} ${theme.spacing(2)}`};
  }

  ${({ theme }) => theme.breakpoints.down('iPad')} {
    padding: ${({ theme }) => theme.spacing(0)};
  }

  ${({ theme }) => theme.breakpoints.down('tablet')} {
    align-items: center;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(4)};
  }
`;

const Badge = styled(Box)<{ size?: string }>`
  position: absolute;
  top: -20px;
  left: calc(50% - 48px);
  width: max-content;
  padding: 1px 10px 2px 10px;
  border-radius: 10px;
  background: ${COOL_GRAY_10};
`;

const LeftSwitch = styled(Box)`
  position: relative;
`;

const PriceItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
