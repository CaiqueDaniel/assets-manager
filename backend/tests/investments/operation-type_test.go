package investments_test

import (
	valueobject "assets-manager/backend/internal/core/investments/value-object"
	"testing"
)

func TestItShouldCreateAOperationType(t *testing.T) {
	types := [2]string{valueobject.OPERATION_BUY, valueobject.OPERATION_SELL}

	for _, value := range types {
		result, err := valueobject.NewOperationType(value)

		if err != nil || result == nil {
			t.Fatal("Invalid operation")
		}
	}
}

func TestItShouldNotCreateAOperationTypeGivenInvalidValue(t *testing.T) {
	result, err := valueobject.NewOperationType("invalid")

	if result != nil || err == nil {
		t.Fatal("It should have failed")
	}
}
