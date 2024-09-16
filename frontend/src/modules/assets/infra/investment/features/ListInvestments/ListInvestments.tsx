import { DataGrid } from '../../../../../shared/infra/components/DataGrid';
import { useListInvestmentsPresenter } from '../../../../core/application/investment/useListInvestmentsPresenter';
import { MemoryInvestmentGateway } from '../../gateways/MemoryInvestmentGateway';
import { InvestmentRow } from './components/InvestmentRow';

export function ListInvestment() {
  const { investments } = useListInvestmentsPresenter(
    new MemoryInvestmentGateway()
  );

  return (
    <DataGrid columns={columns}>
      {investments.map((investment) => (
        <DataGrid.Row component={<InvestmentRow {...investment} />} />
      ))}
    </DataGrid>
  );
}

const columns = [
  'Código',
  'Quantidade total',
  'Valor total',
  'Tipo de investimento',
  'Ações'
];
