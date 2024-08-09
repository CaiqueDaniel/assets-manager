import { useNavigate } from "react-router-dom";
import { InvestmentFormDto } from "../../types/InvestmentFormDto";
import { useInvestmentsGatewayContext } from "../../contexts/InvestmentsGatewayContext";
import { GatewayError } from "../../../../shared/errors/GatewayError";
import { useState } from "react";

export function useInvestmentFormFeaturePresenter() {
  const [error, setError] = useState<GatewayError | undefined>();

  const gateway = useInvestmentsGatewayContext();
  const navigate = useNavigate();
  const onCancel = () => navigate("..");
  const onSubmit = async (values: InvestmentFormDto) => {
    try {
      await gateway.create(values);
      navigate("..");
    } catch (error) {
      setError(error as GatewayError);
    }
  };

  return { initialValues, error, onSubmit, onCancel };
}

const initialValues: InvestmentFormDto = {
  code: "",
  date: new Date(),
  negotiationCurrency: "BRL",
  quantity: 1,
  unitValue: 1,
};
