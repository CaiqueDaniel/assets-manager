package desktop

import (
	usecases "assets-manager/backend/internal/core/investments/application/use-cases"
	variableincome "assets-manager/backend/internal/infra/investments/desktop/variable-income"
	repositories_memory "assets-manager/backend/internal/infra/investments/repositories/memory"
)

type InvestmentModule struct {
	VariableIncomeController *variableincome.VariableIncomeController
}

func NewInvestmentModule() *InvestmentModule {
	variableIncomeRepository := repositories_memory.NewMemoryVariableIncomeRepository()
	createVariableIncome := usecases.NewCreateVariableIncome(variableIncomeRepository)

	return &InvestmentModule{
		VariableIncomeController: variableincome.NewVariableIncomeController(createVariableIncome),
	}
}
