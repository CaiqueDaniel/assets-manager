package investments_usecases_test

import (
	usecases "assets-manager/backend/internal/core/investments/application/use-cases"
	"assets-manager/backend/internal/core/investments/domain"
	repositories_memory "assets-manager/backend/internal/infra/investments/repositories/memory"
	"testing"
	"time"
)

func TestItShouldCreate(t *testing.T) {
	repository := repositories_memory.NewMemoryVariableIncomeRepository()
	sut := usecases.NewCreateVariableIncome(repository)
	validationErrors, generalError := sut.Execute(getData())

	if generalError != nil || validationErrors.HasErrors() {
		t.FailNow()
	}

	if len(repository.GetAll()) == 0 {
		t.Error("Variable income was not created")
	}
}

func getData() usecases.CreateVariableIncomeInput {
	return usecases.CreateVariableIncomeInput{
		Code:                "INTR",
		NegotiationCurrency: domain.CURRENCY_USD,
		InitalOperation: usecases.CreateVariableIncomeOperationInput{
			UnitValue: 1.5,
			Quantity:  2,
			Date:      time.Now(),
		},
	}
}
