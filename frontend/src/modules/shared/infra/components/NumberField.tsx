import { TextField as MUITextField, TextFieldProps } from "@mui/material";

export function NumberField({ errors, ...props }: Readonly<Props>) {
  const onInput = (evt: React.FormEvent<HTMLDivElement>) => {
    const maxSize = 12;
    const input = evt.target as HTMLInputElement;
    const digits = input.value
      .replace(/\D/g, "")
      .slice(0, maxSize - 1)
      .replace(/^(0+)/, "")
      .split("");

    if (digits.length <= 3)
      digits.unshift(..."0".repeat(3 - digits.length).split(""));

    input.value = digits
      .join("")
      .replace(/(\d+)(\d{2})/, "$1,$2")
      .replace(/(\d+)(\d{3})/, "$1.$2")
      .replace(/(\d+)(\d{3})/, "$1.$2");
  };

  return (
    <MUITextField
      {...props}
      type="tel"
      onInput={onInput}
      inputProps={{ style: { textAlign: "end" } }}
      fullWidth
    />
  );
}

type Props = TextFieldProps & {
  errors?: string[];
};
