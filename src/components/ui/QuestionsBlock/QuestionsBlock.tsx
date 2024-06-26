import { FC, useState } from 'react';
import { styled } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IAllQuestion, allQuestion } from './allQuestions';
import DecorBlockQuestions from '~/assets/images/decorBlockQuestions.png';

export const QuestionsBlock: FC = () => {
  const [expanded, setExpanded] = useState(Array(allQuestion.length).fill(false));

  const handleExpansion = (index: number) => {
    setExpanded((prevExpanded) => prevExpanded.map((item, i) => (i === index ? !item : false)));
  };

  const renterAllQuestion = (questions: IAllQuestion[]) => {
    return (
      <>
        {questions.map((item, i) => {
          return (
            <StyledAccordion
              key={i}
              expanded={expanded[i]}
              onChange={() => handleExpansion(i)}
              slotProps={{ transition: { timeout: 400 } }}
              sx={{
                '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
                '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
              }}
            >
              <StyledAccordionSummary
                expandIcon={expanded[i] ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <QuestionsTypography>{item.question}</QuestionsTypography>
              </StyledAccordionSummary>
              <AccordionDetails>
                <AnswerTypography>{item.answer}</AnswerTypography>
              </AccordionDetails>
            </StyledAccordion>
          );
        })}
      </>
    );
  };
  return (
    <Block>
      <Title>Вопросы</Title>
      <Subtitle>Ответы на частые вопросы</Subtitle>
      <AllQuestionsBlock>{renterAllQuestion(allQuestion)}</AllQuestionsBlock>
    </Block>
  );
};

const Block = styled('div')(({ theme }) => ({
  'background': 'linear-gradient(180deg, #67c3f3 0%, #5a98f2 100%)',
  'minHeight': 'auto',
  'padding': '80px 30px',
  'position': 'relative',
  '&:before': {
    content: '""',
    background: `url(${DecorBlockQuestions}) center center / cover no-repeat`,
    position: 'absolute',
    top: '5px',
    left: 0,
    width: '132px',
    height: '104px',
  },
  '&:after': {
    content: '""',
    background: `url(${DecorBlockQuestions}) center center / cover no-repeat`,
    position: 'absolute',
    bottom: '5px',
    right: 0,
    width: '132px',
    height: '104px',
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
  fontWeight: 700,
  fontSize: '20px',
  textAlign: 'center',
  color: '#001d6c',
  marginBottom: theme.spacing(1),
  textTransform: 'uppercase',
}));

const Subtitle = styled('h2')(({ theme }) => ({
  fontWeight: 700,
  fontSize: '42px',
  textAlign: 'center',
  marginBottom: theme.spacing(8),
  lineHeight: '100%',
  [theme.breakpoints.down('tablet')]: {
    fontSize: '24px',
    marginBottom: theme.spacing(4),
  },
}));

const AllQuestionsBlock = styled('div')(({ theme }) => ({
  width: '900px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  [theme.breakpoints.up('desktop')]: {
    width: '60%',
  },
  [theme.breakpoints.down('iPad')]: {
    width: '100%',
  },
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  'border': '1px solid #dde1e6',
  'borderRadius': '8px!important',
  'padding': `${theme.spacing(2)}!important`,
  'margin': '0px!important',
  '& div': {
    padding: 0,
    margin: '0px!important',
    minHeight: theme.spacing(3),
  },
}));
const StyledAccordionSummary = styled(AccordionSummary)(() => ({
  minHeight: '24px!important',
}));
const QuestionsTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '110%',
  [theme.breakpoints.down('tablet')]: {
    fontSize: '18px',
  },
}));

const AnswerTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '140%',
  marginTop: theme.spacing(3),
}));
