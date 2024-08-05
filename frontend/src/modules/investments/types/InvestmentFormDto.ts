export type InvestmentFormDto = {
  code: string;
  unitValue: number;
  negotiationCurrency: "BRL" | "USD";
  quantity: number;
  date: Date;
};
