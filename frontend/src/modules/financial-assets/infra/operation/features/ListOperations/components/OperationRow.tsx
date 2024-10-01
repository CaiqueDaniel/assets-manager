import { IconButton, TableCell } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { NumberFormatter } from '../../../../../../shared/infra/helpers/NumberFormatter';
import { OperationType } from '~/modules/financial-assets/core/domain/operation/Operation';
import { CurrencyType } from '~/modules/financial-assets/core/domain/investment/Investment';

export function OperationRow({
  date,
  quantity,
  type,
  unitValue,
  currency,
  onClickBtnEdit,
}: Props) {
  return (
    <>
      <TableCell>
        {(type as OperationType) == 'buy' ? 'Compra' : 'Venda'}
      </TableCell>
      <TableCell>{quantity.toLocaleString('pt-br')}</TableCell>
      <TableCell>{NumberFormatter.toCurrency(unitValue, currency)}</TableCell>
      <TableCell>
        {NumberFormatter.toCurrency(quantity * unitValue, currency)}
      </TableCell>
      <TableCell>{new Date(date).toLocaleDateString()}</TableCell>
      <TableCell>
        <IconButton onClick={onClickBtnEdit}>
          <EditIcon />
        </IconButton>
      </TableCell>
    </>
  );
}

type Props = {
  type: OperationType;
  date: Date;
  quantity: number;
  unitValue: number;
  currency: CurrencyType;
  onClickBtnEdit: () => void;
};
