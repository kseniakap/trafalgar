import { FC } from 'react';
import { styled, useMediaQuery, useTheme } from '@mui/material';

import { allQuestion } from './allQuestions';
import DecorBlockQuestions from '~/assets/img/decor/decorBlockQuestions.png';
import { Question } from './Question';

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
  'background': 'linear-gradient(180deg, #67c3f3 0%, #5a98f2 100%)',
  '& h5': {
    marginBottom: theme.spacing(1),
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#001d6c',
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
