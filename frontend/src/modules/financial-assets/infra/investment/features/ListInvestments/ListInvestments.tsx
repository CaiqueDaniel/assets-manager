import { ReactNode } from 'react';

import { DataGrid } from '../../../../../shared/infra/components/DataGrid';
import { useListInvestmentsPresenter } from './useListInvestmentsPresenter';
import { InvestmentRow } from './components/InvestmentRow';
import { CurrencyType } from '~/modules/financial-assets/core/domain/investment/Investment';

export function ListInvestment({ children }: Props) {
  const { investments } = useListInvestmentsPresenter();

  return (
    <DataGrid columns={columns} nested={Boolean(children)}>
      {investments.map((investment) => (
        <DataGrid.Row component={<InvestmentRow {...investment} />}>
          {children(investment.currency)}
        </DataGrid.Row>
      ))}
    </DataGrid>
  );
}

const columns = [
  'Código',
  'Quantidade total',
  'Valor total',
  'Tipo de investimento',
  'Ações',
];

type Props = {
  children: (currency: CurrencyType) => ReactNode;
};
