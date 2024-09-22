import * as Yup from 'yup';

import { FormFeature } from '../../../../../../modules/shared/infra/features/FormFeature';
import { InvestmentFormFields } from './components/InvestmentFormFields';
import { InvestmentFormDto } from '~/modules/assets/core/application/investment/InvestmentFormDto';
import { useInvestmentFormPresenter } from '~/modules/assets/core/application/investment/useInvestmentFormPresenter';
import { MemoryInvestmentGateway } from '../../gateways/MemoryInvestmentGateway';
import { FormInvestmentFactory } from '~/modules/assets/core/application/investment/FormInvestmentFactory';

export function InvestmentForm() {
  const { initialValues, onSubmit } = useInvestmentFormPresenter(
    new MemoryInvestmentGateway(),
    new FormInvestmentFactory()
  );

  return (
    <FormFeature<InvestmentFormDto>
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validation}
    >
      <InvestmentFormFields />
    </FormFeature>
  );
}

const required = 'Campo obrigatório';
const validation = Yup.object({
  code: Yup.string().max(255, 'Tamanho máximo de 255').required(required),
  type: Yup.string().required(required),
  date: Yup.date().required(required),
  currency: Yup.string().required(required),
  unitValue: Yup.string().test({
    test: (value) => value !== '0,00',
    message: required,
  }),
  quantity: Yup.string().test({
    test: (value) => value !== '0,00',
    message: required,
  }),
});
