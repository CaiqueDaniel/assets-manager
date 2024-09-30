import { createContext, PropsWithChildren, useContext } from 'react';
import { MemoryInvestmentGateway } from './gateways/MemoryInvestmentGateway';
import { FormInvestmentFactory } from '../../core/application/investment/FormInvestmentFactory';
import { SaveInvestmentUseCase } from '../../core/application/investment/SaveInvestmentUseCase';

const InvestmentModuleContext = createContext<Context | undefined>(undefined);

export function useInvestmentModuleContext() {
  const context = useContext(InvestmentModuleContext);
  if (!context) throw new Error();
  return context;
}

export function InvestmentModuleProvider({ children }: PropsWithChildren) {
  const gateway = new MemoryInvestmentGateway();
  const factory = new FormInvestmentFactory();
  const saveInvestmentUseCase = new SaveInvestmentUseCase(gateway, factory);

  return (
    <InvestmentModuleContext.Provider
      value={{
        saveInvestmentUseCase,
      }}
    >
      {children}
    </InvestmentModuleContext.Provider>
  );
}

type Context = {
  saveInvestmentUseCase: SaveInvestmentUseCase;
};
