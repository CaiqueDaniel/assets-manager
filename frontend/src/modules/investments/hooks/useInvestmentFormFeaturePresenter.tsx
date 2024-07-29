import { useNavigate } from "react-router-dom";
import { InvestmentFormDto } from "../types/InvestmentFormDto";

export function useInvestmentFormFeaturePresenter() {
  const navigate = useNavigate();
  const onSubmit = (values: InvestmentFormDto) => {};
  const onCancel = () => navigate("..");

  return { initialValues, onSubmit, onCancel };
}

const initialValues: InvestmentFormDto = {
  code: "",
  date: new Date(),
  operation: "buy",
  currency: "brl",
  quantity: 1,
  unitValue: 1,
};
