import { MenuItem, Box, TextFieldProps, Button } from "@mui/material";
import { DatePickerProps } from "@mui/x-date-pickers";
import { Field, Form, Formik } from "formik";
import { useEffect } from "react";
import { toast } from "react-toastify";

import { useInvestmentFormFeaturePresenter } from "./useInvestmentFormFeaturePresenter";
import { InvestmentFormDto } from "../../types/InvestmentFormDto";
import { DateField } from "../../../../shared/components/DateField";
import { SubmitButton } from "../../../../shared/components/SubmitButton";
import { TextField } from "../../../../shared/components/TextField";

export function InvestmentFormFeature() {
  const { initialValues, error, onSubmit, onCancel } =
    useInvestmentFormFeaturePresenter();

  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);

  return (
    <Formik<InvestmentFormDto>
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            as={TextField}
            name="code"
            label="Código"
            sx={{ mb: 2 }}
            errors={error?.getErrorsFor("code")}
          />

          <Field name="date" errors={error?.getErrorsFor("date")}>
            {(props: DatePickerProps<any>) => (
              <DateField {...props} label="Data da operação" sx={{ mb: 2 }} />
            )}
          </Field>

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
              errors={error?.getErrorsFor("unitValue")}
            />

            <Field name="currency" errors={error?.getErrorsFor("currency")}>
              {(props: TextFieldProps) => (
                <TextField select label="Moeda" fullWidth {...props}>
                  <MenuItem value="BRL">R$</MenuItem>
                  <MenuItem value="USD">US$</MenuItem>
                </TextField>
              )}
            </Field>
          </Box>

          <Field
            as={TextField}
            name="quantity"
            label="Quantidade"
            sx={{ mb: 2 }}
            errors={error?.getErrorsFor("quantity")}
          />

          <Box display="grid" gridTemplateColumns="1fr 1fr" columnGap={2}>
            <Button
              size="large"
              variant="outlined"
              color="error"
              onClick={onCancel}
              disabled={isSubmitting}
            >
              Cancelar
            </Button>

            <SubmitButton isSubmitting={isSubmitting}>Concluir</SubmitButton>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
