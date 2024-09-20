import { Box, Button } from '@mui/material';
import { Form, Formik, FormikValues } from 'formik';
import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitButton } from '../components/SubmitButton';

export function FormFeature<T extends FormikValues>({
  initialValues,
  onSubmit,
  children,
}: Props<T>) {
  const navigate = useNavigate();

  return (
    <Formik<T> initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
          {children}
          <Box display="grid" gridTemplateColumns="1fr 1fr" columnGap={2}>
            <Button
              size="large"
              variant="outlined"
              color="error"
              onClick={() => navigate('..')}
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

type Props<T> = PropsWithChildren & {
  initialValues: T;
  onSubmit: (values: T) => void;
};
