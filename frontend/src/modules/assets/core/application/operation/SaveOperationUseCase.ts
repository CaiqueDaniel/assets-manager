import { OperationFactory } from '../../domain/operation/OperationFactory';
import { OperationGateway } from '../../domain/operation/OperationGateway';
import { OperationFormDto } from './OperationFormDto';

export class SaveOperationUseCase {
  constructor(
    private readonly gateway: OperationGateway,
    private readonly factory: OperationFactory<OperationFormDto>
  ) {}

  execute(values: OperationFormDto) {
    return this.gateway.save(this.factory.create(values));
  }
}
