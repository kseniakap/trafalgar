import locationIcon from '@/assets/icons/menuLocation.svg';
import { Box, ImageListItem, styled, Typography } from '@mui/material';
import { FC } from 'react';

interface ILocationProps {
  location: string;
}

const Location: FC<ILocationProps> = ({ location }) => {
  return (
    <StyledLocationContainer>
      <ImageListItem>
        <img src={locationIcon} alt="locationIcon" />
      </ImageListItem>
      <Typography fontWeight={'500'} fontSize={'16px'}>
        {location}
      </Typography>
    </StyledLocationContainer>
  );
};

const StyledLocationContainer = styled(Box)`
  display: flex;
  gap: 8px;
  padding: 16px 8px 16px 13px;
`;

export default Location;
