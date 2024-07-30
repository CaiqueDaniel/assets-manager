package investments_test

import (
	valueobject "assets-manager/backend/internal/core/investments/value-object"
	"testing"
)

func TestItShouldCreateACurrency(t *testing.T) {
	types := [2]string{valueobject.CURRENCY_BRL, valueobject.CURRENCY_USD}

	for _, value := range types {
		result, err := valueobject.NewCurrency(value)

		if err != nil || result == nil {
			t.Fatal("Invalid operation")
		}
	}
}

func TestItShouldNotCreateACurrencyGivenInvalidValue(t *testing.T) {
	result, err := valueobject.NewCurrency("invalid")

	if result != nil || err == nil {
		t.Fatal("It should have failed")
	}
}
