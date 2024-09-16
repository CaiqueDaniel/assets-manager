import { Box, Paper } from '@mui/material';
import { PropsWithChildren } from 'react';

export function FormLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      bgcolor="#efefef"
      p={4}
    >
      <Paper
        sx={{
          maxWidth: '800px',
          width: 'calc(100% - 64px)',
          height: 'fit-content',
          p: 4,
        }}
      >
        {children}
      </Paper>
    </Box>
  );
}
