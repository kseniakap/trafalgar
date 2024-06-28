import { FC, useState } from 'react';
import { styled, useMediaQuery, useTheme } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IAllQuestion } from './allQuestions';

export const Question: FC<IAllQuestion> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { breakpoints } = useTheme();
  const tabletMatch = useMediaQuery(breakpoints.down('tablet'));

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
        <h4 className={tabletMatch ? 'heading-6' : 'heading-5'}>{question}</h4>
      </StyledAccordionSummary>
      <AccordionDetails>
        <p className="body-M">{answer}</p>
      </AccordionDetails>
    </StyledAccordion>
  );
};

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  'margin': '0px!important',
  'padding': `${theme.spacing(2)}!important`,
  'border': '1px solid #dde1e6',
  'borderRadius': `${theme.spacing(1)}!important`,
  '& p': {
    marginTop: theme.spacing(3),
  },
  '& div': {
    minHeight: theme.spacing(3),
    margin: '0px!important',
    padding: 0,
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  minHeight: `${theme.spacing(3)}!important`,
}));
