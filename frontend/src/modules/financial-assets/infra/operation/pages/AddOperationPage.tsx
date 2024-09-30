import { Typography } from '@mui/material';
import { FormLayout } from '../../../../shared/infra/layouts/FormLayout';
import { OperationForm } from '../features/OperationForm/OperationForm';
import { OperationModuleProvider } from '../OperationModuleContext';

export function AddOperationPage() {
  return (
    <FormLayout>
      <OperationModuleProvider>
        <Typography variant="h5" mb={3}>
          Adicionar operação
        </Typography>
        <OperationForm />
      </OperationModuleProvider>
    </FormLayout>
  );
}
