import { useMediaQuery, useTheme } from '@mui/material';
import { FC, useState } from 'react';
import styled from 'styled-components';

import { CountCard } from '../Card/CountCard';
import { StatCardData, statCardData } from './statCardData';
import dashboardIcon from '~/assets/icons/dashboard.svg';
import { PRIMARY_60, COOL_GRAY_90 } from '~/assets/style/colors';
import { Button, ButtonStyle } from '~/components/ui/Button/Button';
import { toCompactNumber } from '~/utils/toCompactNum';

const KnowledgeBlock: FC = () => {
  const [isDocCategoryState, setIsDocCategoryState] = useState(true);

  const { breakpoints } = useTheme();
  const tabletMatch = useMediaQuery(breakpoints.down('tablet'));

  const renderStatCards = (cardsData: StatCardData[]) => {
    return (
      <CountCards>
        {cardsData.map((data, idx) => (
          <li key={idx}>
            <CountCard
              count={toCompactNumber(data.value) + '+'}
              description={data.title}
              icon={tabletMatch ? data.iconAlt : data.icon}
            />
          </li>
        ))}
      </CountCards>
    );
  };

  return (
    <Block>
      <Content>
        <Head>
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
        </Head>

        <Stats>
          <img src={dashboardIcon} alt="График публикаций" />
          {renderStatCards(statCardData)}
        </Stats>
      </Content>
    </Block>
  );
};

const Block = styled.div`
  ul {
    list-style: none;
  }
`;

const Content = styled.div`
  max-width: 2400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(10, 10)};

  ${({ theme }) => theme.breakpoints.down('desktop')} {
    padding: ${({ theme }) => theme.spacing(10, 5)};
  }

  ${({ theme }) => theme.breakpoints.down('tablet')} {
    padding: ${({ theme }) => theme.spacing(6, 2)};
  }
`;

const Head = styled.div`
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
`;

const BtnGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(6)};

  & > button {
    height: 56px;

    .btn-text-m {
      font-size: 20px;
    }
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

      .btn-text-m {
        font-size: 14px;
      }
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
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(10)};

  & > img {
    width: 546px;
    height: 396px;
  }

  ${({ theme }) => theme.breakpoints.up('desktopL')} {
    & > img {
      width: 846px;
      height: auto;
    }
  }

  ${({ theme }) => theme.breakpoints.down('desktop')} {
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing(3)};
  }

  ${({ theme }) => theme.breakpoints.down('iPad')} {
    flex-direction: column;
    align-items: center;

    & > img {
      width: 100%;
      height: auto;
    }
  }
`;

const CountCards = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 420px);
  gap: ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => theme.breakpoints.down('desktopL')} {
    grid-template-columns: repeat(2, 320px);
  }

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
