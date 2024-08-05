import { useNavigate } from "react-router-dom";
import { InvestmentFormDto } from "../types/InvestmentFormDto";
import { useInvestmentsGatewayContext } from "../contexts/InvestmentsGatewayContext";

export function useInvestmentFormFeaturePresenter() {
  const gateway = useInvestmentsGatewayContext();
  const navigate = useNavigate();
  const onSubmit = async (values: InvestmentFormDto) => {
    try {
      await gateway.create(values);
      navigate("..");
    } catch (error) {
      console.error(error);
    }
  };
  const onCancel = () => navigate("..");

  return { initialValues, onSubmit, onCancel };
}

const initialValues: InvestmentFormDto = {
  code: "",
  date: new Date(),
  negotiationCurrency: "BRL",
  quantity: 1,
  unitValue: 1,
};
