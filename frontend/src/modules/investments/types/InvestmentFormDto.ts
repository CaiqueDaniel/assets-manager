export type InvestmentFormDto = {
  code: string;
  operation: "buy" | "sell";
  unitValue: number;
  currency: "usd" | "brl";
  quantity: number;
  date: Date;
};
