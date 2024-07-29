import {
  TextField,
  MenuItem,
  Box,
  TextFieldProps,
  Button,
  Typography,
} from "@mui/material";
import { DatePickerProps } from "@mui/x-date-pickers";
import { Field, Form, Formik } from "formik";

import { useInvestmentFormFeaturePresenter } from "../hooks/useInvestmentFormFeaturePresenter";
import { InvestmentFormDto } from "../types/InvestmentFormDto";
import { DateField } from "../../../shared/components/DateField";

export function InvestmentFormFeature() {
  const { initialValues, onSubmit } = useInvestmentFormFeaturePresenter();

  return (
    <Formik<InvestmentFormDto>
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <Field
            as={TextField}
            name="code"
            label="Código"
            sx={{ mb: 2 }}
            fullWidth
          />

          <Box
            display="grid"
            gridTemplateColumns="1fr 1fr"
            columnGap={2}
            sx={{ mb: 2 }}
          >
            <Field value="operation">
              {(props: TextFieldProps) => (
                <TextField
                  select
                  label="Operação"
                  sx={{ mb: 2 }}
                  fullWidth
                  {...props}
                >
                  <MenuItem value="buy">Compra</MenuItem>
                  <MenuItem value="sell">Venda</MenuItem>
                </TextField>
              )}
            </Field>

            <Field name="date">
              {(props: DatePickerProps<any>) => (
                <DateField {...props} label="Data da operação" sx={{ mb: 2 }} />
              )}
            </Field>
          </Box>

          <Box
            display="grid"
            gridTemplateColumns="auto 100px"
            columnGap={2}
            sx={{ mb: 2 }}
          >
            <Field
              as={TextField}
              name="unitValue"
              label="Valor por cota/ação"
              fullWidth
            />

            <Field name="currency">
              {(props: TextFieldProps) => (
                <TextField select label="Moeda" fullWidth {...props}>
                  <MenuItem value="brl">R$</MenuItem>
                  <MenuItem value="usd">US$</MenuItem>
                </TextField>
              )}
            </Field>
          </Box>

          <Field
            as={TextField}
            name="quantity"
            label="Quantidade"
            sx={{ mb: 2 }}
            fullWidth
          />

          <Button color="primary">Concluir</Button>
        </Form>
      )}
    </Formik>
  );
}
