import { InvestmentFormDto } from "../types/InvestmentFormDto";

export function useInvestmentFormFeaturePresenter() {
  const onSubmit = (values: InvestmentFormDto) => {};

  return { initialValues, onSubmit };
}

const initialValues: InvestmentFormDto = {
  code: "",
  date: new Date(),
  operation: "buy",
  currency: "brl",
  quantity: 1,
  unitValue: 1,
};
