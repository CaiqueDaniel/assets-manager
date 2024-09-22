export class NumberParser {
  static toFloat(value: string) {
    return parseFloat(value.replace(/\./g, '').replace(',', '.'));
  }
}
