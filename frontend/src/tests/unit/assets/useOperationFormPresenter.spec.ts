import { OperationFormDto } from '~/modules/assets/core/application/operation/OperationFormDto';
import { useOperationFormPresenter } from '~/modules/assets/core/application/operation/useOperationFormPresenter';

import { OperationFactory } from '~/modules/assets/core/domain/operation/OperationFactory';
import { OperationGateway } from '~/modules/assets/core/domain/operation/OperationGateway';

describe('useOperationFormPresenter unit tests', () => {
  let gateway: jest.Mocked<OperationGateway>;
  let factory: jest.Mocked<OperationFactory<OperationFormDto>>;

  beforeAll(() => {
    gateway = {
      save: jest.fn(),
      findById: jest.fn(),
    };

    factory = {
      create: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be able to provide an initialization value', () => {
    const { initialValues } = useOperationFormPresenter(gateway, factory);
    expect(initialValues.quantity).toBe('0,00');
    expect(initialValues.unitValue).toBe('0,00');
    expect(initialValues.date).toBeDefined();
  });

  it('should be able to save a operation', async () => {
    const dto = {
      unitValue: '5,00',
      date: new Date(),
      quantity: '1,00',
    };
    const { onSubmit } = useOperationFormPresenter(gateway, factory);
    
    await onSubmit(dto);

    expect(factory.create).toHaveBeenCalledWith(dto);
    expect(gateway.save).toHaveBeenCalled();
  });
});
