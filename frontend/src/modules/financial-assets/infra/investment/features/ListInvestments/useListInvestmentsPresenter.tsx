import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Investment } from '../../../../core/domain/investment/Investment';
import { useInvestmentModuleContext } from '~/modules/financial-assets/infra/investment/InvestmentModuleContext';

export function useListInvestmentsPresenter() {
  const { searchInvestmentsUseCase } = useInvestmentModuleContext();
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(loadItems, []);

  return {
    investments: investments.map(
      ({ id, code, currency, quantity, type, totalValue }) => ({
        id: id as string,
        code,
        currency,
        quantity,
        type,
        totalValue,
      })
    ),
    currentPage,
    lastPage,
  };

  function loadItems() {
    searchInvestmentsUseCase
      .execute()
      .then(({ items, currentPage, lastPage }) => {
        setInvestments(items);
        setCurrentPage(currentPage);
        setLastPage(lastPage);
      })
      .catch(() => toast.error('Não foi possível recuperar os investimentos'));
  }
}
