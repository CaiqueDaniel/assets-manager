package usecases

import (
	"assets-manager/backend/internal/core/investments/domain/operation"
	variableincome "assets-manager/backend/internal/core/investments/domain/variable-income"
	shared "assets-manager/backend/internal/core/shared/domain"
	"time"
)

type CreateVariableIncome struct {
	repository variableincome.VariableIncomeRepository
}

func NewCreateVariableIncome(repository variableincome.VariableIncomeRepository) *CreateVariableIncome {
	return &CreateVariableIncome{
		repository: repository,
	}
}

func (usecase *CreateVariableIncome) Execute(input CreateVariableIncomeInput) (*shared.ValidationErrorsCollection, error) {
	entity, validationErrors := variableincome.NewVariableIncome(variableincome.CreateVariableIncomeProps{
		Code:                input.Code,
		NegotiationCurrency: input.NegotiationCurrency,
	})
	operationErrors := entity.AddOperation(operation.CreateOperationProps{
		Type:      operation.OPERATION_BUY,
		UnitValue: input.InitalOperation.UnitValue,
		Quantity:  input.InitalOperation.Quantity,
		Date:      input.InitalOperation.Date,
	})

	validationErrors.Merge(operationErrors)

	if validationErrors.HasErrors() {
		return validationErrors, nil
	}

	repositoryError := usecase.repository.Save(entity)

	return validationErrors, repositoryError
}

type CreateVariableIncomeInput struct {
	Code                string
	NegotiationCurrency string
	InitalOperation     CreateVariableIncomeOperationInput
}

type CreateVariableIncomeOperationInput struct {
	UnitValue float64
	Quantity  float64
	Date      time.Time
}
