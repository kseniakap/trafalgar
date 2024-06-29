import successIcon from '@/assets/icons/succsessMark.svg';
import { Box } from '@mui/material';
import { FC } from 'react';
import styled from 'styled-components';

import { ArrowLink } from '../Text/ArrowLink';

interface SuccessFormProps {
  onclick: () => void;
}

const SuccessForm: FC<SuccessFormProps> = ({ onclick }) => {
  return (
    <SuccessFormContainer>
      <p className="heading-3">Форма успешно отправлена</p>
      <img src={successIcon} alt="successImg"></img>
      <ArrowLink onClick={onclick} text="Вернуться к форме"></ArrowLink>
    </SuccessFormContainer>
  );
};

export default SuccessForm;

const SuccessFormContainer = styled(Box)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;
