import { Box, Button, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../../../../shared/infra/layouts/DashboardLayout';
import { ListInvestment } from '../features/ListInvestments/ListInvestments';
import { InvestmentModuleProvider } from '../InvestmentModuleContext';
import { ListOperations } from '../../operation/features/ListOperations/ListOperations';
import { OperationModuleProvider } from '../../operation/OperationModuleContext';

export function InvestmentsPage() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <InvestmentModuleProvider>
        <OperationModuleProvider>
          <Typography variant="h5" color="black" mb={3}>
            Investimentos
          </Typography>

          <Paper sx={{ p: 4 }}>
            <Box mb={3} display="flex" justifyContent="end">
              <Button onClick={() => navigate('investment/new')} variant="text">
                Novo investimento
              </Button>
            </Box>

            <ListInvestment>
              {(currency) => <ListOperations currency={currency} />}
            </ListInvestment>
          </Paper>
        </OperationModuleProvider>
      </InvestmentModuleProvider>
    </DashboardLayout>
  );
}
