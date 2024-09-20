import { Typography } from '@mui/material';
import { FormLayout } from '../../../../shared/infra/layouts/FormLayout';
import { InvestmentForm } from '../../../../assets/infra/investment/features/InvestmentForm/InvestmentForm';

export function AddInvestmentPage() {
  return (
    <FormLayout>
      <Typography variant="h5" mb={3}>
        Adicionar investimento
      </Typography>
      <InvestmentForm />
    </FormLayout>
  );
}
