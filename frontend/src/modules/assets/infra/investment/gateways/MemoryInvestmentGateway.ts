import { PaginatedResult } from '../../../../shared/core/PaginatedResult';
import { InvestmentQueryRepository } from '../../../core/application/investment/InvestmentQueryRepository';
import { Investment } from '../../../core/domain/investment/Investment';

export class MemoryInvestmentGateway implements InvestmentQueryRepository {
  async search(): Promise<PaginatedResult<Investment>> {
    return new PaginatedResult(
      [new Investment('INTR', 'Variable', 5, 'USD', 1, crypto.randomUUID())],
      1,
      1
    );
  }
}
