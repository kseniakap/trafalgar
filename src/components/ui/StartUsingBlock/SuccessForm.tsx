import successIcon from '@/assets/icons/succsessMark.svg';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { FC } from 'react';
import styled from 'styled-components';

import { ArrowLink } from '../Text/ArrowLink';

interface SuccessFormProps {
  onclick: () => void;
}

const SuccessForm: FC<SuccessFormProps> = ({ onclick }) => {
  const theme = useTheme();
  const IsTablet = useMediaQuery(theme.breakpoints.down('tablet'));

  return (
    <SuccessFormContainer>
      <p className={IsTablet ? 'heading-5' : 'heading-3'}>Форма успешно отправлена</p>
      <img src={successIcon} alt="successImg"></img>
      <ArrowLink onClick={onclick} text="Вернуться к форме"></ArrowLink>
    </SuccessFormContainer>
  );
};

export default SuccessForm;

const SuccessFormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  height: 100%;
  position: absolute;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100%;
  padding-inline: 32px;
`;
