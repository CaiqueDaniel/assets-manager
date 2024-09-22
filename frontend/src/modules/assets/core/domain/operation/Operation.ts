export class Operation {
  constructor(
    public readonly unitValue: number,
    public readonly quantity: number,
    public readonly date: Date,
    public readonly id?: string
  ) {}
}
