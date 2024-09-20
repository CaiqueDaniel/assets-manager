import {
  CurrencyType,
  Investment,
  InvestmentType,
} from '~/modules/assets/core/domain/investment/Investment';

export class InvestmentBuilder {
  private code = 'INTR';
  private type: InvestmentType = 'Variable';
  private totalValue = 5;
  private currency: CurrencyType = 'USD';
  private quantity = 1;

  static aInvestment() {
    return new InvestmentBuilder();
  }

  buildFormDto() {
    return {
      code: this.code,
      type: this.type,
      currency: this.currency,
      date: new Date(),
      unitValue: this.totalValue.toString(),
      quantity: this.quantity.toString(),
    };
  }

  build() {
    return new Investment(
      this.code,
      this.type,
      this.totalValue,
      this.currency,
      this.quantity,
      crypto.randomUUID()
    );
  }
}
