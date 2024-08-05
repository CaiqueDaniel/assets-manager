package usecases

import (
	"assets-manager/backend/internal/core/investments/domain/operation"
	variableincome "assets-manager/backend/internal/core/investments/domain/variable-income"
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

func (usecase *CreateVariableIncome) Execute(input CreateVariableIncomeInput) error {
	entity, err := variableincome.NewVariableIncome(variableincome.CreateVariableIncomeProps{
		Code:                input.Code,
		NegotiationCurrency: input.NegotiationCurrency,
	})

	if err != nil {
		return err
	}

	err = entity.AddOperation(operation.CreateOperationProps{
		Type:      operation.OPERATION_BUY,
		UnitValue: input.InitalOperation.UnitValue,
		Quantity:  input.InitalOperation.Quantity,
		Date:      input.InitalOperation.Date,
	})

	if err != nil {
		return err
	}

	return usecase.repository.Save(entity)
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
