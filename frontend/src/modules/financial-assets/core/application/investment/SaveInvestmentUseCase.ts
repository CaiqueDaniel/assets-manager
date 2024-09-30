import { InvestmentFactory } from '../../domain/investment/InvestmentFactory';
import { InvestmentGateway } from '../../domain/investment/InvestmentGateway';
import { InvestmentFormDto } from './InvestmentFormDto';

export class SaveInvestmentUseCase {
  constructor(
    private readonly gateway: InvestmentGateway,
    private readonly factory: InvestmentFactory<InvestmentFormDto>
  ) {}

  execute(input: InvestmentFormDto) {
    return this.gateway.save(this.factory.create(input));
  }
}
