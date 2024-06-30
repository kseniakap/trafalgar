import { styled, useMediaQuery, useTheme } from '@mui/material';
import { FC } from 'react';

import { Question } from './Question';
import DecorBlockQuestions from '~/assets/img/decor/decorBlockQuestions.png';
import { CAPTION, GRADIENT_END, GRADIENT_START } from '~/assets/style/colors';
import { allQuestion } from '~/const/allQuestions';

export const QuestionsBlock: FC = () => {
  const { breakpoints } = useTheme();
  const tabletMatch = useMediaQuery(breakpoints.down('tablet'));
  return (
    <Block>
      <h5 className="heading-5">Вопросы</h5>
      <h2 className={tabletMatch ? 'heading-4' : 'heading-2'}>Ответы на частые вопросы</h2>
      <AllQuestionsBlock>
        {allQuestion.map((item, i) => (
          <Question key={i} question={item.question} answer={item.answer} />
        ))}
      </AllQuestionsBlock>
    </Block>
  );
};

const Block = styled('div')(({ theme }) => ({
  'position': 'relative',
  'minHeight': 'auto',
  'padding': '80px 30px',
  'background': `linear-gradient(180deg, ${GRADIENT_START} 0%, ${GRADIENT_END} 100%)`,
  '& h5': {
    marginBottom: theme.spacing(1),
    textAlign: 'center',
    textTransform: 'uppercase',
    color: `${CAPTION}`,
  },
  '& h2': {
    marginBottom: theme.spacing(8),
    textAlign: 'center',
    [theme.breakpoints.down('tablet')]: {
      marginBottom: theme.spacing(4),
    },
  },

  '&:before': {
    position: 'absolute',
    top: '5px',
    left: 0,
    width: '132px',
    height: '104px',
    background: `url(${DecorBlockQuestions}) center center / cover no-repeat`,
    content: '""',
  },
  '&:after': {
    position: 'absolute',
    bottom: '5px',
    right: 0,
    width: '132px',
    height: '104px',
    background: `url(${DecorBlockQuestions}) center center / cover no-repeat`,
    content: '""',
  },
  [theme.breakpoints.down('tablet')]: {
    'width': '100%',
    'padding': '48px 16px',
    '&:before, &:after ': {
      background: 'none',
    },
  },
}));

const AllQuestionsBlock = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '900px',
  margin: '0 auto',
  [theme.breakpoints.up('desktopL')]: {
    width: '60%',
  },
  [theme.breakpoints.down('iPad')]: {
    width: '100%',
  },
}));
