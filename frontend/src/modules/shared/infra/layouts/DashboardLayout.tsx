import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

export function DashboardLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <Box width="100vw" height="100vh" display="flex" bgcolor="#efefef">
      <Box p={4} width="100%">
        {children}
      </Box>
    </Box>
  );
}
