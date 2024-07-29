import { Box, TextField, Select, MenuItem } from "@mui/material";
import { FormLayout } from "../../../shared/layouts/FormLayout";

export function AddInvestmentPage() {
  return (
    <FormLayout>
      <TextField name="code" label="Código" sx={{ mb: 1 }} fullWidth />
      <Select
        value=""
        label="Operação"
        onChange={() => {}}
        sx={{ mb: 1 }}
        fullWidth
      >
        <MenuItem value="buy">Compra</MenuItem>
        <MenuItem value="sell">Venda</MenuItem>
      </Select>

      <Box
        display="grid"
        gridTemplateColumns="auto 100px"
        columnGap="8px"
        sx={{ mb: 1 }}
      >
        <TextField name="unitValue" label="Valor por cota/ação" fullWidth />
        <Select
          value=""
          label="Moeda"
          onChange={() => {}}
          sx={{ mb: 1 }}
          fullWidth
        >
          <MenuItem value="brl">Real</MenuItem>
          <MenuItem value="usd">Dolar</MenuItem>
        </Select>
      </Box>

      <TextField name="quantity" label="Quantidade" sx={{ mb: 1 }} fullWidth />

      <TextField
        name="date"
        label="Data da operação"
        sx={{ mb: 1 }}
        fullWidth
      />
    </FormLayout>
  );
}
