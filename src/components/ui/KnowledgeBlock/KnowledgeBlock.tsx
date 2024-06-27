import { Container, useMediaQuery, useTheme } from '@mui/material';
import { FC, useState } from 'react';
import styled from 'styled-components';

import { CountCard } from '../Card/CountCard';
import { IStatCardData, statCardData } from './statCardData';
import dashboardIcon from '~/assets/icons/dashboard.svg';
import { PRIMARY_60, COOL_GRAY_90 } from '~/assets/style/colors';
import { Button, ButtonStyle } from '~/components/ui/Button/Button';
import toCompactNumber from '~/uttils/toCompactNum';

// TODO сделать переключаемые кнопки

const KnowledgeBlock: FC = () => {
  const [isDocCategoryState, setIsDocCategoryState] = useState<boolean>(true);

  const { breakpoints } = useTheme();
  const tabletMatch = useMediaQuery(breakpoints.down('tablet'));

  const renderStatCards = (cardsData: IStatCardData[]) => {
    return (
      <CountCards>
        {cardsData.map((data, idx) => (
          <li key={idx}>
            <CountCard
              count={toCompactNumber(data.value)}
              description={data.title}
              icon={<img src={tabletMatch ? data.iconAlt : data.icon} alt={data.title} />}
            />
          </li>
        ))}
      </CountCards>
    );
  };

  return (
    <>
      <Block>
        <Content maxWidth="desktop">
          <h2 className="heading-5">ЗНАНИЯ</h2>
          <p className={tabletMatch ? 'heading-4' : 'heading-2'}>
            Информацию по отдельным заболеваниям ориентированную на пациентов можно найти в соответствующем разделе
            сайта, статьи разделены на категории.
          </p>
          <BtnGroup>
            <Button
              className="docBtn"
              text="Для врачей"
              style={isDocCategoryState ? ButtonStyle.Contained : ButtonStyle.Outlined}
              onClick={() => setIsDocCategoryState(true)}
            />
            <Button
              className="patientBtn"
              text="Для пациентов"
              style={isDocCategoryState ? ButtonStyle.Outlined : ButtonStyle.Contained}
              onClick={() => setIsDocCategoryState(false)}
            />
          </BtnGroup>
          <Stats>
            <img src={dashboardIcon} alt="График публикаций" />
            {renderStatCards(statCardData)}
          </Stats>
        </Content>
      </Block>
    </>
  );
};

const Block = styled.div`
  ul {
    list-style: none;
  }
`;

const Content = styled(Container)`
  padding: ${({ theme }) => theme.spacing(10, 10)} !important;
  min-height: 874px;

  & > h2 {
    color: ${PRIMARY_60};
    padding-bottom: ${({ theme }) => theme.spacing(1)};
  }

  & > p {
    color: ${COOL_GRAY_90};
    padding-bottom: ${({ theme }) => theme.spacing(6)};

    ${({ theme }) => theme.breakpoints.down('tablet')} {
      padding-bottom: ${({ theme }) => theme.spacing(4)};
    }
  }

  ${({ theme }) => theme.breakpoints.down('desktop')} {
    padding: ${({ theme }) => theme.spacing(10, 5)} !important;
  }

  ${({ theme }) => theme.breakpoints.down('tablet')} {
    padding: ${({ theme }) => theme.spacing(6, 2)} !important;
  }
`;

const BtnGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(6)};

  & > button {
    height: 56px;
  }

  & > .docBtn {
    width: 178px;
  }

  & > .patientBtn {
    width: 213px;
  }

  ${({ theme }) => theme.breakpoints.down('tablet')} {
    padding-bottom: ${({ theme }) => theme.spacing(4)};

    & > button {
      height: 40px;
      padding: 13px !important;
    }

    & > .docBtn {
      width: 137px;
    }

    & > .patientBtn {
      width: 162px;
    }
  }
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(10)};

  ${({ theme }) => theme.breakpoints.down('desktop')} {
    align-items: flex-start;
    justify-content: center;
  }

  ${({ theme }) => theme.breakpoints.down('iPad')} {
    flex-direction: column;
    align-items: center;

    gap: ${({ theme }) => theme.spacing(3)};

    & > img {
      width: 100%;
    }
  }
`;

const CountCards = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 320px);
  gap: ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => theme.breakpoints.down('desktop')} {
    grid-template-columns: repeat(1, 320px);
  }

  ${({ theme }) => theme.breakpoints.down('iPad')} {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);

    & > li > div {
      width: 100%;
      min-width: 169px;
    }
  }

  ${({ theme }) => theme.breakpoints.down(393)} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default KnowledgeBlock;
