import { OperationFactory } from '../../domain/operation/OperationFactory';
import { OperationGateway } from '../../domain/operation/OperationGateway';
import { OperationFormDto } from './OperationFormDto';

export function useOperationFormPresenter(
  gateway: OperationGateway,
  factory: OperationFactory<OperationFormDto>
) {
  const onSubmit = async (values: OperationFormDto) => {
    try {
      await gateway.save(factory.create(values));
    } catch (error) {
      console.error(error);
    }
  };

  return { initialValues, onSubmit };
}

const initialValues: OperationFormDto = {
  date: new Date(),
  quantity: '0,00',
  unitValue: '0,00',
};
