import { Operation } from '~/modules/assets/core/domain/operation/Operation';
import { OperationGateway } from '~/modules/assets/core/domain/operation/OperationGateway';

export class MemoryOperationGateway implements OperationGateway {
  async save(): Promise<void> {
    return;
  }

  async findById(): Promise<Operation> {
    await new Promise((resolve) => setTimeout(() => resolve(true), 10));
    return new Operation('buy', 3, 1, new Date(), crypto.randomUUID());
  }
}
