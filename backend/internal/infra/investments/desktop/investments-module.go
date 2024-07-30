package desktop

import (
	usecases "assets-manager/backend/internal/core/investments/application/use-cases"
	"assets-manager/backend/internal/infra/investments/desktop/controllers"
	repositories_memory "assets-manager/backend/internal/infra/investments/repositories/memory"
)

type InvestmentModule struct {
	VariableIncomeController *controllers.VariableIncomeController
}

func NewInvestmentModule() *InvestmentModule {
	variableIncomeRepository := repositories_memory.NewMemoryVariableIncomeRepository()
	createVariableIncome := usecases.NewCreateVariableIncome(variableIncomeRepository)

	return &InvestmentModule{
		VariableIncomeController: controllers.NewVariableIncomeController(createVariableIncome),
	}
}
