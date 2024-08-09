import {
  DatePicker,
  DatePickerProps,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export function DateField(props: Readonly<DatePickerProps<any>>) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker {...props} sx={{ width: "100%", ...props.sx }} />
    </LocalizationProvider>
  );
}
