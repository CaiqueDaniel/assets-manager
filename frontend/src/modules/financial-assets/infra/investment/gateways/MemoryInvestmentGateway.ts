import { InvestmentGateway } from '~/modules/financial-assets/core/domain/investment/InvestmentGateway';
import { PaginatedResult } from '../../../../shared/core/PaginatedResult';
import { InvestmentQueryRepository } from '../../../core/application/investment/InvestmentQueryRepository';
import { Investment } from '../../../core/domain/investment/Investment';

export class MemoryInvestmentGateway
  implements InvestmentGateway, InvestmentQueryRepository
{
  private items: Investment[] = [];

  async save(investment: Investment): Promise<void> {
    this.items.push(investment);
  }

  findById(id: string): Promise<Investment | undefined> {
    throw new Error('Method not implemented.');
  }

  async search(): Promise<PaginatedResult<Investment>> {
    return new PaginatedResult(
      [new Investment('INTR', 'Variable', 5, 'USD', 1, crypto.randomUUID())],
      1,
      1
    );
  }
}
