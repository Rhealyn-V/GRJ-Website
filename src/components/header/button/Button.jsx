import  React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row" >
      <Button size="meduim"variant="contained">APPLY NOW</Button>
    </Stack>
  );
}