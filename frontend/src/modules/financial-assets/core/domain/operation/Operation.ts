export class Operation {
  constructor(
    public readonly type: OperationType,
    public readonly unitValue: number,
    public readonly quantity: number,
    public readonly date: Date,
    public readonly id?: string
  ) {}
}

export type OperationType = 'buy' | 'sell';
