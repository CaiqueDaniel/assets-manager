package investments_test

import (
	"assets-manager/backend/internal/core/investments/domain"
	"testing"
)

func TestItShouldCreateACurrency(t *testing.T) {
	types := [2]string{domain.CURRENCY_BRL, domain.CURRENCY_USD}

	for _, value := range types {
		result, err := domain.NewCurrency(value)

		if err != nil || result == nil {
			t.Fatal("Invalid operation")
		}
	}
}

func TestItShouldNotCreateACurrencyGivenInvalidValue(t *testing.T) {
	result, err := domain.NewCurrency("invalid")

	if result != nil || err == nil {
		t.Fatal("It should have failed")
	}
}
