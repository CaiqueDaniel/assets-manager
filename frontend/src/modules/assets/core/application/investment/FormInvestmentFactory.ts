import { NumberParser } from '~/modules/shared/infra/helpers/NumberParser';
import {
  CurrencyType,
  Investment,
  InvestmentType,
} from '../../domain/investment/Investment';
import { InvestmentFactory } from '../../domain/investment/InvestmentFactory';
import { InvestmentFormDto } from './InvestmentFormDto';

export class FormInvestmentFactory implements InvestmentFactory<Props> {
  create(props: Props): Investment {
    const investment = new Investment(
      props.code,
      props.type as InvestmentType,
      0,
      props.currency as CurrencyType,
      0
    );

    investment.addOperation({
      date: props.date,
      quantity: NumberParser.toFloat(props.quantity),
      unitValue: NumberParser.toFloat(props.unitValue),
    });

    return investment;
  }
}

type Props = InvestmentFormDto;
