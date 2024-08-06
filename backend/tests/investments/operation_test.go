package investments_test

import (
	op "assets-manager/backend/internal/core/investments/domain/operation"
	"testing"
	"time"
)

func TestItShouldCreateAOperation(t *testing.T) {
	result, err := op.NewOperation(op.CreateOperationProps{
		Type:      op.OPERATION_BUY,
		UnitValue: 1.5,
		Quantity:  1,
		Date:      time.Date(2024, time.July, 1, 0, 0, 0, 0, time.UTC),
	})

	if err.HasErrors() || result == nil {
		t.Fatal("Invalid operation")
	}
}

func TestItShouldNotCreateAOperationGivenInvalidType(t *testing.T) {
	result, err := op.NewOperation(op.CreateOperationProps{
		Type:      "invalid",
		UnitValue: 1.5,
		Quantity:  1,
		Date:      time.Date(2024, time.July, 1, 0, 0, 0, 0, time.UTC),
	})

	if result != nil || !err.HasErrors() {
		t.Fatal("It should have failed")
	}
}

func TestItShouldNotCreateAOperationGivenNegativeUnitValue(t *testing.T) {
	result, err := op.NewOperation(op.CreateOperationProps{
		Type:      op.OPERATION_BUY,
		UnitValue: -1.5,
		Quantity:  1,
		Date:      time.Date(2024, time.July, 1, 0, 0, 0, 0, time.UTC),
	})

	if result != nil || !err.HasErrors() {
		t.FailNow()
	}
}

func TestItShouldNotCreateAOperationGivenNegativeQuantity(t *testing.T) {
	result, err := op.NewOperation(op.CreateOperationProps{
		Type:      op.OPERATION_BUY,
		UnitValue: 1.5,
		Quantity:  -1,
		Date:      time.Date(2024, time.July, 1, 0, 0, 0, 0, time.UTC),
	})

	if result != nil || !err.HasErrors() {
		t.FailNow()
	}
}
