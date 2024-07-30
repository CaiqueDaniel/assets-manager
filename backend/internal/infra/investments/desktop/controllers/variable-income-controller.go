package controllers

import (
	usecases "assets-manager/backend/internal/core/investments/application/use-cases"
	"assets-manager/backend/internal/infra/investments/desktop/dtos"
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

func (c *VariableIncomeController) Create(dto *dtos.CreateVariableIncomeDto) error {
	return c.createVariableIncome.Execute(usecases.CreateVariableIncomeInput{
		Code:                dto.Code,
		NegotiationCurrency: dto.NegotiationCurrency,
		InitalOperation: usecases.CreateVariableIncomeOperationInput{
			UnitValue: dto.UnitValue,
			Quantity:  dto.Quantity,
			Date:      dto.Date,
		},
	})
}
