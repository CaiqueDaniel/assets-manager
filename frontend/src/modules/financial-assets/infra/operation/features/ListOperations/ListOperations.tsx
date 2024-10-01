import { DataGrid } from '../../../../../shared/infra/components/DataGrid';
import { OperationRow } from './components/OperationRow';
import { useListOperationsPresenter } from './useListOperationsPresenter';
import { CurrencyType } from '~/modules/financial-assets/core/domain/investment/Investment';

export function ListOperations({ currency }: Props) {
  const { operations } = useListOperationsPresenter();

  return (
    <DataGrid columns={columns}>
      {operations.map((operation) => (
        <DataGrid.Row component={<OperationRow {...operation} currency={currency} />} />
      ))}
    </DataGrid>
  );
}

const columns = [
  'Tipo',
  'Quantidade',
  'Valor unitário',
  'Valor total',
  'Data',
  'Ações',
];

type Props = {
  currency: CurrencyType;
};
