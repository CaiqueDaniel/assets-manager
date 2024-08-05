package investments_test

import (
	"assets-manager/backend/internal/core/investments/domain/operation"
	"testing"
)

func TestItShouldCreateAOperationType(t *testing.T) {
	types := [2]string{operation.OPERATION_BUY, operation.OPERATION_SELL}

	for _, value := range types {
		result, err := operation.NewOperationType(value)

		if err != nil || result == nil {
			t.Fatal("Invalid operation")
		}
	}
}

func TestItShouldNotCreateAOperationTypeGivenInvalidValue(t *testing.T) {
	result, err := operation.NewOperationType("invalid")

	if result != nil || err == nil {
		t.Fatal("It should have failed")
	}
}
