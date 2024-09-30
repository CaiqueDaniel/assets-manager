import { useInvestmentModuleContext } from '~/modules/financial-assets/infra/investment/InvestmentModuleContext';
import { InvestmentFormDto } from '../../../../core/application/investment/InvestmentFormDto';

export function useInvestmentFormPresenter() {
  const { saveInvestmentUseCase } = useInvestmentModuleContext();

  const onSubmit = async (values: InvestmentFormDto) => {
    try {
      await saveInvestmentUseCase.execute(values);
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
