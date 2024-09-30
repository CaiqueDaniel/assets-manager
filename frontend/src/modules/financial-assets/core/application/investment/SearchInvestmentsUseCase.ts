import { InvestmentQueryRepository } from './InvestmentQueryRepository';

export class SearchInvestmentsUseCase {
  constructor(private readonly queryRepository: InvestmentQueryRepository) {}

  execute() {
    return this.queryRepository.search();
  }
}
