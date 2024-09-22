import { NumberParser } from '~/modules/shared/infra/helpers/NumberParser';

describe('NumberParser unit tests', () => {
  it('should be able to parse a brazilian format number', () => {
    const result = NumberParser.toFloat('1.005,19');
    expect(result).toBe(1005.19);
  });
});
