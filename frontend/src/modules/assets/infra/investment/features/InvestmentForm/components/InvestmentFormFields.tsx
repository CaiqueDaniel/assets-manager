import { Box, MenuItem, TextField } from '@mui/material';
import { Field, useFormikContext } from 'formik';
import { DateField } from '~/modules/shared/infra/components/DateField';
import { NumberField } from '~/modules/shared/infra/components/NumberField';

export function InvestmentFormFields() {
  const { setFieldValue } = useFormikContext();
  const onChangeOperationDate = (value: Date) => setFieldValue('date', value);

  return (
    <>
      <Field as={TextField} name="code" label="Código" sx={{ mb: 2 }} fullWidth />

      <Field
        as={TextField}
        name="type"
        label="Tipo"
        sx={{ mb: 2 }}
        fullWidth
        select
      >
        <MenuItem value="Variable">
          Renda Variável (Ações, fundos, etc...)
        </MenuItem>
        <MenuItem value="CDB">CDB</MenuItem>
      </Field>

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
          name="negotiationCurrency"
          label="Moeda"
          as={TextField}
          select
          fullWidth
        >
          <MenuItem value="BRL">R$</MenuItem>
          <MenuItem value="USD">US$</MenuItem>
        </Field>

        <Field as={NumberField} name="unitValue" label="Valor por cota/ação" />

        <Field
          as={NumberField}
          name="quantity"
          label="Quantidade"
          sx={{ mb: 2 }}
        />
      </Box>
    </>
  );
}
