import { Box, Slider, Stack } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

import { PageContainer } from '~/components/page';

const TestPage: React.FC = () => {
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    event.preventDefault();
    setValue(newValue as number);
  };
  return (
    <PageContainer>
      <Div>Test page</Div>
      <Box sx={{ width: 200 }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <Slider aria-label="Volume" value={value} onChange={handleChange} />
        </Stack>
      </Box>
    </PageContainer>
  );
};

const Div = styled.div`
  color: red;
`;

export default TestPage;
