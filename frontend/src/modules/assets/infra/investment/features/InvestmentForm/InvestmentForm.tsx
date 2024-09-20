import { FormFeature } from '../../../../../../modules/shared/infra/features/FormFeature';
import { InvestmentFormFields } from './components/InvestmentFormFields';
import { InvestmentFormDto } from '~/modules/assets/core/application/investment/InvestmentFormDto';
import { useInvestmentFormPresenter } from '~/modules/assets/core/application/investment/useInvestmentFormPresenter';
import { MemoryInvestmentGateway } from '../../gateways/MemoryInvestmentGateway';
import { AppInvestmentFactory } from '~/modules/assets/core/application/investment/AppInvestmentFactory';

export function InvestmentForm() {
  const { initialValues, onSubmit } = useInvestmentFormPresenter(
    new MemoryInvestmentGateway(),
    new AppInvestmentFactory()
  );

  return (
    <FormFeature<InvestmentFormDto>
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <InvestmentFormFields />
    </FormFeature>
  );
}
