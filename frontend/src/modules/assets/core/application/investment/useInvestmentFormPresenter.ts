import { InvestmentFactory } from '../../domain/investment/InvestmentFactory';
import { InvestmentGateway } from '../../domain/investment/InvestmentGateway';
import { InvestmentFormDto } from './InvestmentFormDto';

export function useInvestmentFormPresenter(
  gateway: InvestmentGateway,
  factory: InvestmentFactory<InvestmentFormDto>
) {
  const onSubmit = async (values: InvestmentFormDto) => {
    try {
      await gateway.save(factory.create(values));
    } catch (error) {
      console.error(error);
    }
  };

  return { initialValues, onSubmit };
}

const initialValues: InvestmentFormDto = {
  code: '',
  type: '',
  date: new Date(),
  currency: 'BRL',
  quantity: '0,00',
  unitValue: '0,00',
};
