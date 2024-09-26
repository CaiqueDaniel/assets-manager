import { createContext, PropsWithChildren, useContext } from 'react';
import { SaveOperationUseCase } from '../../core/application/operation/SaveOperationUseCase';
import { MemoryOperationGateway } from './gateways/MemoryOperationGateway';
import { FormOperationFactory } from './FormOperationFactory';

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

  <OperationModuleContext.Provider
    value={{
      saveOperationUseCase,
    }}
  >
    {children}
  </OperationModuleContext.Provider>;
}

type Context = {
  saveOperationUseCase: SaveOperationUseCase;
};
