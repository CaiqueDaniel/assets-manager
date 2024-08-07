package investments_test

import (
	"assets-manager/backend/internal/core/investments/domain"
	"assets-manager/backend/internal/core/investments/domain/operation"
	variableincome "assets-manager/backend/internal/core/investments/domain/variable-income"
	"fmt"
	"testing"
	"time"
)

func TestItShouldCreate(t *testing.T) {
	result, err := variableincome.NewVariableIncome(variableincome.CreateVariableIncomeProps{
		Code:                "INTR",
		NegotiationCurrency: domain.CURRENCY_BRL,
	})

	if err.HasErrors() || result == nil {
		t.FailNow()
	}
}

func TestItShouldNotCreateWithoutACode(t *testing.T) {
	result, err := variableincome.NewVariableIncome(variableincome.CreateVariableIncomeProps{
		Code:                "",
		NegotiationCurrency: domain.CURRENCY_BRL,
	})

	if result != nil || !err.HasErrors() {
		t.Error("Failed to validate empty string")
	}
}

func TestItShouldAddAOperation(t *testing.T) {
	result, err := variableincome.NewVariableIncome(variableincome.CreateVariableIncomeProps{
		Code:                "INTR",
		NegotiationCurrency: domain.CURRENCY_BRL,
	})

	if err.HasErrors() || result == nil {
		t.FailNow()
	}

	errors := result.AddOperation(operation.CreateOperationProps{
		Type:      operation.OPERATION_BUY,
		UnitValue: 1,
		Quantity:  1,
		Date:      time.Now(),
	})
	fmt.Println(errors)

	if errors.HasErrors() {
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
