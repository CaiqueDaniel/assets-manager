import { Operation } from '../operation/Operation';

export class Investment {
  private _operations: Operation[] = [];

  constructor(
    public readonly code: string,
    public readonly type: InvestmentType,
    public readonly totalValue: number,
    public readonly currency: CurrencyType,
    public readonly quantity: number,
    public readonly id?: string
  ) {}

  addOperation(props: AddOperationProps) {
    this._operations.push(
      new Operation(props.unitValue, props.quantity, props.date)
    );
  }

  get operations() {
    return this._operations;
  }
}

export type CurrencyType = 'BRL' | 'USD';

export type InvestmentType = 'Variable' | 'CDB';

type AddOperationProps = {
  unitValue: number;
  quantity: number;
  date: Date;
};
