import { FC } from 'react';
import { styled } from '@mui/material';

import { allQuestion } from './allQuestions';
import DecorBlockQuestions from '~/assets/images/decorBlockQuestions.png';
import { Question } from './Question';

export const QuestionsBlock: FC = () => {
  return (
    <Block>
      <Title>Вопросы</Title>
      <Subtitle>Ответы на частые вопросы</Subtitle>
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

const Title = styled('h5')(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontWeight: 700,
  fontSize: '20px',
  textAlign: 'center',
  textTransform: 'uppercase',
  color: '#001d6c',
}));

const Subtitle = styled('h2')(({ theme }) => ({
  marginBottom: theme.spacing(8),
  fontWeight: 700,
  fontSize: '42px',
  textAlign: 'center',
  lineHeight: '100%',
  [theme.breakpoints.down('tablet')]: {
    marginBottom: theme.spacing(4),
    fontSize: '24px',
  },
}));

const AllQuestionsBlock = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '900px',
  margin: '0 auto',
  [theme.breakpoints.up('desktop')]: {
    width: '60%',
  },
  [theme.breakpoints.down('iPad')]: {
    width: '100%',
  },
}));
