import { createContext, PropsWithChildren, useContext } from 'react';
import { MemoryInvestmentGateway } from './gateways/MemoryInvestmentGateway';
import { FormInvestmentFactory } from '../../core/application/investment/FormInvestmentFactory';
import { SaveInvestmentUseCase } from '../../core/application/investment/SaveInvestmentUseCase';
import { SearchInvestmentsUseCase } from '../../core/application/investment/SearchInvestmentsUseCase';

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
  const searchInvestmentsUseCase = new SearchInvestmentsUseCase(gateway);

  return (
    <InvestmentModuleContext.Provider
      value={{
        saveInvestmentUseCase,
        searchInvestmentsUseCase,
      }}
    >
      {children}
    </InvestmentModuleContext.Provider>
  );
}

type Context = {
  saveInvestmentUseCase: SaveInvestmentUseCase;
  searchInvestmentsUseCase: SearchInvestmentsUseCase;
};
