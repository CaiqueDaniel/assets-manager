import { InvestmentBuilder } from '~/tests/fixture/assets/AssetsFixtures';

describe('Investment unit tests', () => {
  it('should be able to add a operation', () => {
    const sut = InvestmentBuilder.aInvestment().build();
    sut.addOperation({
      date: new Date('2024-09-22'),
      quantity: 2,
      unitValue: 5,
    });

    expect(sut.operations).toHaveLength(1);
  });
});
