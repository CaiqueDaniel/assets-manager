import { OperationQueryGateway } from './OperationQueryGateway';

export class SearchOperationUseCase {
  constructor(private readonly gateway: OperationQueryGateway) {}

  execute() {
    return this.gateway.search();
  }
}
