import { InvestmentFormDto } from "../types/InvestmentFormDto";

export interface InvestmentsGateway {
  create(data: InvestmentFormDto): Promise<void>;
}
