package valueobject

import "errors"

const (
	CURRENCY_USD = "USD"
	CURRENCY_BRL = "BRL"
)

type Currency struct {
	value string
}

func NewCurrency(value string) (*Currency, error) {
	if value != CURRENCY_BRL && value != CURRENCY_USD {
		return nil, errors.New("Moeda inválida")
	}

	return &Currency{value: value}, nil
}
