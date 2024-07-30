package investments_test

import (
	"assets-manager/backend/internal/core/investments/domain/entities"
	valueobject "assets-manager/backend/internal/core/investments/domain/value-object"
	"testing"
	"time"
)

func TestItShouldCreateAOperation(t *testing.T) {
	result, err := entities.NewOperation(entities.CreateOperationProps{
		Type:         valueobject.OPERATION_BUY,
		UnitValue:    1.5,
		Quantity:     1,
		Date:         time.Date(2024, time.July, 1, 0, 0, 0, 0, time.UTC),
	})

	if err != nil || result == nil {
		t.Fatal("Invalid operation")
	}
}

func TestItShouldNotCreateAOperationGivenInvalidType(t *testing.T) {
	result, err := entities.NewOperation(entities.CreateOperationProps{
		Type:         "invalid",
		UnitValue:    1.5,
		Quantity:     1,
		Date:         time.Date(2024, time.July, 1, 0, 0, 0, 0, time.UTC),
	})

	if result != nil || err == nil {
		t.Fatal("It should have failed")
	}
}

func TestItShouldNotCreateAOperationGivenNegativeUnitValue(t *testing.T) {
	result, err := entities.NewOperation(entities.CreateOperationProps{
		Type:         valueobject.OPERATION_BUY,
		UnitValue:    -1.5,
		Quantity:     1,
		Date:         time.Date(2024, time.July, 1, 0, 0, 0, 0, time.UTC),
	})

	if result != nil || err == nil {
		t.FailNow()
	}
}

func TestItShouldNotCreateAOperationGivenNegativeQuantity(t *testing.T) {
	result, err := entities.NewOperation(entities.CreateOperationProps{
		Type:         valueobject.OPERATION_BUY,
		UnitValue:    1.5,
		Quantity:     -1,
		Date:         time.Date(2024, time.July, 1, 0, 0, 0, 0, time.UTC),
	})

	if result != nil || err == nil {
		t.FailNow()
	}
}
