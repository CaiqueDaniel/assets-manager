import { Box, MenuItem, TextField } from '@mui/material';
import { Field, useFormikContext } from 'formik';
import { InvestmentFormDto } from '~/modules/financial-assets/core/application/investment/InvestmentFormDto';
import { DateField } from '~/modules/shared/infra/components/DateField';
import { NumberField } from '~/modules/shared/infra/components/NumberField';

export function InvestmentFormFields() {
  const { setFieldValue, errors } = useFormikContext<InvestmentFormDto>();
  const onChangeOperationDate = (value: Date) => setFieldValue('date', value);

  return (
    <>
      <Box display="grid" gridTemplateColumns="1fr 1fr" columnGap={2}>
        <Field
          as={TextField}
          name="code"
          label="Código"
          sx={{ mb: 2 }}
          error={Boolean(errors.code)}
          helperText={errors.code}
          fullWidth
        />

        <Field
          as={TextField}
          name="type"
          label="Tipo"
          sx={{ mb: 2 }}
          error={Boolean(errors.type)}
          helperText={errors.type}
          fullWidth
          select
        >
          <MenuItem value="Stocks">Ações</MenuItem>
          <MenuItem value="Funds">Fundos/ETFs</MenuItem>
          <MenuItem value="CDB">CDB/Time Deposit</MenuItem>
        </Field>
      </Box>

      <Field name="date">
        {(props: any) => (
          <DateField
            value={props.meta.value}
            onChange={onChangeOperationDate}
            label="Data da operação"
            sx={{ mb: 2 }}
          />
        )}
      </Field>

      <Box
        display="grid"
        gridTemplateColumns="100px auto 100px"
        columnGap={2}
        sx={{ mb: 2 }}
      >
        <Field
          name="currency"
          label="Moeda"
          as={TextField}
          error={Boolean(errors.currency)}
          helperText={errors.currency}
          select
          fullWidth
        >
          <MenuItem value="BRL">R$</MenuItem>
          <MenuItem value="USD">US$</MenuItem>
        </Field>

        <Field
          as={NumberField}
          name="unitValue"
          label="Valor por cota/ação"
          error={Boolean(errors.unitValue)}
          helperText={errors.unitValue}
        />

        <Field
          as={NumberField}
          name="quantity"
          label="Quantidade"
          sx={{ mb: 2 }}
          error={Boolean(errors.quantity)}
          helperText={errors.quantity}
        />
      </Box>
    </>
  );
}
