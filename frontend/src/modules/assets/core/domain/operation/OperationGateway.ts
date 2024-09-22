import { Gateway } from '~/modules/shared/core/Gateway';
import { Operation } from './Operation';

export interface OperationGateway extends Gateway<Operation> {
  findById(id: string, investmentId: string): Promise<Operation | undefined>;
}
