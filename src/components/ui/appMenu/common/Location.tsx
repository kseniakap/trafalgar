import locationIcon from '@/assets/icons/menuLocation.svg';
import { ImageListItem, styled, Typography, Box } from '@mui/material';
import { FC } from 'react';

interface LocationProps {
  location: string;
}

const Location: FC<LocationProps> = ({ location }) => {
  return (
    <StyledLocationContainer>
      <ImageListItem>
        <img src={locationIcon} alt="locationIcon" style={{ width: 'auto', height: 'auto' }} />
      </ImageListItem>
      <Typography fontWeight={'500'} fontSize={'16px'}>
        {location}
      </Typography>
    </StyledLocationContainer>
  );
};

const StyledLocationContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 8px 16px 13px;
`;

export default Location;
