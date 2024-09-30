import { Box, MenuItem } from '@mui/material';
import { Field, useFormikContext } from 'formik';
import { DateField } from '~/modules/shared/infra/components/DateField';
import { NumberField } from '~/modules/shared/infra/components/NumberField';
import { TextField } from '~/modules/shared/infra/components/TextField';

export function OperationFormFields() {
  const { setFieldValue } = useFormikContext();
  const onChangeOperationDate = (value: Date) => setFieldValue('date', value);

  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns="1fr 1fr"
        columnGap={2}
        sx={{ mb: 2 }}
      >
        <Field as={TextField} name="type" label="Tipo" fullWidth select>
          <MenuItem value="buy">Compra</MenuItem>
          <MenuItem value="sell">Venda</MenuItem>
        </Field>

        <Field name="date">
          {(props: any) => (
            <DateField
              value={props.meta.value}
              onChange={onChangeOperationDate}
              label="Data da operação"
            />
          )}
        </Field>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="1fr 1fr"
        columnGap={2}
        sx={{ mb: 2 }}
      >
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
