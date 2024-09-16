import { Box, Button, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../../../../shared/infra/layouts/DashboardLayout';
import { ListInvestment } from '../features/ListInvestments/ListInvestments';

export function InvestmentsPage() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <Typography variant="h5" color="black" mb={3}>
        Investimentos
      </Typography>

      <Paper sx={{ p: 4 }}>
        <Box mb={3} display="flex" justifyContent="end">
          <Button onClick={() => navigate('investment/new')} variant="text">
            Novo investimento
          </Button>
        </Box>

        <ListInvestment />
      </Paper>
    </DashboardLayout>
  );
}
