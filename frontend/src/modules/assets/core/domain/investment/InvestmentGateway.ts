import { Investment } from './Investment';

export interface InvestmentGateway {
  save(investment: Investment): Promise<void>;
  findById(id: string): Promise<Investment | undefined>;
}
