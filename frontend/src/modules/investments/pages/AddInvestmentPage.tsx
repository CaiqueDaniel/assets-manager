import { Typography } from "@mui/material";
import { FormLayout } from "../../../shared/layouts/FormLayout";
import { InvestmentFormFeature } from "../features/InvestmentFormFeature";

export function AddInvestmentPage() {
  return (
    <FormLayout>
      <Typography variant="h5" mb={3}>Adicionar investimento</Typography>
      <InvestmentFormFeature />
    </FormLayout>
  );
}
