import { TextField as MUITextField, TextFieldProps } from "@mui/material";

export function TextField({ errors, ...props }: Readonly<Props>) {
  return (
    <MUITextField
      {...props}
      error={Boolean(errors?.length)}
      helperText={errors && errors[0]}
      fullWidth
    />
  );
}

type Props = TextFieldProps & {
  errors?: string[];
};
