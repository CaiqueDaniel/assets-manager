import { PaginatedResult } from '../../../../shared/core/PaginatedResult';
import { Investment } from '../../domain/investment/Investment';

export interface InvestmentQueryRepository {
  search(): Promise<PaginatedResult<Investment>>;
}
