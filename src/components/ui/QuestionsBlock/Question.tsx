import { FC, useState } from 'react';
import { styled } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IAllQuestion } from './allQuestions';

export const Question: FC<IAllQuestion> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledAccordion
      expanded={isOpen}
      onChange={() => setIsOpen(!isOpen)}
      slotProps={{ transition: { timeout: 400 } }}
      sx={{
        '& .MuiAccordion-region': { height: isOpen ? 'auto' : 0 },
        '& .MuiAccordionDetails-root': { display: isOpen ? 'block' : 'none' },
      }}
    >
      <StyledAccordionSummary
        expandIcon={isOpen ? <RemoveIcon /> : <AddIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <QuestionsTypography>{question}</QuestionsTypography>
      </StyledAccordionSummary>
      <AccordionDetails>
        <AnswerTypography>{answer}</AnswerTypography>
      </AccordionDetails>
    </StyledAccordion>
  );
};

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  'margin': '0px!important',
  'padding': `${theme.spacing(2)}!important`,
  'border': '1px solid #dde1e6',
  'borderRadius': '8px!important',
  '& div': {
    minHeight: theme.spacing(3),
    margin: '0px!important',
    padding: 0,
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
  marginTop: theme.spacing(3),
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '140%',
}));
