import { useEffect, useState } from 'react';
import { OperationFormDto } from '../../../../core/application/operation/OperationFormDto';
import { toast } from 'react-toastify';
import { useOperationModuleContext } from '../../OperationModuleContext';
import { useNavigate, useParams } from 'react-router-dom';
import { NumberFormatter } from '~/modules/shared/infra/helpers/NumberFormatter';

export function useOperationFormPresenter() {
  const { operationId, investmentId } = useParams();
  const { saveOperationUseCase, getOperationUseCase } =
    useOperationModuleContext();
  const [initialValues, setInitialValues] = useState(defaultValues);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (values: OperationFormDto) => {
    try {
      await saveOperationUseCase.execute(values);
      toast.success('Operação cadastrada com sucesso');
      navigate('..');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => void fetchOperation(), []);

  return { initialValues, isLoading, onSubmit };

  function fetchOperation() {
    if (!operationId || !investmentId) return;

    setIsLoading(true);

    getOperationUseCase
      .execute({ id: operationId, investmentId })
      .then((operation) =>
        setInitialValues({
          date: operation.date,
          type: operation.type,
          quantity: NumberFormatter.toDecimalString(operation.quantity),
          unitValue: NumberFormatter.toDecimalString(operation.unitValue),
        })
      )
      .catch((error: Error) => {
        toast.error(error.message);
        navigate('..');
      })
      .finally(() => setIsLoading(false));
  }
}

const defaultValues: OperationFormDto = {
  type: '',
  date: new Date(),
  quantity: '0,00',
  unitValue: '0,00',
};
