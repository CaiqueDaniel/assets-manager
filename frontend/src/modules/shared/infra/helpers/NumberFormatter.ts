export class NumberFormatter {
	static toDecimalString(value: number) {
		return value.toLocaleString('pt-br', {
			maximumFractionDigits: 2,
			minimumFractionDigits: 2,
		});
	}

	static toCurrency(value: number, currency: 'BRL' | 'USD') {
		return value.toLocaleString('pt-br', {
			style: 'currency',
			currency,
		});
	}
}
