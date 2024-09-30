import { Typography } from '@mui/material';
import { FormLayout } from '../../../../shared/infra/layouts/FormLayout';
import { InvestmentForm } from '../features/InvestmentForm/InvestmentForm';
import { InvestmentModuleProvider } from '../InvestmentModuleContext';

export function AddInvestmentPage() {
  return (
    <FormLayout>
      <InvestmentModuleProvider>
        <Typography variant="h5" mb={3}>
          Adicionar investimento
        </Typography>
        <InvestmentForm />
      </InvestmentModuleProvider>
    </FormLayout>
  );
}
