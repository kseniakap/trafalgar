import { Box } from '@mui/material';
import { FC } from 'react';

import AppMenu from '~/components/menu';

const TestPage: FC = () => {
  return (
    <>
      <AppMenu />
      <Box sx={{ width: '100%', height: '3000px', backgroundColor: 'wheat' }}> 1</Box>
    </>
  );
};

export default TestPage;
