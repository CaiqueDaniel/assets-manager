import {
  CurrencyType,
  Investment,
  InvestmentType,
} from '../../domain/investment/Investment';
import { InvestmentFactory } from '../../domain/investment/InvestmentFactory';
import { InvestmentFormDto } from './InvestmentFormDto';

export class AppInvestmentFactory implements InvestmentFactory<Props> {
  create(props: Props): Investment {
    return new Investment(
      props.code,
      props.type as InvestmentType,
      0,//parseFloat(props.totalValue),
      props.currency as CurrencyType,
      0,//parseFloat(props.initialOperation.quantity)
    );
  }
}

type Props = InvestmentFormDto;
