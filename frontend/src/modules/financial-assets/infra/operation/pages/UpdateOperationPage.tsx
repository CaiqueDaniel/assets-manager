import { Typography } from '@mui/material';
import { FormLayout } from '../../../../shared/infra/layouts/FormLayout';
import { OperationForm } from '../features/OperationForm/OperationForm';
import { OperationModuleProvider } from '../OperationModuleContext';

export function UpdateOperationPage() {
  return (
    <FormLayout>
      <OperationModuleProvider>
        <Typography variant="h5" mb={3}>
          Editar operação
        </Typography>
        <OperationForm />
      </OperationModuleProvider>
    </FormLayout>
  );
}
