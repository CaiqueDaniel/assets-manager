import { NumberFormatter } from '~/modules/shared/infra/helpers/NumberFormatter';

describe('NumberFormatter unit tests', () => {
  it('should be able to format a number to brazilian format', () => {
    const result = NumberFormatter.toDecimalString(1005.19);
    expect(result).toBe('1.005,19');
  });

  it('should be able to format a number into a currency using brazilian number format', () => {
    const result = NumberFormatter.toCurrency(100.19, 'BRL');
    expect(result.replace(String.fromCharCode(160), ' ')).toBe('R$ 100,19');
  });
});
