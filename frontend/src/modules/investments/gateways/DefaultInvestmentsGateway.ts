import { InvestmentFormDto } from "../types/InvestmentFormDto";
import { InvestmentsGateway } from "./InvestmentsGateway";
import { Create } from "../../../../wailsjs/go/variableincome/VariableIncomeController";
import { BackendErrorResponse } from "../../../shared/types/BackendErrorResponse";
import { GatewayErrorFactory } from "../../../shared/errors/GatewayErrorFactory";

export class DefaultInvestmentsGateway implements InvestmentsGateway {
  async create(data: InvestmentFormDto): Promise<void> {
    const response = (await Create({
      ...data,
      date: data.date.toISOString(),
    })) as BackendErrorResponse | null;

    if (response) throw GatewayErrorFactory.from(response);
  }
}
