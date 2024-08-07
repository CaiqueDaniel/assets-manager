package variableincome

import (
	usecases "assets-manager/backend/internal/core/investments/application/use-cases"
	shared "assets-manager/backend/internal/infra/shared/desktop"
	"fmt"
	"time"
)

type VariableIncomeController struct {
	createVariableIncome *usecases.CreateVariableIncome
}

func NewVariableIncomeController(
	createVariableIncome *usecases.CreateVariableIncome,
) *VariableIncomeController {
	return &VariableIncomeController{
		createVariableIncome: createVariableIncome,
	}
}

func (c *VariableIncomeController) Create(dto *CreateVariableIncomeDto) *shared.ErrorResponse {
	date, err := time.Parse("2006-01-02T15:04:05Z", dto.Date)

	if err != nil {
		fmt.Println(err)
		return shared.ErrorHandler(err)
	}

	validationErrors, generalError := c.createVariableIncome.Execute(usecases.CreateVariableIncomeInput{
		Code:                dto.Code,
		NegotiationCurrency: dto.NegotiationCurrency,
		InitalOperation: usecases.CreateVariableIncomeOperationInput{
			UnitValue: dto.UnitValue,
			Quantity:  dto.Quantity,
			Date:      date,
		},
	})

	if generalError != nil {
		return shared.ErrorHandler(generalError)
	}

	if validationErrors.HasErrors() {
		return shared.ErrorHandler(validationErrors)
	}

	return nil
}
