import locationIcon from '@/assets/icons/menuLocation.svg';
import { Box, styled, Typography } from '@mui/material';
import { FC } from 'react';

interface ILocationProps {
  location: string;
}

const Location: FC<ILocationProps> = ({ location }) => {
  return (
    <StyledLocationContainer>
      <img src={locationIcon} alt="locationIcon" />
      <Typography fontWeight={'500'} fontSize={'16px'}>
        {location}
      </Typography>
    </StyledLocationContainer>
  );
};

const StyledLocationContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '8px',
  boxSizing: 'border-box',
  padding: '16px 8px 16px 13px',
}));

export default Location;
