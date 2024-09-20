export class Investment {
  constructor(
    private _code: string,
    private _type: InvestmentType,
    private _totalValue: number,
    private _currency: CurrencyType,
    private _quantity: number,
    private _id?: string
  ) {}

  get id() {
    return this._id;
  }

  get code() {
    return this._code;
  }

  get type() {
    return this._type;
  }

  get totalValue() {
    return this._totalValue;
  }

  get currency() {
    return this._currency;
  }

  get quantity() {
    return this._quantity;
  }
}

export type CurrencyType = 'BRL' | 'USD';

export type InvestmentType = 'Variable' | 'CDB';
