import Box from '@mui/material/Box';
import { default as MUISwitch } from '@mui/material/Switch';
import { useState } from 'react';
import styled from 'styled-components';

export const Switch = () => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <SwitchContainer>
      <MUISwitch checked={isChecked} onChange={() => setIsChecked((isCheck) => !isCheck)} />
    </SwitchContainer>
  );
};

const SwitchContainer = styled(Box)`
  .MuiButtonBase-root {
    top: 12px;
    left: 28px;
    width: 16px;
    height: 16px;
    padding: 2px;
  }
  .Mui-checked {
    top: 12px;
    left: 28px;
    width: 16px;
    height: 16px;
    padding: 2px;
    color: #fff !important;
    transform: translateX(-16px) !important;
  }
  .Mui-checked + .MuiSwitch-track {
    background: #458ff6 !important;
    opacity: 1 !important;
  }
  .MuiSwitch-track {
    width: 32px;
    height: 16px;
    padding: 2px;
    border-radius: 33px;
    background: #a2a9b0;
  }
  .MuiSwitch-thumb {
    width: 12px;
    height: 12px;
    box-shadow: none;
  }
  .MuiTouchRipple-root {
    width: 16px;
    height: 16px;
  }
`;
