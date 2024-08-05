package domain

type Money struct {
	value    float64
	currency *Currency
}

func NewMoney(value float64, currencyType string) (*Money, error) {
	currency, err := NewCurrency(currencyType)

	if err != nil {
		return nil, err
	}

	money := &Money{
		value:    value,
		currency: currency,
	}

	return money, err
}

func (m *Money) GetValue() float64 {
	return m.value
}

func (m *Money) GetCurrency() string {
	return m.currency.value
}
