import { SxProps, Theme } from "@mui/material";
import dayjs from "dayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import 'dayjs/locale/pt-br';

export function DateField(props: Readonly<Props>) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <DatePicker
        value={dayjs(props.value)}
        onChange={(evt) =>
          props.onChange && props.onChange(evt?.toDate() ?? new Date())
        }
        sx={{ width: "100%", ...props.sx }}
      />
    </LocalizationProvider>
  );
}

type Props = {
  sx?: SxProps<Theme>;
  onChange?: (value: Date) => void;
  label?: string;
  value: Date;
};
