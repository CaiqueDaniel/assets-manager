import { Box, Paper } from "@mui/material";
import { PropsWithChildren } from "react";

export function FormLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      bgcolor="beige"
    >
      <Paper
        sx={{
          maxWidth: "800px",
          width: "100%",
          height: "fit-content",
          p: "32px",
        }}
      >
        {children}
      </Paper>
    </Box>
  );
}
