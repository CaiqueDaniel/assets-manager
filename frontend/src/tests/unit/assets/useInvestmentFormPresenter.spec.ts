import { AppInvestmentFactory } from '~/modules/assets/core/application/investment/AppInvestmentFactory';
import { InvestmentFormDto } from '~/modules/assets/core/application/investment/InvestmentFormDto';
import { useInvestmentFormPresenter } from '~/modules/assets/core/application/investment/useInvestmentFormPresenter';
import { InvestmentFactory } from '~/modules/assets/core/domain/investment/InvestmentFactory';
import { InvestmentGateway } from '~/modules/assets/core/domain/investment/InvestmentGateway';
import { InvestmentBuilder } from '~/tests/fixture/assets/AssetsFixtures';

describe('useInvestmentFormPresenter unit tests', () => {
  let gateway: jest.Mocked<InvestmentGateway>;
  let factory: jest.Mocked<InvestmentFactory<InvestmentFormDto>>;

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
    const { initialValues } = useInvestmentFormPresenter(gateway, factory);
    expect(initialValues.code).toBe('');
    expect(initialValues.type).toBe('');
    expect(initialValues.currency).toBe('BRL');
    expect(initialValues.quantity).toBe('0,00');
    expect(initialValues.unitValue).toBe('0,00');
  });

  it('should be able to save a investment', async () => {
    const dto = {
      code: 'INTR',
      type: 'Variable',
      unitValue: '5,00',
      date: new Date(),
      currency: 'USD',
      quantity: '1,00',
    };
    const { onSubmit } = useInvestmentFormPresenter(gateway, factory);
    await onSubmit(dto);
    expect(factory.create).toHaveBeenCalledWith(dto);
    expect(gateway.save).toHaveBeenCalled();
  });
});
