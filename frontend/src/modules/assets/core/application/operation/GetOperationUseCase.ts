import { OperationGateway } from '../../domain/operation/OperationGateway';

export class GetOperationUseCase {
  constructor(private readonly gateway: OperationGateway) {}

  execute(input: Input) {
    return this.gateway.findById(input.id, input.investmentId);
  }
}

type Input = {
  id: string;
  investmentId: string;
};
