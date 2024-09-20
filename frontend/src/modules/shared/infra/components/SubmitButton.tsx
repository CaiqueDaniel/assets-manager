import { Button, CircularProgress } from "@mui/material";
import { PropsWithChildren } from "react";

export function SubmitButton({ isSubmitting, children }: Readonly<Props>) {
  return (
    <Button
      size="large"
      variant="contained"
      color="primary"
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <CircularProgress size={20} color="info" sx={{ mr: 1 }} />
      ) : (
        <></>
      )}
      {children}
    </Button>
  );
}

type Props = PropsWithChildren & {
  isSubmitting: boolean;
};
