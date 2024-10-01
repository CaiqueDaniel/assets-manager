import { OperationQueryGateway } from '~/modules/financial-assets/core/application/operation/OperationQueryGateway';
import { Operation } from '~/modules/financial-assets/core/domain/operation/Operation';
import { OperationGateway } from '~/modules/financial-assets/core/domain/operation/OperationGateway';
import { PaginatedResult } from '~/modules/shared/core/PaginatedResult';

export class MemoryOperationGateway
  implements OperationGateway, OperationQueryGateway
{
  async save(): Promise<void> {
    return;
  }

  async findById(): Promise<Operation> {
    await new Promise((resolve) => setTimeout(() => resolve(true), 10));
    return new Operation('buy', 3, 1, new Date(), crypto.randomUUID());
  }

  async search(): Promise<PaginatedResult<Operation>> {
    return new PaginatedResult(
      [new Operation('buy', 1, 1, new Date(), crypto.randomUUID())],
      1,
      1
    );
  }
}
