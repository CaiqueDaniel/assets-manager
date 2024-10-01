import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useOperationModuleContext } from '../../OperationModuleContext';
import { Operation } from '~/modules/financial-assets/core/domain/operation/Operation';

export function useListOperationsPresenter() {
  const { searchOperationUseCase } = useOperationModuleContext();
  const [operations, setoperations] = useState<Operation[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(loadItems, []);

  return {
    operations: operations.map(({ id, type, date, quantity, unitValue }) => ({
      id: id as string,
      type,
      date,
      quantity,
      unitValue,
    })),
    currentPage,
    lastPage,
  };

  function loadItems() {
    searchOperationUseCase
      .execute()
      .then(({ items, currentPage, lastPage }) => {
        setoperations(items);
        setCurrentPage(currentPage);
        setLastPage(lastPage);
      })
      .catch(() => toast.error('Não foi possível recuperar as operações'));
  }
}
