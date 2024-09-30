import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Investment } from '../../domain/investment/Investment';
import { InvestmentQueryRepository } from './InvestmentQueryRepository';

export function useListInvestmentsPresenter(
  queryRepository: InvestmentQueryRepository
) {
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
    queryRepository
      .search()
      .then(({ items, currentPage, lastPage }) => {
        setInvestments(items);
        setCurrentPage(currentPage);
        setLastPage(lastPage);
      })
      .catch(() => toast.error('Não foi possível recuperar os investimentos'));
  }
}
