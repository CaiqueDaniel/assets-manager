import { InvestmentFormDto } from "../types/InvestmentFormDto";
import { InvestmentsGateway } from "./InvestmentsGateway";
import { Create } from "../../../../wailsjs/go/variableincome/VariableIncomeController";

export class DefaultInvestmentsGateway implements InvestmentsGateway {
  create(data: InvestmentFormDto): Promise<void> {
    return Create({
      ...data,
      date: data.date.toISOString(),
    });
  }
}
