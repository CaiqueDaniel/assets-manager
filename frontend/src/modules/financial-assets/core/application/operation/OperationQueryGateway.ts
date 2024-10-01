import { PaginatedResult } from '../../../../shared/core/PaginatedResult';
import { Operation } from '../../domain/operation/Operation';

export interface OperationQueryGateway {
  search(): Promise<PaginatedResult<Operation>>;
}
