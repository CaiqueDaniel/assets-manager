import { createContext, PropsWithChildren, useContext } from 'react';
import { SaveOperationUseCase } from '../../core/application/operation/SaveOperationUseCase';
import { MemoryOperationGateway } from './gateways/MemoryOperationGateway';
import { FormOperationFactory } from './FormOperationFactory';
import { GetOperationUseCase } from '../../core/application/operation/GetOperationUseCase';
import { SearchOperationUseCase } from '../../core/application/operation/SearchOperationUseCase';

const OperationModuleContext = createContext<Context | undefined>(undefined);

export function useOperationModuleContext() {
  const context = useContext(OperationModuleContext);
  if (!context) throw new Error();
  return context;
}

export function OperationModuleProvider({ children }: PropsWithChildren) {
  const gateway = new MemoryOperationGateway();
  const factory = new FormOperationFactory();
  const saveOperationUseCase = new SaveOperationUseCase(gateway, factory);
  const getOperationUseCase = new GetOperationUseCase(gateway);
  const searchOperationUseCase = new SearchOperationUseCase(gateway);

  return (
    <OperationModuleContext.Provider
      value={{
        saveOperationUseCase,
        getOperationUseCase,
        searchOperationUseCase,
      }}
    >
      {children}
    </OperationModuleContext.Provider>
  );
}

type Context = {
  saveOperationUseCase: SaveOperationUseCase;
  getOperationUseCase: GetOperationUseCase;
  searchOperationUseCase: SearchOperationUseCase;
};
