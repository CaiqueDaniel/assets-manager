package stocks_test

import (
	"assets-manager/backend/internal/core/stocks/domain"
	valueobject "assets-manager/backend/internal/core/stocks/value-object"
	"testing"
	"time"
)

func TestItShouldCreateAStock(t *testing.T) {
	result, err := domain.NewStock(domain.CreateStockProps{
		Code: "INTR",
	})

	if err != nil || result == nil {
		t.FailNow()
	}
}

func TestItShouldAddAOperation(t *testing.T) {
	result, err := domain.NewStock(domain.CreateStockProps{
		Code: "INTR",
	})

	if err != nil || result == nil {
		t.FailNow()
	}

	err = result.AddOperation(domain.CreateOperationProps{
		Type:         valueobject.OPERATION_BUY,
		CurrencyType: valueobject.CURRENCY_BRL,
		UnitValue:    1,
		Quantity:     1,
		Date:         time.Now(),
	})

	if err != nil {
		t.FailNow()
	}

	if len(result.GetOperations()) < 1 {
		t.Fatal("Operation was not registered")
	}

	total := result.GetTotal()

	if total.GetValue() == 0 {
		t.Fatal("Total was not updated")
	}

	if result.GetQuantity() == 0 {
		t.Fatal("Quantity was not updated")
	}
}
