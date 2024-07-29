import { Box, Button, Paper, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { DashboardLayout } from "../../../shared/layouts/DashboardLayout";
import { InvestmentListFeature } from "../features/InvestmentListFeature";

export function InvestmentsPage() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <Typography variant="h5" color="black" mb={3}>
        Investimentos
      </Typography>

      <Paper sx={{ p: 4 }}>
        <Box mb={3} display="flex" justifyContent="end">
          <Button onClick={() => navigate("investimento/novo")} variant="text">
            Novo investimento
          </Button>
        </Box>
        
        <InvestmentListFeature />
      </Paper>
    </DashboardLayout>
  );
}
