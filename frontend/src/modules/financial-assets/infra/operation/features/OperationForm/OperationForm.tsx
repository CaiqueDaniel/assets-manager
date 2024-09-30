import { Skeleton } from '@mui/material';

import { OperationFormFields } from './components/OperationFormFields';
import { FormFeature } from '~/modules/shared/infra/features/FormFeature';
import { OperationFormDto } from '~/modules/financial-assets/core/application/operation/OperationFormDto';
import { useOperationFormPresenter } from '~/modules/financial-assets/infra/operation/features/OperationForm/useOperationFormPresenter';

export function OperationForm() {
  const { initialValues, isLoading, onSubmit } = useOperationFormPresenter();

  if (isLoading)
    return <Skeleton width="100%" height={200} sx={{ transform: 'unset' }} />;

  return (
    <FormFeature<OperationFormDto>
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <OperationFormFields />
    </FormFeature>
  );
}
