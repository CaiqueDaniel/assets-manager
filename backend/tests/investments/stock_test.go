package stocks_test

import (
	"assets-manager/backend/internal/core/investments/domain"
	valueobject "assets-manager/backend/internal/core/investments/value-object"
	"testing"
	"time"
)

func TestItShouldCreateAStock(t *testing.T) {
	result, err := domain.NewStock(domain.CreateStockProps{
		Code:                "INTR",
		NegotiationCurrency: valueobject.CURRENCY_BRL,
	})

	if err != nil || result == nil {
		t.FailNow()
	}
}

func TestItShouldAddAOperation(t *testing.T) {
	result, err := domain.NewStock(domain.CreateStockProps{
		Code:                "INTR",
		NegotiationCurrency: valueobject.CURRENCY_BRL,
	})

	if err != nil || result == nil {
		t.FailNow()
	}

	err = result.AddOperation(domain.CreateOperationProps{
		Type:      valueobject.OPERATION_BUY,
		UnitValue: 1,
		Quantity:  1,
		Date:      time.Now(),
	})

	if err != nil {
		t.FailNow()
	}

	if len(result.GetOperations()) < 1 {
		t.Fatal("Operation was not registered")
	}

	total := result.GetTotalValueBought()

	if total.GetValue() == 0 {
		t.Fatal("Total was not updated")
	}

	if result.GetTotalQuantity() == 0 {
		t.Fatal("Quantity was not updated")
	}
}
