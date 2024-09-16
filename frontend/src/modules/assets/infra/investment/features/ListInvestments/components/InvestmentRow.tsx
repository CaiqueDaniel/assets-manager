import { IconButton, TableCell } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { CurrencyType, InvestmentType } from '../../../../../core/domain/investment/Investment';
import { NumberFormatter } from '../../../../../../shared/infra/helpers/NumberFormatter';

export function InvestmentRow({
  code,
  currency,
  quantity,
  type,
  unitValue,
}: Props) {
  return (
    <>
      <TableCell>{code}</TableCell>
      <TableCell>{quantity.toLocaleString('pt-br')}</TableCell>
      <TableCell>{NumberFormatter.toCurrency(unitValue, currency)}</TableCell>
      <TableCell>{type}</TableCell>
      <TableCell>
        <IconButton onClick={() => {}}>
          <EditIcon />
        </IconButton>
      </TableCell>
    </>
  );
}

type Props = {
  code: string;
  currency: CurrencyType;
  quantity: number;
  type: InvestmentType;
  unitValue: number;
};
