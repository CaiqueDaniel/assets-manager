package usecases

import (
	"assets-manager/backend/internal/core/investments/domain/entities"
	"assets-manager/backend/internal/core/investments/domain/repositories"
	valueobject "assets-manager/backend/internal/core/investments/domain/value-object"
	"time"
)

type CreateVariableIncome struct {
	repository repositories.VariableIncomeRepository
}

func NewCreateVariableIncome(repository repositories.VariableIncomeRepository) *CreateVariableIncome {
	return &CreateVariableIncome{
		repository: repository,
	}
}

func (usecase *CreateVariableIncome) Execute(input CreateVariableIncomeInput) error {
	entity, err := entities.NewVariableIncome(entities.CreateVariableIncomeProps{
		Code:                input.Code,
		NegotiationCurrency: input.NegotiationCurrency,
	})

	if err != nil {
		return err
	}

	err = entity.AddOperation(entities.CreateOperationProps{
		Type:      valueobject.OPERATION_BUY,
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
